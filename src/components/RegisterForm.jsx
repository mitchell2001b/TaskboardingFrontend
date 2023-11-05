import { useState, useEffect } from "react";
import axios from 'axios';
import CheckDateInput from "./DateCheck";

function RegisterForm()
{
   const [newEmail, setNewEmail] = useState("");
   const [newPassword, setNewPassword] = useState("");
   const [newDateOfBirth, setNewDateOfBirth] = useState(new Date());

   function HandleSubmit(e)
   {
    const year = newDateOfBirth.getFullYear();
    const month = (newDateOfBirth.getMonth() + 1).toString().padStart(2, '0');
    const day = newDateOfBirth.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

      let givenData = {
        email: newEmail,
        password: newPassword,
        dateofbirth: formattedDate.toString(),

      };
      if(!CheckDateInput(givenData.dateofbirth))
      {
        alert('Invalid date of birth');
        return;
      }
      axios
      .post('http://api-gateway:8585/register', givenData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        // Handle the response here
        //alert(JSON.stringify(givenData)); // You can display givenData if needed
        alert(JSON.stringify(response.data)); // Display the response data
        
      })
      .catch((error) => {
        console.error('Error posting JSON data:', error);
      });
      
      
      
      e.preventDefault();
   }
   return (
    <>
         <form onSubmit={HandleSubmit}>
           <div>
             <label htmlFor="email"><style color="red">*</style>email</label>
             <input value={newEmail} onChange={e => setNewEmail(e.target.value)} type="email" id="email" required/>
           </div>
           <div>
             <label htmlFor="password"><style color="red">*</style>password</label>
             <input value={newPassword} onChange={e => setNewPassword(e.target.value)} type="password" id="password" required/>
           </div>
           <div>
             <label htmlFor="dateofbirth"><style color="red">*</style>date of birth</label>
             <input value={newDateOfBirth} onChange={e => setNewDateOfBirth(e.target.value)} type="date" id="dateofbirth" required/>
           </div>
           <button type='submit'>Submit</button>
         </form>
    
    
    </>

   );
   
}
export default RegisterForm