import { useState, userState } from "react"

function Message()
{
    const [newItem, setNewItem] = useState("")
    
    return (
        <>
            <h1>Hello semester 6</h1>
            {1 === 2 ? <p>test test test ssssssssssssssss</p> : null}
        
        </>

    ); 
}

export default Message;