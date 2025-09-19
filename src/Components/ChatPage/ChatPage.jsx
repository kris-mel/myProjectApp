import styles from './ChatPage.module.css'
import MessageList from './MessageList/MessageList'
import ChatUserList from './ChatUserList/ChatUserList'

const ChatPage = ({chatUsers, messages}) => {
  return (
    <div className={styles.chatPageGrid}>
      {/* Список пользователей */}
      <div>
        {chatUsers.map(user => (
          < ChatUserList
            key={user.id}
            id={user.id}
            name={user.name}
            photoUrl={user.photoUrl}
          />
        ))}
      </div>

      {/* Список сообщений */}
      <div>
        {messages.map(message => (
          <MessageList
            key={message.id}
            message={message.text}
          />
        ))
        }
      </div>
    </div>
  )
}

export default ChatPage