import React from 'react';
import profile from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div>
            <div><img src="https://static.tildacdn.com/tild3431-3830-4966-a265-323736393038/05_tumen.jpg" alt=""
                      className={profile.content__image}/></div>
            <div>ava</div>
            <MyPosts/>
        </div>
    )
};
export default Profile;