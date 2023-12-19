import axios from 'axios';

export default function DeleteAccount(accountId)
{
  return new Promise((resolve, reject) => {
    
    axios
      .delete(`http://localhost:8585/delete/${accountId}`, {
        headers: {
          'method': 'DELETE',
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