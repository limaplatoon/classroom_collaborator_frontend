const baseUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=3f4107f32687455aab69e07dcac028c2';

const getNews = async () => {
  let response = await fetch(`${baseUrl}`)

  return response
}

export default { getNews };
