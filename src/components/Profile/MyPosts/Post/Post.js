import React from 'react';
import post from './Post.module.css'


function Post(props) {
    return (

        <div className={post.item}>
            <img
                src="https://avatars.mds.yandex.net/get-zen_doc/1841592/pub_5e1ccba978125e00b1eaa0e2_5e1ccc70118d7f00adfc5806/scale_1200"
                alt=""/>
            {props.message}
            <div>
                <span>{props.likescounter}</span>
            </div>
        </div>

    )
}

export default Post;