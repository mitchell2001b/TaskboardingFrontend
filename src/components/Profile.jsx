import { useState, useEffect } from "react";
import axios from 'axios';
import GetAllProjectsFromOwner from "./ProjectGetRequests";
import GetPersonalData from "./GetUserDataRequest";
import DeleteAccount from "./UserDeleteRequest";
import { jwtDecode } from 'jwt-decode';
import { CheckAndRefreshToken } from "./RefreshTokenFunctions";

function Profile()
{
  const [projectsData, setProjectsData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [Email, setEmail] = useState("");
  const [id, setId] = useState(0);

  const accountId = 1;

  const handleGetPersonalData = () => {
    GetPersonalData(id)
      .then((gdprData) => {
        
        console.log('GDPR Data:', gdprData);
        alert(`GDPR Data: ${gdprData}`);
      })
      .catch((error) => {
        console.error('Error fetching personal data:', error);
        
      });
  };

  const handleAccountDeletion = () => {
    DeleteAccount(id)
      .then((responseData) => {
        alert(`deletion: ${responseData}`);
      })
      .catch((error) => {
        console.error('Error deleting account', error);
        
      });
  };
  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken)
    {
      const decodedToken = jwtDecode(accessToken);
      const userEmail = decodedToken.email;
      const userId = decodedToken.id;

      setEmail(userEmail);
      setId(userId);
      setLoggedIn(!!userEmail && !!userId);

    }

    const fetchData = async () => {
      try 
      {
        console.log(id);
        const refreshData = await CheckAndRefreshToken();
        const data = await GetAllProjectsFromOwner(id);
        //console.log(refreshData);
        console.log("test");
        
        setProjectsData(data);
        
      } 
      catch(error)
      {
        console.error(error);
      }
    };

    if (!projectsData && loggedIn) 
    {
      fetchData();
    }
},[projectsData, loggedIn]);

    return (
        <>
        {loggedIn ? (
           <>
            <h1>profile</h1>
            <td><button type="button" onClick={handleGetPersonalData}>Get GDPR data</button></td>
            <td><button type="button" onClick={handleAccountDeletion}>Delete account</button></td>  
            <h2>My projects</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Project name:</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {
                        projectsData && projectsData.map((project) => (
                          <tr key={project.id}>
                            <td>{project.id}</td>
                            <td>{project.projectname}</td>
                            <td><a href={"project/details/" + project.id} class="link-primary">Details</a></td>
                            <td></td>
                          </tr>
                       ))
                    }
                </tbody>
            </table>
          </>
        ) : (
          <p>Please login to view your profile..</p>
        )}     
     </>

    ); 
}

export default Profile;