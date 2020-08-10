const baseUrl = 'https://api.breakingapi.com/news?q=climate&type=headlines&locale=en-US&api_key=BA08664F513F4F41A2057F5C93563600';

const getNews = async () => {
  let response = await fetch(`${baseUrl}`)

  return response
}

export default { getNews };
