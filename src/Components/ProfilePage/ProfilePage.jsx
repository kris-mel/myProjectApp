import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ProfilePage = () => {
    return (
        <div className={styles.layout}>
            <div>
                {/* Информация о пользователе */}
                <ProfileInfo />
            </div>
            <div>
                {/* Посты пользователя */}
                <MyPosts />
            </div>
        </div>
    );
}

export default ProfilePage;