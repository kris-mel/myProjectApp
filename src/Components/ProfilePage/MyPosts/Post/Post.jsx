import React from 'react';
import styles from './Post.module.css';
import LikeButton from './LikeButton/LikeButton';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <div>
                 {/* Аватарка автора поста */}
                <img src='https://i.pinimg.com/736x/23/98/d7/2398d75d71c3219583ae91457709d3a0.jpg' />
            </div>
            {/* Текст поста */}
            {props.message}
            <div>
                {/* Лайки */}
                <LikeButton initialCount={props.initialCount} />
            </div>
        </div>
    );
}

export default Post;