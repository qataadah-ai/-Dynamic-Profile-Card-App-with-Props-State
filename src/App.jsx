import { useState } from 'react';
import ProfileCard from "./ProfileCard";

function App() {
  const [isDark, setIsDark] = useState(false);

  const [users, setUsers] = useState([
    { 
      id: 1,
      name: "Ali",
      bio: "Frontend Dev",
      avatar: "https://via.placeholder.com/100", 
      isFollowed: false
    },
    { 
      id: 2,
      name: "Sara",
      bio: "UI/UX Designer",
      avatar: "https://via.placeholder.com/100",
      isFollowed: false
    },
    { 
      id: 3,
      name: "David",
      bio: "Backend Dev",
      avatar: "https://via.placeholder.com/100",
      isFollowed: true
    },
  ]);
  
  // Function to toggle follow/unfollow
  function toggleFollow(id) {
    const updatedUsers = users.map(user => {
      if(user.id === id) {
        return { ...user, isFollowed: !user.isFollowed };
      }
      return user;
    });
    setUsers(updatedUsers);
  }

  return (
    <div style={{
  backgroundColor: isDark ? "#222" : "#f5f5f5",
  color: isDark ? "#fff" : "#000",
  minHeight: "100vh",
  padding: "20px"
}}>


  {/* Your toggle button and cards go here */}

    <button 
  onClick={() => setIsDark(!isDark)}
  style={{
    padding: "8px 15px",
    marginBottom: "20px",
    cursor: "pointer"
  }}
>
  {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
</button>



    <div style={{ padding: "20px" }}>
      {users.map(user => (
        <ProfileCard
          key={user.id}
          name={user.name}
          bio={user.bio}
          avatar={user.avatar}
          isFollowed={user.isFollowed}
          toggleFollow={() => toggleFollow(user.id)}
           isDark={isDark}
        />
      ))}
    </div>
     </div>
  );
}

export default App;
