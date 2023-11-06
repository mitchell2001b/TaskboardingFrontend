import { useState, useEffect } from "react";
import axios from 'axios';
function Profile()
{
    useEffect(() => {
        // Make a GET request to the API
        axios.get('http://localhost:8585/test')
          .then((response) => {
            alert(JSON.stringify(response.data));
            setData(response.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);

    return (
        <>
            <h1>profile</h1>
            <p>this is your profile enjoyy</p>
        
        </>

    ); 
}

export default Profile;