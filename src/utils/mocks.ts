import type { Check, CheckStats } from '@/services/interfaces'

export const checkMock: Check = {
  id: 'fa0e2ef4-cc16-44b6-be49-0d60037f075f',
  name: 'Check 0',
  type: 'BROWSER',
  success: 0.5008333333333334,
  avg: 499.5816,
  p95: 948,
  p99: 989
}

export const checkStatsMock: CheckStats = {
  checkId: 'fa0e2ef4-cc16-44b6-be49-0d60037f075f',
  success: 0.46153846153846156,
  avg: 508.61538461538464,
  p95: 908.75,
  p99: 975.5,
  timestamp: 1724529600000
}
