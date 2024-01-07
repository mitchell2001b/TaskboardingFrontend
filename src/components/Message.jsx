import { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';

function Message()
{
    const [newItem, setNewItem] = useState("")
    const [loggedIn, setLoggedIn] = useState(false);
    const [roleName, setRoleName] = useState("");

    const test = {
        id: 14,
        ProjectName: "TestProjectTestProjectTestProject"
    }
    const jsonString = JSON.stringify(test);   
    const byteSize = new TextEncoder().encode(jsonString).length;
    console.log(`Byte size of givenData: ${byteSize} bytes`);

    useEffect(() => {
        
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) 
        {
          const decodedToken = jwtDecode(accessToken);
          const userRoleName = decodedToken.roleName;
    
          setRoleName(userRoleName);
          setLoggedIn(!!userRoleName);
          
        }
      }, []);

    return (
        <>
        <h1>automatic deployment to azure cluster with github actions</h1>
    
        {loggedIn && (
      <>
        {roleName === "user" && (
          <p>Welcome, user! This is the content for users.</p>
        )}

        {roleName === "admin" && (
          <p>Welcome, admin! This is the content for admins.</p>
        )}

        {roleName ? (
          <p>Your role is: {roleName}</p>
        ) : (
          <p>Your role is not defined.</p>
        )}
      </>
    )}

    {!loggedIn && (
      <p>Please log in to see your role.</p>
    )}
      </>
    ); 
}

export default Message;