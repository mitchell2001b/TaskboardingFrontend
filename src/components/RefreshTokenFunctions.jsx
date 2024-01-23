import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


export const RefreshAccessToken = (refreshToken) => {
    return new Promise((resolve, reject) => {

        const refreshToken = localStorage.getItem('refresh_token');
        let payload = {
            refresh_token: refreshToken,
          };

        console.log(payload)
        
        axios
        .post('http://api-gateway.localhost:9080/refresh', payload, {
          headers: {
            'method': 'post',
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response.data);
          const newAccessToken = response.data.access_token;
          localStorage.setItem('access_token', newAccessToken);
          resolve(newAccessToken); 
        })
        .catch((error) => {
          console.error('Error posting JSON data:', error);
          reject(error); 
        });
        
      }); 
};


export const CheckAndRefreshToken = () => {
  const refreshToken = localStorage.getItem('refresh_token');
  return new Promise((resolve, reject) => {

  if (refreshToken)
  {
        const accessToken = localStorage.getItem('access_token');
        const decodedToken = jwtDecode(accessToken);
        const expirationTime = decodedToken.exp * 1000; 
        console.log("Checking for refresh");

        if (expirationTime - Date.now() <= 10 * 60 * 1000 || expirationTime < Date.now()) 
        {
            RefreshAccessToken(refreshToken)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
        }

        resolve("no refresh needed");
  }

    }); 
};