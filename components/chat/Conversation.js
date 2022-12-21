import React, { useState, useEffect } from 'react'

const Conversation = ({ 
    chat,
    currentUser
}) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const user = chat.members.find(id => id !== currentUser);

        const getUserData = async () => {
            
        }
    }, []);
  return (
    <div>

    </div>
  )
}

export default Conversation