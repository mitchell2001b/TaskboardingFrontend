import { useState, useEffect } from "react";
import axios from 'axios';
import GetAllProjectsFromOwner from "./ProjectGetRequests";

function Profile()
{
  const [projectsData, setProjectsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try 
      {
        const data = await GetAllProjectsFromOwner(1);
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