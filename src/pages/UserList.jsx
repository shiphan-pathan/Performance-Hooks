import React from 'react'

const UserList = React.memo (({ users, onSelect }) => {
    console.log('UserList rendered');

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <p key={user.id} onClick={() => onSelect(user.name)}>
          {user.name}
        </p>
      ))}
    </div>
  )
})

export default UserList
