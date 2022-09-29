import Container from './Container'

const Navbar = () => {
  return (
    <Container>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container'>
          <a className='navbar-brand' href='#'>NASA Astronomy Picture of the Day</a>
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
            <form className='d-flex'>
              <input className='form-control me-sm-2' type='date' />
              <button className='btn btn-secondary my-2 my-sm-0' type='submit'>Search</button>
            </form>
          </div>
        </div>
      </nav>
    </Container>

  )
}

export default Navbar
