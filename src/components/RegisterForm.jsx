import { useState } from "react";

function RegisterForm()
{
   const [newEmail, setNewEmail] = useState("");
   const [newPassword, setNewPassword] = useState("");
   const [newDateOfBirth, setNewDateOfBirth] = useState(new Date());

   const [newAccount, setNewAccount] = useState({});

   function HandleSubmit(e)
   {
      setNewAccount({
         email: newEmail,
         password: newPassword,
         dateofbirth: newDateOfBirth

      })

      alert(JSON.stringify(newAccount));
      e.preventDefault();
   }
   return (
    <>
         <form onSubmit={HandleSubmit}>
           <div>
             <label htmlFor="email">email</label>
             <input value={newEmail} onChange={e => setNewEmail(e.target.value)} type="text" id="email"/>
           </div>
           <div>
             <label htmlFor="password">password</label>
             <input value={newPassword} onChange={e => setNewPassword(e.target.value)} type="password" id="password"/>
           </div>
           <div>
             <label htmlFor="dateofbirth">date of birth</label>
             <input value={newDateOfBirth} onChange={e => setNewDateOfBirth(e.target.value)} type="date" id="dateofbirth"/>
           </div>
           <button type='submit'>Submit</button>
         </form>
    
    
    </>

   );
   
}
export default RegisterForm