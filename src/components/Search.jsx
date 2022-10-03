import React, { useState } from 'react'
import useGetData from '../hooks/useGetData'

const Search = () => {
  const [day, setDay] = useState('')

  const handleSubmit = (e) => {
    // Evitamos que la paguina se recarge por el btn type submit
    e.preventDefault()
    console.log('You clicked submit.') // valido que entre al submit
    // setDay('') // limpia la busqueda
    console.log('day guardado:', day)
    /* const { data } = useGetData({ day })
    console.log('🚀 ~ data', data) */
  }

  /* test 1 Funciono al 100% */
  /* const [data, setData] = useState([] || {})
  const url = `https://api.nasa.gov/planetary/apod?date=${day}&api_key=QbohNMZcTf3ZNi4GPxnBnPpCKocqtYacoaPF8aRw` // date = yyyy-mm-dd

  console.log('url', url)

  const getData = async (uri) => {
    const request = await window.fetch(uri) // Request para el API
    const resolve = await request.json() // Resolucion del API
    setData(resolve) // Seteamos los datos del API atravez de un useState
  }

  console.log(data) */

  /* fin test */

  return (
    <form className='d-flex' onSubmit={handleSubmit}>
      <input
        type='date'
        name='day'
        className='form-control me-sm-2'
        min='1995-06-16'
        value={day}
        onChange={e => setDay(e.target.value)}
        // max = 'funcion que genere el dia de hoy'
      />
      <button
        type='submit'
        // value='Search'
        className='btn btn-secondary my-2 my-sm-0'
        // onClick={() => getData(url)} // Test 1 funcional
      >
        Search
      </button>
    </form>
  )
}

export default Search
