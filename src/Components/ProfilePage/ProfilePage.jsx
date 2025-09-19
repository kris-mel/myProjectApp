import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ProfilePage = (props) => {
    return (
        <div className={styles.layout}>
            <div>
                {/* Информация о пользователе */}
                <ProfileInfo />
            </div>
            <div>
                {/* Посты пользователя */}
                <MyPosts 
                    postMessage={props.postMessage}/>
            </div>
        </div>
    );
}

export default ProfilePage;