
import { LiveChatWrapper } from './LiveChat.styles'
import MessageItem from '../MessageItem/MessageItem'

const LiveChat = () => {
  return (
    <LiveChatWrapper>
        <div className="liveChatHeader">
            <p className='headerText'>Livechat</p>
            <div className="MessageBox">
                <input type="text" placeholder='write message...' />
            </div>
        </div>
        <div className='liveChatMessageContainer'>

                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>
                <MessageItem/>

        </div>
    </LiveChatWrapper>
  )
}

export default LiveChat