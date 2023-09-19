import { MessageItemWrapper } from "./MessageItem.styles"

const MessageItem = () => {
  return (
    <MessageItemWrapper>

            <img className='userImage' src="https://images.pexels.com/photos/18279900/pexels-photo-18279900/free-photo-of-a-man-in-a-white-hat-walking-down-the-street.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
      
        <div className="messageRight">
            <div className="rightTop">
                <p className='username'>Tolan Roaser</p>
                <p className='time'>4:20PM</p>
            </div>
            <div className="content">

                Definitely we have a meeting with the client next week to present our progress, so make sure everything is ready .

            </div>
        </div>
    </MessageItemWrapper>
  )
}

export default MessageItem