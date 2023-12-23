import React from 'react'

function Card({list}) {
    // console.log(list);

    return (
        list.map((item) => (
            <div key={Math.random()} className='card w-40 flex  flex-col justify-between rounded-xl gap-1 leading-3 text-center m-2 relative'>
            <img src={item.Poster} alt="" className='border rounded-xl '/>
    
            <h2 className='text-xs flex justify-center items-center m-1 font-bold'>{item.Title}</h2>
    
            <button><img src="src/Assets/star (1).png" alt="" className='w-5 absolute right-1 top-1' /></button>
            </div>
        )
    )
    )
}
   

export default Card