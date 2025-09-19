import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div>
            {/* Поле для ввода нового поста */}
            <div><textarea name="" id=""></textarea></div>

            <div><button>To Send</button></div>

            {/* Список постов */}
            <div>
                {props.postMessage.map(post => (
                    <Post
                        key={post.id}
                        message={post.message}
                        initialCount={post.initialCount}
                        photoUrl={props.photoUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default MyPosts;