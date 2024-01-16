import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "bg-blue-400",
    textColor = "text-black",
    className = "",
    ...props }
) {
  return (
    <button className={`p-1 m-1 rounded-lg ${className} ${textColor} ${bgColor}`} {...props}>
        {children}
    </button>
  )
}

export default Button