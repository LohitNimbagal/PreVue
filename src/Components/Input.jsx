import React from 'react'
import { useId } from 'react'

function Input({
    label,
    type = "text",
    placeholder,
    className = "",
    ...props
}) {
    const id = useId()
  return (
    <>
    { label && 
        <label className='inline-bloack mb-1 p-1' htmlFor={id}>
            {label}
        </label>
    }

    <input type={type} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} placeholder={placeholder} {...props} ref={ref} id={id}/>
    </>
  )
}

export default Input