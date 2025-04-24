// import React from 'react'

import AllTask from "../others/AllTask"
import CreateTask from "../others/CreateTask"
import Header from "../others/Header"

const AdminDashboard = (props) => {
  return (
    <div className="p-7 w-full h-screen">
      <Header data={props.data} changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
