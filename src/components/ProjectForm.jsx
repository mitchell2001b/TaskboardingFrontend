import { useState, useEffect } from "react";
import axios from 'axios';

function ProjectForm()
{

    const [newProjectName, setNewProjectName] = useState("");
    const [newProjectDescription, setNewProjectDescription] = useState("");

    let account = {
      id: "1",
      email: "test@gmail.com",
    };
    function HandleSubmit(e)
    {
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
       console.log(`Byte size of givenData: ${byteSize} bytes`);
       
       axios
       .post('http://localhost:8585/newproject', givenData, {
         headers: {
           'method': 'post',
           'Content-Type': 'application/json',
         },
       })
       .then((response) => {
         // Handle the response here
         //alert(JSON.stringify(givenData)); // You can display givenData if needed
         alert(JSON.stringify(response.data)); // Display the response data
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