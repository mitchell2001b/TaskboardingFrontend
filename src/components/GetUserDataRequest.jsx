import axios from 'axios';

export default function GetPersonalData(accountId)
{
  return new Promise((resolve, reject) => {
    
    axios
      .get(`http://51.13.29.1/gateway/mydata/${accountId}`, {
        headers: {
          'method': 'GET',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        // Handle the response here
        console.log(response.data);
        const data = response.data;
        resolve(data); // Resolve the Promise with the data
      })
      .catch((error) => {
        console.error('Error posting JSON data:', error);
        reject(error); // Reject the Promise with the error
      });
  }); 
}
