async function getRandomGif() {
  try {
    let randomOffset = Math.floor(Math.random() * 50) //generate a random number to get a random gif

    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=9veUyiKA2yTILMDUHFF6fS0Ps0sPXKur&q=embarrassed&limit=1&offset=${randomOffset}`) 
    const data = await res.json()

    document.getElementById('randomGif').src = data.data[0].images.original.url //place random gif url into html doc

  } catch (error) {
    console.log('Ooops 😭');
    console.log(error)
    document.getElementById('randomGif').src = 'https://i.giphy.com/media/7NoNw4pMNTvgc/giphy.webp'
    
  }
  
}

getRandomGif()