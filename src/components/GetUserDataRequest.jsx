import axios from 'axios';

export default function GetPersonalData(accountId)
{
  return new Promise((resolve, reject) => {
    
    axios
      .get(`http://api-gateway.localhost:9080/mydata/${accountId}`, {
        headers: {
          'method': 'GET',
          'Content-Type': 'application/json',
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
