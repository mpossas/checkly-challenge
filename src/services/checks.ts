import axios from 'axios'
import type { Check, CheckId, CheckStats } from './interfaces'

axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.responseType = 'json'

const apiFetch = async <T>(url: string, params?: object) => {
  try {
    const response = await axios.get<T>(url, params)
    return response.data
  } catch (e) {
    console.error(e)
  }
}

export const fetchChecks = () => apiFetch<Check[]>('/checks')

export const fetchCheckStats = (checkId: CheckId) => {
  const now = Date.now()
  const oneWeekAgo = now - (7 * 24 * 60 * 60 * 1000)

  const params = {
    checkId,
    timestamp_gte: oneWeekAgo,
    timestamp_lte: now
  }

  return apiFetch<CheckStats[]>('/check_stats', { params })
}
