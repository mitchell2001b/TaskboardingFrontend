function CheckDateInput(dateString)
{

    const minimumAge = 18;
    const maximumAge = 150;

    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Date format (YYYY-MM-DD)

    if (!datePattern.test(dateString)) 
    {
      return false;
    }
  
    const birthDate = new Date(dateString);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
  
    if (birthDate > currentDate) 
    {    
       return false;
    }
    
    return age >= minimumAge && age <= maximumAge;
    
}

export default CheckDateInput;