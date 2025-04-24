// import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  console.log(data);
  return (
    <div id='tasklist' className='flex items-center justify-start overflow-x-auto gap-5 flex-nowrap w-full mt-10 py-5 text-white'>
      
      {
        data.tasks.map((elem, id)=>{
          if(elem.active){
            return <AcceptTask key={id} data={elem} />
          }
          if(elem.completed){
            return <CompleteTask key={id} data={elem} />
          }
          if(elem.failed){
            return <FailedTask key={id} data={elem} />
          }if(elem.NewTask){
            return <NewTask key={id} data={elem} />
          }
          })
      }
    </div>
  )
}

export default TaskList
