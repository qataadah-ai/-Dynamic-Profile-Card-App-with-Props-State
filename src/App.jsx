import { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import "./App.css";
function App() {
  const [IsDark, setIsDark]=useState(false);
  
  const [Users , setUsers]=useState([
    {
    id:1,
    name:"Qataadah",
    bio:"Frontend Developer",
    avatar:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    isFollowed:false,

  },
    {
    id:2,
    name:"SARA",
    bio:"UI/UX Designer",
    avatar:"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    isFollowed:false,

  },
    {
    id:3,
    name:"ALI",
    bio:"Backend Developer",
    avatar:"https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg",
    isFollowed:false,

  }
])

// Function for follow/unfollow

function toggleFollow(id){
  const updateUsers = Users.map(user=>{
    if(user.id===id){
      return{...user, isFollowed:!user.isFollowed}
    }
    return user;
  })
  setUsers(updateUsers);
}
  


// useEffect to log follow changes to the console.
useEffect(()=>{
  Users.forEach(user=>{
    console.log(`${user.name} is ${user.isFollowed?"followed":"unfollowed"}`)
  }) 

},[Users])



  return (

    <div style={{
 background:IsDark?"#222":"#f5f5f5",
 color:IsDark?"#fff":"#000",
  minHeight: "100vh",
  padding: "10px"
}}>


{/* Switch Button */}
<button
onClick={()=>setIsDark(!IsDark)}
className='switch'
 style={{
  background:IsDark?"#fff":"#333",
  color:IsDark?"#333":"#fff"
}}>
{IsDark?"switch to Light mode":"switch to Dark mode"}
</button>


<div className="card-container">
{Users.map(user => (
  <ProfileCard
    key={user.id}
    name={user.name}
    bio={user.bio}
    avatar={user.avatar}
    isFollowed={user.isFollowed}
    toggleFollow={() => toggleFollow(user.id)}
    IsDark={IsDark}
  />
))}



</div>
     </div>
  );
}

export default App;
