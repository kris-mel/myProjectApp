import styles from './App.module.css';
import { Header, Navbar, Profile, Dialogs, Friends, Music, Photo, Communities } from './Components/index';
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