import  { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

const [userData,setUserData] = useContext(AuthContext);
  return (
    <>
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded text-white'>
    <div className='flex text-center justify-between mb-2 rounded bg-red-400 py-2 px-4'>
                    <h2 className='text-xl font-medium w-1/5'>Employee Name</h2>
                    <h2 className='text-xl font-medium w-1/5'>New Task</h2>
                    <h2 className='text-xl font-medium w-1/5'>Active</h2>
                    <h2 className='text-xl font-medium w-1/5'>Completed</h2>
                    <h2 className='text-xl font-medium w-1/5'>Failed</h2>
                </div>
    <div>
    {
        userData.map(function(elem,idx){
            return (
                <div key={idx} className='flex text-center border-3 border-emerald-800 justify-between mb-2 rounded py-2 px-4'>
                    <h2 key={idx} className='text-xl font-medium w-1/5 text-white'>{elem.name}</h2>
                    <h2 key={idx} className='text-xl font-medium w-1/5 text-blue-600'>{elem.taskCount.newTask}</h2>
                    <h2 key={idx} className='text-xl font-medium w-1/5 text-yellow-400'>{elem.taskCount.active}</h2>
                    <h2 key={idx} className='text-xl font-medium w-1/5 text-green-500'>{elem.taskCount.completed}</h2>
                    <h2 key={idx} className='text-xl font-medium w-1/5 text-red-500'>{elem.taskCount.failed}</h2>
                </div>
            );
        })
    } 
    </div>
    </div>
    </>
  )
}

export default AllTask
