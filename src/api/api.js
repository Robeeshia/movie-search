import client from './client'; // Adjust the path as per your project structure
const URL =  "http://www.omdbapi.com/?apikey=5852bb6d" //&page=3&i=tt2934286



// Function to search for a movie using the OMDB API
export const searchMovie = async (searchWord,type,page) => {
    var query=""
    
    if(type="s"){
        query = `&s=${searchWord}`
    }
    const url = URL+`&s=${(searchWord)}&page=${(page)}`;
// totalResults/10 +1 ====pages
  try {
    const response = await client(url, {}, 'GET');
    return response;
  } catch (error) {
    console.error('Error searching for movie:', error);
    throw error;
  }
};






// const searchMovies= async (movieName)=>{
//     // const response = await fetch()
//     const response = await 
// }