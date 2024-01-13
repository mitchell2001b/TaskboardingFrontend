import axios from 'axios';

export default function GetAllProjectsFromOwner(ownerId)
{
  return new Promise((resolve, reject) => {
    let owner = {
      id: ownerId,
    };

    axios
      .post('http://api-gateway.localhost:9080/myprojects', owner, {
        headers: {
          'method': 'post',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
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

