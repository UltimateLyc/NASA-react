import React, { useEffect, useState } from 'react'
import getUrl from '../utils/config'
import { getToday } from '../utils/getToday'

const Search = () => {
  const [day, setDay] = useState(getToday)
  const [data, setData] = useState([] || {})
  const [loading, setLoading] = useState(true)

  console.log('url', getUrl(day))

  const handleSubmit = (e) => {
    // Evitamos que la paguina se recarge por el btn type submit
    e.preventDefault()
    setDay('') // limpia la busqueda
    getData(getUrl(day))
  }

  /* test 1 Funciono al 100% */

  const getData = async (uri) => {
    try {
      const request = await window.fetch(uri) // Request para el API
      const resolve = await request.json() // Resolucion del API
      setData(resolve) // Seteamos los datos del API atravez de un useState
      setLoading(false) // Cambiamos el valor de Loading para para confirmar que ya cargo los datos
    } catch (error) {
      console.log('entre')
      setLoading(true)
    }
  }

  useEffect(() => {
    getData(getUrl(day))
  }, [])

  console.log('data global', data)
  console.log('loading', loading)

  /* fin test */

  return (
    <>
      <form className='d-flex' onSubmit={handleSubmit}>
        <input
          type='date'
          name='day'
          className='form-control me-sm-2'
          min='1995-06-16'
          max={getToday()}
          value={day}
          onChange={e => setDay(e.target.value)}
        />
        <button
          type='submit'
        // value='Search'
          className='btn btn-secondary my-2 my-sm-0'
        >
          Search
        </button>
      </form>
    </>
  )
}

export default Search
