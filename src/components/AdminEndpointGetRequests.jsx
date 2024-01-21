import axios from 'axios';

export default function AccessAdminEndpoint()
{
  return new Promise((resolve, reject) => {
    

    axios
      .get('http://api-gateway.localhost:9080/projectmodel', {
        headers: {
          'method': 'GET',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        const data = response.data;
        resolve(data); 
      })
      .catch((error) => {
        console.error('Error posting JSON data:', error);
        reject(error); 
      });
  }); 
}