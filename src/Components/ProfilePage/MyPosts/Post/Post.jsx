import styles from './Post.module.css';
import LikeButton from './LikeButton/LikeButton';

const Post = ({ photoUrl, message, initialCount }) => {
    return (
        <div className={styles.item}>
            {/* Аватарка автора поста */}
            <div>{photoUrl}</div>

            {/* Текст поста */}
            <div>{message}</div>

            {/* Лайки */}
            <div>
                <LikeButton
                    initialCount={initialCount}
                />
            </div>
        </div>
    );
}

export default Post;