// client.js

import axios from 'axios';

const client = async (url, body = {}, method = 'GET') => {
try {
const config = {
    url,
    method,
    RequestBody:body,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}
    // const response= await axios(url,method)
    const response = await axios(config);

    return response.data; // Return the response data
  } catch (error) {
    console.error('API call failed:', error);
    throw error; // Re-throw the error to handle it where the function is called
  }
};

export default client;
