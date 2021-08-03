const axios = require('axios')

const url = "https://api.nasa.gov/planetary/apod?api_key=Ub7oOQOsFifYwLAvl8EFvZzWhPt8P86fYetXTLo1&count=1"

async function getPhoto() {
  try {
    const response = await axios.get(url)
    if(response.data.media_type === 'video') {
      return nasaObject = {
        date: response[0].date,
        explanation: response[0].explanation,
        title: response[0].title,
        url: "/img/sun.jpeg"
      }        
    }
    return nasaObject = {
      date: response.data[0].date,
      explanation: response.data[0].explanation,
      title: response.data[0].title,
      url: response.data[0].url
    }
  } catch (error) {
    return console.log(error)
  }
}

module.exports = getPhoto

