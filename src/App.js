import styles from './App.module.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';

const App = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Header />
      </header>
      <nav className={styles.nav}>
        <Navbar />
      </nav>
      <div className={styles.main}>
        <Profile />
      </div>
    </div>
  );
}

export default App;