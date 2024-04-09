import React from 'react'

function Button({
    children,
    type = 'button',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button className={`px-4 py-[10px] w-48 text-[13px] font-semibold rounded-lg bg-primary hover:bg-primaryDark transition duration-200 ease-in-out ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button