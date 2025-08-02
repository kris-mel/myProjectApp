import React from 'react'
import Post from './Post/Post';
import styles from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea name="" id=""></textarea>
            </div>
            <div>
                <button>To Send</button>
            </div>
            <div>
                <Post message='first post' />
            </div>
        </div>
    );
}

export default MyPosts;