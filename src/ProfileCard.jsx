import React from 'react'

function ProfileCard({ name, bio, avatar, isFollowed ,toggleFollow,isDark }) {
    return (
       <div style={{
  backgroundColor: isDark ? "#333" : "#fff",
  color: isDark ? "#fff" : "#000",
  border: "1px solid #ccc",
  padding: "15px",
  marginBottom: "10px",
  width: "250px",
  borderRadius: "10px"
}}>
            <img src={avatar} alt={name} />
            <h2>{name}</h2>
            <p>{bio}</p>
           <button onClick={toggleFollow}>
  {isFollowed ? "Unfollow" : "Follow"}
</button>

        </div>
    )
}

export default ProfileCard
