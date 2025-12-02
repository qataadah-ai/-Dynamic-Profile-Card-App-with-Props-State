import React from 'react'
import "./App.css";

// ReUsable ProfileCard Component

function ProfileCard({name,bio,avatar,isFollowed,IsDark,toggleFollow}) {
  return (

    <div className='profile-card'
    style={{
      backgroundColor: IsDark ? "#333" : "#fff",
  color: IsDark ? "#fff" : "#000",
  
    }}>

      <h2>{name}</h2>

      <img className='card-img'

      src={avatar} />

      <p>{bio}</p>

     {/* Button for follow/UnFolow */}
      <button
      className='btn'
       onClick={toggleFollow}>
        {isFollowed?"Unfollow":"Follow"}
      </button>
      
     
    </div>
  )
}

export default ProfileCard
