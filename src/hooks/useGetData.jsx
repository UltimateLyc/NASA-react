import { useEffect, useState } from 'react'

const useGetData = (day) => {
  const [data, setData] = useState([] || {})
  const [loading, setLoading] = useState(true)
  const url = `https://api.nasa.gov/planetary/apod?date=${day}&api_key=QbohNMZcTf3ZNi4GPxnBnPpCKocqtYacoaPF8aRw` // date = yyyy-mm-dd

  console.log('url', url)

  const getData = async () => {
    try {
      const request = await window.fetch(url) // Request para el API
      const resolve = await request.json() // Resolucion del API
      setData(resolve) // Seteamos los datos del API atravez de un useState
      setLoading(false) // Cambiamos el valor de Loading para para confirmar que ya cargo los datos
    } catch (error) {
      setLoading(true) // En caso de no encontrar nada arroja error
    }
  }

  // Usamos useEffect para poder ejecutar la funcion getData para el consumo de la API
  useEffect(() => {
    getData()
  }, [])

  console.log('data', data)

  return { data, loading }
}

export default useGetData
