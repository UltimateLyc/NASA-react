import Container from './Container'
import Search from './Search'
import { FaRocket } from 'react-icons/fa'

const Navbar = ({ getApi }) => {
  return (

    <Container>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container'>
          <a className='navbar-brand' href='#'><FaRocket /> NASA Astronomy Picture of the Day</a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarColor01' aria-controls='navbarColor01' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarColor01'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                {/* <a className='nav-link active' href='#'>Home
                <span className='visually-hidden'>(current)</span>
              </a> */}
              </li>
            </ul>
            <Search getApi={getApi} />
          </div>
        </div>
      </nav>
    </Container>

  )
}

export default Navbar
