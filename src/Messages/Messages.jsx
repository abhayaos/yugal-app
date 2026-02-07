import React from 'react'
import SideBar from '../components/SideBar'
import MessageBox from './MessageBox'
function Messages() {
  return (
    <div className="flex">
      <SideBar />
      <MessageBox />
     </div>
  )
}

export default Messages