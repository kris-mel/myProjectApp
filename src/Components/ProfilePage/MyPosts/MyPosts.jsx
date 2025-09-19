import Post from './Post/Post';

const MyPosts = ({ postMessage }) => {

    const photoUrl = [
        <img src='https://i.pinimg.com/736x/23/98/d7/2398d75d71c3219583ae91457709d3a0.jpg' />
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
            <div>
                {postMessage.map(post => (
                    <Post
                        key={post.id}
                        message={post.message}
                        initialCount={post.initialCount}
                        photoUrl={photoUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default MyPosts;