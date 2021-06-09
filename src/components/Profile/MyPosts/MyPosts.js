import React from 'react';
import myPosts from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts({posts}) {



    let post = posts.map(p =>
        <Post message={p.message} likescounter={p.likesCounter}/>
    )

    return (
        <div className={myPosts.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="15" rows="5"></textarea>
                </div>

                <button>Add Post</button>
            </div>
            <div>
                {post}
            </div>
        </div>
    )
}

export default MyPosts