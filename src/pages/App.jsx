// Hooks
import { useState } from 'react'

// Componentes
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const App = () => {
  const [api, setApi] = useState()
  // console.log('🚀 ~ api', api)

  return (
    <>
      <Navbar getApi={(test) => setApi(test)} />
      <Card api={api} />
    </>
  )
}

export default App
