// Funcion para el URL del API

const getUrl = (date) => {
  const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=QbohNMZcTf3ZNi4GPxnBnPpCKocqtYacoaPF8aRw` // date = yyyy-mm-dd
  return url
}

export default getUrl
