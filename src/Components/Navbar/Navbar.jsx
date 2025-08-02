import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.layout}>
            <Link to='/profile'>My profile </Link>
            <Link to='/dialogs'>Dialogs</Link>
            <Link to='/friends'>Friends</Link>
            <Link to='/music'>Music</Link>
            <Link to='/photo'>Photo</Link>
            <Link to='/communities'>Communities</Link>
        </div>
    );
}

export default Navbar;