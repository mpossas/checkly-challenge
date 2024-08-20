export type CheckId = string
type CheckType = 'API' | 'BROWSER'

export interface Check {
  id: CheckId
  name: string
  type: CheckType
  success: number
  avg: number
  p95: number
  p99: number
}

export interface CheckStats {
  checkId: CheckId
  success: number
  avg: number
  p95: number
  p99: number
  timestamp: number
}
