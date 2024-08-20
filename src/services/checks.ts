import axios from 'axios'
import type { Check, CheckId, CheckStats } from './interfaces'

axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.responseType = 'json'

export const fetchChecks = () => axios.get<Check[]>('/checks')

export const fetchCheckStats = (checkId: CheckId) => {
  const now = Date.now()
  const oneWeekAgo = now - (7 * 24 * 60 * 60 * 1000)

  const params = {
    checkId,
    timestamp_gte: oneWeekAgo,
    timestamp_lte: now
  }

  return axios.get<CheckStats[]>('/check_stats', { params })
}
