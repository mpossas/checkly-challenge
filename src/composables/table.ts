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

  Object.keys(headers).forEach(header => {
    headers[header] = t(header).toUpperCase()
  })

  return { tableHeaders: headers }
}
