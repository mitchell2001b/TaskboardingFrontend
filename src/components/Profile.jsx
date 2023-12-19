import { useState, useEffect } from "react";
import axios from 'axios';
import GetAllProjectsFromOwner from "./ProjectGetRequests";
import GetPersonalData from "./GetUserDataRequest";
import DeleteAccount from "./UserDeleteRequest";

function Profile()
{
  const [projectsData, setProjectsData] = useState(null);

  const accountId = 1;

  const handleGetPersonalData = () => {
    GetPersonalData(accountId)
      .then((gdprData) => {
        
        console.log('GDPR Data:', gdprData);
        alert(`GDPR Data: ${gdprData}`);
      })
      .catch((error) => {
        console.error('Error fetching personal data:', error);
        
      });
  };

  const handleAccountDeletion = () => {
    DeleteAccount(accountId)
      .then((responseData) => {
        alert(`deletion: ${responseData}`);
      })
      .catch((error) => {
        console.error('Error deleting account', error);
        
      });
  };
  useEffect(() => {
    const fetchData = async () => {
      try 
      {
        const data = await GetAllProjectsFromOwner(accountId);
        setProjectsData(data);
      } 
      catch(error)
      {
        console.error(error);
      }
    };

    if (!projectsData) 
    {
      fetchData();
    }
},[projectsData]);

    return (
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

    ); 
}

export default Profile;