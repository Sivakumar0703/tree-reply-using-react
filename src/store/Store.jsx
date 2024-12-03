
import React, { createContext , useState ,useRef } from 'react';


export const messageStore = createContext();

const Store = ({children}) => {
    const [allMessage , setAllMessage] = useState([]);
    const [message , setMessage] = useState("");
    const [parentObj , setParentObj] = useState(null);
    const [messageCount , setMessageCount] = useState(10);
    const inputRef = useRef(null);

    function handleClick(){
        const newMessage = {
            id:messageCount,
            message:message,
            replies:[]
        };
        if(parentObj){
            parentObj.replies.push(newMessage);
        } else {
            setAllMessage(oldMsg => [...oldMsg , newMessage]) 
        }

        setParentObj(null);
        setMessage("");
        setMessageCount(prevCount => prevCount + 1);

    }

    function sendReply(obj){
        inputRef.current.focus();
        setParentObj(obj)
    }
 
 
  return (
    <div>
        <messageStore.Provider value={{
            allMessage , setAllMessage , message , setMessage ,inputRef , handleClick ,
            sendReply  , setMessageCount
        }} >

            {children}

        </messageStore.Provider>

    </div>
  )
}

export default Store