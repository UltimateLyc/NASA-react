const Card = ({ api }) => {
  console.log('test de api en card', api)
  return (
    <div className='card container mt-2' style={{ width: '40rem' }}>
      <h5 className='card-title mt-2'>{api.title}</h5>
      <img src={api.hdurl} className='card-img-top mt-0' alt={api.title} />
      <div className='card-body'>
        <p id='explanation' className='card-text'>{api.explanation}</p>
        <p id='copyright'>{api.copyright} &copy; {api.date}</p>
      </div>
    </div>
  )
}

export default Card
