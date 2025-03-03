export async function getShowInfo(showId) {
  const url = `https://api.tvmaze.com/shows/${showId}`;
  try {
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error(`Error occured: ${response.status}`);
    }
    const json = await response.json();

    return json;
  } catch(error) {
    // TODO implement error handling
    console.log(error.message);
  }
}
