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
      console.log('Date of Birth:', newDateOfBirth);
      let givenData = {
        email: newEmail,
        password: newPassword,
        dateofbirth: newDateOfBirth,

      };
      
      if(!CheckDateInput(givenData.dateofbirth))
      {
        alert('Invalid date of birth');
        return;
      }
      axios
      .post('http://51.13.29.1/gateway/register', givenData, {
        headers: {
          'method': 'post',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
      
        alert(JSON.stringify(response.data)); 
        
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
             <label htmlFor="email">email</label>
             <input value={newEmail} onChange={e => setNewEmail(e.target.value)} type="email" id="email" required/>
           </div>
           <div>
             <label htmlFor="password">password</label>
             <input value={newPassword} onChange={e => setNewPassword(e.target.value)} type="password" id="password" required/>
           </div>
           <div>
             <label htmlFor="dateofbirth">date of birth</label>
             <input value={newDateOfBirth} onChange={e => setNewDateOfBirth(e.target.value)} type="date" id="dateofbirth" required/>
           </div>
           <button type='submit'>Submit</button>
         </form>
    
    
    </>

   );
   
}
export default RegisterForm