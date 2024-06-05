import React from 'react'

function Nav({text}) {
  return (
    <div className=' w-full h-full px-10 py-6 text-center'>
        <h1 className=' text-yellow-200 text-5xl font-semibold border-b pb-10 border-gray-300'>{text}</h1>
    </div>
  )
}

export default Nav