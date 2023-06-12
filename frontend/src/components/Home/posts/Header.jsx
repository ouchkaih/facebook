import React from 'react'

function Header({user}) {
  return (
    <div className="w-full p-4 flex items-center">
        <div className="rounded-full w-10 h-10 bg-red-50 bg-cover" style={{backgroundImage :`url(./images/users/${user.image})`}}></div> <span className="ml-4">{user.firstName + " " + user.lastName}</span>
    </div>
  )
}

export default Header