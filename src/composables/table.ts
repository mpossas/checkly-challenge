import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export const useTable = () => {
  const { t } = useI18n()

  const headers: Record<string, string> = {
    type: 'check.type',
    name: 'check.name',
    success: 'metrics.success-ratio',
    avg: 'metrics.avg',
    p95: 'metrics.p95',
    p99: 'metrics.p99'
  }

  const tableHeaders = computed(() => {
    const translatedHeaders: Record<string, string> = {}
    Object.keys(headers).forEach(header => {
      translatedHeaders[header] = t(headers[header]).toUpperCase()
    })
    return translatedHeaders
  })

  return { tableHeaders }
}
