import {useContext} from 'react';
import NestedReply from './NestedReply';
import { messageStore } from '../store/Store';
import InputArea from './InputArea';

const TreeReply = () => {
    const {allMessage} = useContext(messageStore);
  return (
    <div id="msg-container">
        <h1 style={{textAlign:"center"}}>Nested Reply Message</h1>
        <div>
        <InputArea />

        <div id="messages-container">
            {
                allMessage.map((msg) => {
                    return <NestedReply key={msg.id} message={msg} />
                })
            }
        </div>
        </div>
    </div>
  )
}

export default TreeReply