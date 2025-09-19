import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ProfilePage = (props) => {
    return (
        <div className={styles.layout}>

            {/* Информация о пользователе */}
            <div><ProfileInfo /></div>

            {/* Посты пользователя */}
            <div>
                <MyPosts
                    postMessage={props.postMessage}
                    photoUrl={props.photoUrl}
                />
            </div>
        </div>
    );
}

export default ProfilePage;