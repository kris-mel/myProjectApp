import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={styles.layout}>
            <NavLink to='/profile'>My profile</NavLink>
            <NavLink to='/chatPage'>chatPage</NavLink>
            <NavLink to='/friendsPage'>FriendsPage</NavLink>
            <NavLink to='/musicPage'>MusicPage</NavLink>
            <NavLink to='/photoPage'>PhotoPage</NavLink>
            <NavLink to='/communitiesPage'>CommunitiesPage</NavLink>
        </div>
    );
}

export default Navbar