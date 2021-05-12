import React from 'react';
import myPosts from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts() {
    return (
        <div>my posts
            <div><textarea name="" id="" cols="15" rows="5"></textarea>
                <button>Add Post</button>
            </div>
            <div>
                <Post message='Hi, how are you' likescounter='15'/>
                <Post message='I am fine' likescounter='10'/>
            </div>
        </div>
    )
}

export default MyPosts