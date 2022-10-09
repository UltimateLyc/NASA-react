import React, { useState } from 'react'
import { getToday } from '../utils/getToday'

const Search = ({ getApi }) => {
  const today = getToday()
  const [day, setDay] = useState(today)

  const handleSubmit = (e) => {
    // Evitamos que la paguina se recarge por el btn type submit
    e.preventDefault()

    getApi({ day })
    // setDay('') // limpia la busqueda
  }

  return (
    <>
      <form className='d-flex' onSubmit={handleSubmit}>
        <input
          type='date'
          name='day'
          className='form-control me-sm-2'
          min='1995-06-16'
          max={today}
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
