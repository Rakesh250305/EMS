// import React from 'react'

const FailedTask = ( { data }) => {
  return (
    <div>
      <div className='h-full flex-shrink-0 p-5 rounded-xl bg-yellow-400 w-[300px]'>
        <div className='flex justify-between'>
            <h3 className='bg-red-500 px-3 py-1 rounded text-sm'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-5'>{data.description}</p>
        <div className='mt-2'>
        <button className='bg-red-500 w-full'>Failed</button>
      </div>
      </div>
    </div>
  )
}

export default FailedTask
