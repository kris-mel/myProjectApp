import styles from './App.module.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import Friends from './Components/Friends/Friends';
import Music from './Components/Music/Music';
import Photo from './Components/Photo/Photo';
import Communities from './Components/Communities/Communities';
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
          <Route path='/' element={<Profile />} />

          <Route path='/profile'     element={<Profile />} />
          <Route path='/dialogs'     element={<Dialogs />} />
          <Route path='/friends'     element={<Friends />} />
          <Route path='/music'       element={<Music />} />
          <Route path='/photo'       element={<Photo />} />
          <Route path='/communities' element={<Communities />} />

          {/* Маршрут по умолчанию*/}
          <Route path='*' element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;