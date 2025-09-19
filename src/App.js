import styles from './App.module.css';
import { Header, Navbar, ProfilePage, ChatPage, FriendsPage, MusicPage, PhotoPage, CommunitiesPage } from './Components/index';
import { Routes, Route } from 'react-router-dom';

const App = (props) => {
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

    // временный массив постов (в будущем — придет с сервера)
    const postMessage = [
        { id: 1, message: 'hi', initialCount: 17 },
        { id: 2, message: 'how are you?', initialCount: 15 },
    ]

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Header />
      </header>
      <nav className={styles.nav}>
        <Navbar />
      </nav>
      <main className={styles.main}>
        <Routes>
          {/* Главная страница */}
          <Route path='/'                element={<ProfilePage postMessage={postMessage}/>} />

          {/* Редирект с /profilePage на главную */}
          <Route path='/profilePage'     element={<ProfilePage postMessage={postMessage} />} />

          {/* Страница чатов */}
          <Route path='/chatPage'        element={<ChatPage chatUsers={chatUsers} messages={messages} />} />  {/* Список чатов */}
          
          {/* Конкретный чат по ID */}
          <Route path='/chatPage/:id'    element={<ChatPage chatUsers={chatUsers} messages={messages} />} />  {/* Конкретный чат */}
          
          {/* Прочие страницы */}
          <Route path='/friendsPage'     element={<FriendsPage />} />
          <Route path='/musicPage'       element={<MusicPage />} />
          <Route path='/photoPage'       element={<PhotoPage />} />
          <Route path='/communitiesPage' element={<CommunitiesPage />} />

          {/* Маршрут-заглушка, если путь не найден */}
          <Route path='*' element={<ProfilePage postMessage={postMessage}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;