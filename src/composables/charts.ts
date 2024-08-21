import { ref } from 'vue'
import Highcharts from 'highcharts'
import { useI18n } from 'vue-i18n'
import type { CheckId, CheckStats } from "@/services/interfaces"
import { fetchCheckStats } from '@/services/checks'

export const useStatsCharts = () => {
  const { t } = useI18n()

  const checkStats = ref<CheckStats[]>([])

  const plotStatsCharts = async (checkId: CheckId) => {
    const response = await fetchCheckStats(checkId)
    if (!response) return

    checkStats.value = response
    plotResponseTimeChart(`response-time-${checkId}`)
    plotSuccessRateChart(`success-${checkId}`)
  }

  const plotResponseTimeChart = (hostElementId: string) => {
    const p99: number[][] = []
    const p95: number[][] = []
    const avg: number[][] = []

    checkStats.value.forEach(bucket => {
      p99.push([bucket.timestamp, +bucket.p99.toFixed()])
      p95.push([bucket.timestamp, +bucket.p95.toFixed()])
      avg.push([bucket.timestamp, +bucket.avg.toFixed()])
    })

    plotChart(hostElementId, [{
      name: 'P99',
      data: p99
    }, {
      name: 'P95',
      data: p95
    }, {
      name: t('metrics.avg').toUpperCase(),
      data: avg
    }])
  }

  const plotSuccessRateChart = (hostElementId: string) => {
    const success = checkStats.value.map(bucket => {
      return [bucket.timestamp, +(bucket.success * 100).toFixed()]
    })

    plotChart(hostElementId, [{
      name: t('metrics.success'),
      data: success
    }])
  }

  const plotChart = (hostElementId: string, series: any) => {
    Highcharts.chart(hostElementId, {
      chart: {
        type: 'area',
      },
      title: {
        text: ''
      },
      legend: {
        align: 'right',
        layout: 'vertical',
        verticalAlign: 'middle'
      },
      colors: ['#bdbdbd', '#939393', '#696969'],
      yAxis: {
        title: {
          text: ''
        },
        gridLineWidth: 0
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          hour: '%H:%M'
        }
      },
      series
    })
  }

  return { plotStatsCharts }
}
