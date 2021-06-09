import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




function Profile({postsData}) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={postsData}/>
        </div>
    )
};
export default Profile;