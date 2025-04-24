import { useContext } from 'react'

import { useState } from "react";
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext);
  

    const [taskTitle ,settaskTitle] = useState('');
    const [date ,setdate] = useState('');
    const [assign ,setassign] = useState('');
    const [category ,setcategory] = useState('');
    const [description ,setdescription] = useState('');

    const [newTask,setnewTask] = useState({}); 

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log("Form submitted");
  
        setnewTask({taskTitle, description, date, category, active:false, newTask:true, completed:false, failed:false});
       
        const data = userData;

        data.forEach((emp) => {
            if(emp.name == assign){
                emp.tasks.push(newTask);
                emp.taskCount.newTask += 1;
                emp.taskCount.active += 1;
            }})
        setUserData(data);
        console.log(data);
        // localStorage.setItem('employees', JSON.stringify(data));
        console.log("Data updated successfully");

        settaskTitle('');
        setdate('');
        setassign('');
        setcategory('');
        setdescription('');
        }
    
  return (
    <>
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded text-white">
        <form onSubmit={(e)=>submitHandler(e)} className="flex flex-wrap w-full item-start justify-between text-white">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Assignment CSE"
                value={taskTitle} 
                onChange={(e)=>{
                    settaskTitle(e.target.value)
              }}/>
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date" 
                value={date}
                onChange={(e)=>{
                    setdate(e.target.value)
                }}/>
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" 
                value={assign}
                onChange={(e)=>{
                    setassign(e.target.value)
                }}/>
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Designer, Developer, etc..." 
                value={category}
                onChange={(e)=>{
                    setcategory(e.target.value)
                }}/>
            </div>
          </div>
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" color="30" rows="10" 
                value={description}
                onChange={(e)=>{
                    setdescription(e.target.value)
                }}
            />
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-xl mt-4 w-full text-white ">Create Task</button>
          </div>
      </form>
      </div>
    </>
  )
}

export default CreateTask
