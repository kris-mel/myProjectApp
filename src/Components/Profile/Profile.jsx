import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div className={styles.layout}>
            <div>
                Ava + Discription
            </div>
            <div>
                My Posts
                <div>
                    New Post
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;