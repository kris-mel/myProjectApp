import Logo from '../../Logo/logo';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.layout}>
            <Logo />
        </div>
    );
}

export default Header