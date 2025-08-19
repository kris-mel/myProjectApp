import Post from './Post/Post';
import styles from './MyPosts.module.css';

const MyPosts = (props) => {
    // временный массив постов (в будущем — придет с сервера)
    const postMessage = [
        { id: 1, message: 'hi', initialCount: 17 },
        { id: 2, message: 'how are you?', initialCount: 15 },
    ]

    return (
        <div>
            <div>
                {/* Поле для ввода нового поста */}
                <textarea name="" id=""></textarea>
            </div>
            <div>
                <button>To Send</button>
            </div>

            {/* Список постов */}
            <div>{postMessage.map(post => (
                <Post
                    key={post.id}
                    message={post.message}
                    initialCount={post.initialCount}
                />
            ))}
            </div>
        </div>
    );
}

export default MyPosts;