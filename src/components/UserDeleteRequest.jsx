import axios from 'axios';

export default function DeleteAccount(accountId)
{
  return new Promise((resolve, reject) => {
    
    axios
      .delete(`http://api-gateway.localhost:9080/delete/${accountId}`, {
        headers: {
          'method': 'DELETE',
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