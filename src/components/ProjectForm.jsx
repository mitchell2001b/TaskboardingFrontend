import { useState, useEffect } from "react";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function ProjectForm()
{

    const [newProjectName, setNewProjectName] = useState("");
    const [newProjectDescription, setNewProjectDescription] = useState("");
    const [emailAccount, setEmailAccount] = useState("");
    const [idAccount, setIdAccount] = useState(0);
    
    
    useEffect(() => {
        
      const accessToken = localStorage.getItem('access_token');
      if (accessToken) 
      {
        const decodedToken = jwtDecode(accessToken);
        const userEmail = decodedToken.email;
        const userId = decodedToken.id;
  
        setEmailAccount(userEmail);
        setIdAccount(userId);
        
      }
    }, []);

    function HandleSubmit(e)
    {
      let account = {
        id: idAccount,
        email: emailAccount,
      };

      if(newProjectDescription == null || newProjectName == null)
      {
        alert("Please enter a value");
        return;
      }
       let givenData = {
        projectdescription: newProjectDescription,
        projectname : newProjectName,
        owner: account
       };
       const jsonString = JSON.stringify(givenData);   
       const byteSize = new TextEncoder().encode(jsonString).length;
       alert(JSON.stringify(givenData));
       //console.log(`Byte size of givenData: ${byteSize} bytes`);
       const fetchData = async () => {
        try 
        {
          const refreshData = await CheckAndRefreshToken();
          console.log(refreshData);        
        } 
        catch(error)
        {
          console.error(error);
        }
      };
      fetchData();
       axios
       .post('http://api-gateway.localhost:9080/newproject', givenData, {
         headers: {
           'method': 'post',
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
         },
       })
       .then((response) => {

         console.log(JSON.stringify(response.data)); 
         window.location.href = '/profile';
         
       })
       .catch((error) => {
         alert(JSON.stringify(error))
         console.error('Error posting JSON data:', error);
       });
       
       
       
       e.preventDefault();
    }

    return (
        <>
             <form onSubmit={HandleSubmit}>
                <div>
                 <label htmlFor="projectname"><style color="red">*</style>Project name</label>
                 <input value={newProjectName} onChange={e => setNewProjectName(e.target.value)} type="text" id="projectname" required/>
               </div>
               <div>
                 <label htmlFor="projectdescription"><style color="red">*</style>project description</label>
                 <input value={newProjectDescription} onChange={e => setNewProjectDescription(e.target.value)} type="text" id="projectdescription" required/>
               </div>
               <button type='submit'>Create</button>
             </form>        
        </>  
       );
}
export default ProjectForm