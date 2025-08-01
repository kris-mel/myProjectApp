import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.layout}>
            <div>
                <a href='#s'>My profile</a>
            </div>
            <div>
                <a href='#s'>Message</a>
            </div>
            <div>
                <a href='#s'>Friends</a>
            </div>
            <div>
                <a href='#s'>Music</a>
            </div>
            <div>
                <a href='#s'>Photo</a>
            </div>
            <div>
                <a href='#s'>Communities</a>
            </div>
        </div>
    );
}

export default Navbar;