import { useState, userState } from "react"

function Message()
{
    const [newItem, setNewItem] = useState("")
    
    const test = {
        id: 14,
        ProjectName: "TestProjectTestProjectTestProject"
    }
    const jsonString = JSON.stringify(test);   
    const byteSize = new TextEncoder().encode(jsonString).length;
    console.log(`Byte size of givenData: ${byteSize} bytes`);
    return (
        <>
            <h1>automatic deployment to azure cluster with github actions</h1>
            {1 === 2 ? <p>deployment test</p> : null}
            
        
        </>

    ); 
}

export default Message;