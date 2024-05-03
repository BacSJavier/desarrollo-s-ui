const apiKey = 'rs76t7Qf56qdAj8a8sNuYyzkSQ3A88dr';
const searchTerm = 'ganar';
const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchTerm}`;

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const gifUrl = data.data.image_url;
    console.log(gifUrl);
  })
  .catch(error => {
    console.error('Error al obtener el gif:', error);
  });
