import { useContext } from 'react'
import { messageStore } from '../store/Store'


const NestedReply = ({message}) => {
  const {sendReply} = useContext(messageStore)
  return (
    <div>
      <div style={{marginBottom:"15px"}}>
      <span >{message.message}</span> &nbsp;
      <button className='btn' onClick={() => sendReply(message)}>reply</button>
      <br/>
      </div>

      <div style={{paddingLeft:"20px"}}>
      {
        message.replies.map((msg) => <NestedReply key={msg.id} message={msg} />)
      }
      </div>
    </div>
  )
}

export default NestedReply