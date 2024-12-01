import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div className='bg-orange-600 text-white text-5xl p-9 text-center'>
      User: {userid}</div>
  )
}

export default User
