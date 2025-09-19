import Post from './Post/Post';

const MyPosts = ({postMessage}) => {
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
            <div>
                {postMessage.map(post => (
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