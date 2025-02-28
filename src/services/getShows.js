export async function getShows() {
  const url = "https://api.tvmaze.com/shows?page=1";
  try {
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error(`Error occured: ${response.status}`);
    }
    const json = await response.json();
    
    return json;
  } catch(error) {
    // TODO implement error showing (if there is time)
    console.log(error.message);
  }
}
