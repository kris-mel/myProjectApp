import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div className={styles.layout}>
            <div>
                Ava + Discription
            </div>
            <div>
                <MyPosts />
            </div>
        </div>
    );
}

export default Profile;