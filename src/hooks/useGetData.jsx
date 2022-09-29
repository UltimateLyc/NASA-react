import { useEffect, useState } from 'react'

const useGetData = (date) => {
  const [data, setData] = useState([] || {})
  const [loading, setLoading] = useState(true)
  const key = 'QbohNMZcTf3ZNi4GPxnBnPpCKocqtYacoaPF8aRw'
  const url = `https://api.nasa.gov/planetary/apod?start_date=${date}&end_date=${date}&api_key=${key}` // date = yyyy-mm-dd

  const getData = async () => {
    try {
      const request = await window.fetch(url)
      const resolve = await request.json()
      setData(resolve)
      setLoading(false)
    } catch (error) {
      setLoading(true)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { data, loading }
}

export default useGetData
