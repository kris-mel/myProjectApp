import styles from './App.module.css';
import { Header, Navbar, ProfilePage, ChatPage, FriendsPage, MusicPage, PhotoPage, CommunitiesPage } from './Components/index';
import { Routes, Route } from 'react-router-dom';

const App = () => {
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
          {/* Главная страница - корневой путь */}
          <Route path='/' element={<ProfilePage />} />

          <Route path='/profilePage'     element={<ProfilePage />} />
          <Route path='/chatPage'        element={<ChatPage />} />        {/* Список чатов */}
          <Route path='/chatPage/:id'    element={<ChatPage />} />        {/* Конкретный чат */}
          <Route path='/friendsPage'     element={<FriendsPage />} />
          <Route path='/musicPage'       element={<MusicPage />} />
          <Route path='/photoPage'       element={<PhotoPage />} />
          <Route path='/communitiesPage' element={<CommunitiesPage />} />

          {/* Маршрут-заглушка, если путь не найден */}
          <Route path='*' element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;