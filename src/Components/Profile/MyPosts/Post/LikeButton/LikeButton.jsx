import React, { useState } from 'react';
import styles from './LikeButton.module.css';

const LikeButton = ({ initialCount = 0 }) => {
    const [liked, setLiked] = useState(false); // Храним состояние: лайкнут ли пост
    const [likes, setLikes] = useState(initialCount); //Храним количество лайков, инициализируем значением из пропсов

    // Функция переключает состояние лайка:
    // если уже лайкнуто — убираем лайк и уменьшаем счётчик
    // если ещё не лайкнуто — ставим лайк и увеличиваем счётчик
    const toggleLike = () => {
        setLiked((prevLiked) => !prevLiked); // Переключаем булевое значение
        setLikes((prevLikes) => liked ? prevLikes - 1 : prevLikes + 1); // Увеличиваем или уменьшаем счётчик
    };

    return (
        <button
            className={`${styles.button} ${liked ? styles.liked : ''}`}
            onClick={toggleLike}
        >
            <span>{liked ? '❤️' : '🤍'}</span>
            <span>{likes}</span>
        </button>
    );
}

export default LikeButton