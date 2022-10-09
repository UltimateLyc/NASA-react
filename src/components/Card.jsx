const Card = ({ data }) => {
  console.log('test de data en card', data)
  return (
    <div className='card container mt-2' style={{ width: '40rem' }}>
      <h5 className='card-title mt-2'>{data.title}</h5>
      <img src={data.hdurl} className='card-img-top mt-0' alt={data.title} />
      <div className='card-body'>
        <p id='explanation' className='card-text'>{data.explanation}</p>
        <p id='copyright'>{data.copyright} &copy; {data.date}</p>
      </div>
    </div>
  )
}

export default Card
