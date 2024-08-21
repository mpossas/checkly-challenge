import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Highcharts from 'highcharts'
import highchartsAccessibility from "highcharts/modules/accessibility"
import type { CheckId, CheckStats } from "@/services/interfaces"
import { fetchCheckStats } from '@/services/checks'
import { toPercentage, toSeconds } from '@/utils/metrics'
import type { ChartOptions } from './interfaces'

highchartsAccessibility(Highcharts)

export const useStatsCharts = () => {
  const { t } = useI18n()

  const checkStats = ref<CheckStats[]>([])

  const plotStatsCharts = async (checkId: CheckId) => {
    const response = await fetchCheckStats(checkId)
    if (!response) return

    checkStats.value = response
    plotResponseTimeChart(`response-time-${checkId}`)
    plotSuccessRatioChart(`success-ratio-${checkId}`)
  }

  const plotResponseTimeChart = (hostElementId: string) => {
    const p99: number[][] = []
    const p95: number[][] = []
    const avg: number[][] = []

    checkStats.value.forEach(bucket => {
      p99.push([bucket.timestamp, toSeconds(bucket.p99)])
      p95.push([bucket.timestamp, toSeconds(bucket.p95)])
      avg.push([bucket.timestamp, toSeconds(bucket.avg)])
    })

    const series = [{
      name: 'P99',
      data: p99
    }, {
      name: 'P95',
      data: p95
    }, {
      name: t('metrics.avg').toUpperCase(),
      data: avg
    }]

    plotChart({
      hostElementId,
      suffix: 's',
      series
    })
  }

  const plotSuccessRatioChart = (hostElementId: string) => {
    const success = checkStats.value.map(bucket => {
      return [bucket.timestamp, toPercentage(bucket.success)]
    })

    const series = [{
      name: t('metrics.success-ratio'),
      data: success,
    }]

    plotChart({
      hostElementId,
      suffix: '%',
      series
    })
  }

  const plotChart = ({ hostElementId, suffix, series }: ChartOptions) => {
    Highcharts.chart(hostElementId, {
      chart: {
        type: 'area',
        height: 175
      },
      title: {
        text: ''
      },
      legend: {
        align: 'right',
        layout: 'vertical',
        verticalAlign: 'middle'
      },
      colors: ['#c8c8c8', '#7d7d7d', '#323232'],
      tooltip: {
        shared: true,
        xDateFormat: '%e %b %H:%M',
        valueSuffix: suffix
      },
      yAxis: {
        title: {
          text: ''
        },
        gridLineWidth: 0,
        labels: {
          formatter: function () {
            return this.value + suffix
          }
        }
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          hour: '%H:%M'
        }
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              align: 'center',
              layout: 'horizontal',
              verticalAlign: 'bottom',
            }
          }
        }]
      },
      series,
    })
  }

  return { plotStatsCharts }
}
