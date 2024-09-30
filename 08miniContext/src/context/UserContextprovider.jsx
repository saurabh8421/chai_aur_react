import React, { useState } from 'react'
import UserContext from './UserContext'

function UserContextprovider({children}) {

    const [user,setUser] = useState(null)

  return (
    <UserContext.Provider value={{user,setUser}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserContextprovider
