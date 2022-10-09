// Funcion para el URL del API

const getUrl = (date) => {
  // console.log('Este es el dato ingresando ->', date)
  const url = `https://api.nasa.gov/planetary/apod?api_key=6w8aI1d8nauLsW5qvXJ0WaWOkjb7gTvkl7987Sga&date=${date}`// `https://api.nasa.gov/planetary/apod?date=${date}&api_key=QbohNMZcTf3ZNi4GPxnBnPpCKocqtYacoaPF8aRw` // date = yyyy-mm-dd
  console.log('esta es la url de config ---->', url)
  return url
}

export default getUrl
