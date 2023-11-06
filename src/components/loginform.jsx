import { useState, useEffect } from "react";
import axios from 'axios';
import { redirect } from "react-router-dom";



function LoginForm()
{
    const [newEmail, setNewEmail] = useState("");
   const [newPassword, setNewPassword] = useState("");

   function HandleSubmit(e)
   {
      let givenData = {
        email: newEmail,
        password: newPassword,       
      };

      axios
      .post('http://localhost:8585/api/accounts/login', givenData, {
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
           <button type='submit'>Login</button>
           <a href="/register>">register here</a>
         </form>
    
    
    </>

   );
}
export default LoginForm