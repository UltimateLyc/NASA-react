// Hooks
import { useState, useEffect } from 'react'

// Componentes
import Navbar from '../components/Navbar'
import { getToday } from '../utils/getToday'
import Card from '../components/Card'
import getUrl from '../utils/config'

const App = () => {
  const today = getToday()

  const [day, setDay] = useState(today)
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const url = day.day === undefined ? getUrl(day) : getUrl(day.day) // Evaluamos si ya esta en objeto o no para devolver la url

      const request = await window.fetch(url) // Request para el API
      const resolve = await request.json() // Resolucion del API
      setData(resolve) // Seteamos los datos del API atravez de un useState
    }

    getData()
  }, [day])

  return (
    <>
      <Navbar getApi={(info) => setDay(info)} />
      <Card data={data} />
    </>
  )
}

export default App
