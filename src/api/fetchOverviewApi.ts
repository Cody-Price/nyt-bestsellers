import apiKey from '../apiKey'

export async function fetchOverview() {
  const url = `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${apiKey}`
  try {
    let response = await fetch(url);
    let jsonReponse = await response.json();
    return await jsonReponse;
  } catch(err) {
    return err;
  }
}