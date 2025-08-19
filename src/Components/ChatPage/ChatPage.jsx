import styles from './ChatPage.module.css'
import MessageList from './MessageList/MessageList'
import ChatUserList from './ChatUserList/ChatUserList'
import { useParams } from 'react-router-dom'

const ChatPage = (props) => {
  // достаем id пользователя из URL (/chatPage/:id)
  const { id } = useParams();

  // список пользователей (в реальности — придет с бэка)
  const chatUsers = [
    { id: 1, name: 'Andrew', photoUrl: '/img/andrew.png' },
    { id: 2, name: 'Lena', photoUrl: '/img/lena.png' },
  ]

  // временные сообщения (тоже обычно приходят с сервера)
  const messages = [
    { id: 1, text: 'Hi!' },
    { id: 2, text: 'How are you?' },
  ]

  // ищем текущего пользователя по id из URL
  const currentUser = chatUsers.find(user => user.id.toString() === id)

  return (
    <div className={styles.chatPageGrid}>
      {/* Список пользователей */}
      <div>
        {chatUsers.map(user => (
          < ChatUserList
            key={user.id}
            name={user.name}
            photoUrl={user.photoUrl}
          />
        ))}
      </div>

      {/* Список сообщений */}
      <div>
        {id ? (
          <>
            <h3>Чат с {currentUser?.name}</h3>
            {messages.map(message => (
              <MessageList
                key={message.id}
                message={message.text}
              />
            ))}
          </>
        ) : (
          <h3>Выберите пользователя, чтобы открыть чат</h3>
        )}
      </div>
    </div>
  )
}

export default ChatPage