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
            <h1>Hello semester 6</h1>
            {1 === 2 ? <p>test test test ssssssssssssssssssssssssss</p> : null}
            
        
        </>

    ); 
}

export default Message;