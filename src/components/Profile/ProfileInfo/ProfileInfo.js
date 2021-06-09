import React from 'react';
import profile from './ProfileInfo.module.css'



function ProfileInfo() {
    return (
        <div>
            <div><img src="https://static.tildacdn.com/tild3431-3830-4966-a265-323736393038/05_tumen.jpg" alt=""
                      className={profile.content__image}/></div>
            <div className={profile.descriptionBlock}>ava</div>

        </div>
    )
};
export default ProfileInfo;