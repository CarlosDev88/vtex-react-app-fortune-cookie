import { useState } from 'react'

interface FortuneCookieData {
  message: string
  number: string
}

interface ApiResponse {
  data: FortuneCookieData
}

interface UseFortuneCookieReturn {
  data: FortuneCookieData | null
  loading: boolean
  error: string | null
  fetchFortuneCookies: () => Promise<void>
}

export const useFortuneCookie = (): UseFortuneCookieReturn => {
  const [data, setData] = useState<FortuneCookieData | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchWithRetry = async (retries = 3, delay = 300): Promise<void> => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch('/_v/message')

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result: ApiResponse = await response.json()
      setData(result.data)
    } catch (err) {
      if (retries > 1) {
        await new Promise((res) => setTimeout(res, delay))
        return fetchWithRetry(retries - 1, delay)
      } else {
        setError(err instanceof Error ? err.message : 'Error desconocido')
        setData(null)
      }
    } finally {
      setLoading(false)
    }
  }

  const fetchFortuneCookies = async () => {
    await fetchWithRetry()
  }

  return {
    data,
    loading,
    error,
    fetchFortuneCookies,
  }
}
