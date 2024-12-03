import { useContext } from "react"
import { messageStore } from "../store/Store"

const InputArea = () => {

  const {inputRef,message,setMessage,handleClick} = useContext(messageStore);

  return (
    <div id="messaging-area">
      <label>Type Your Message:</label> &nbsp;
      <input
      id="input-box"
      style={{marginBottom:"10px"}} 
      ref={inputRef}
      placeholder='Hello ...' 
      value={message}
      onChange={(e) => setMessage(e.target.value)}  
      /> &nbsp;
      <button className="btn" onClick={handleClick}>
        Send
      </button>
    </div> 
  )
}

export default InputArea