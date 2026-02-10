import React from 'react'

interface TContainerProps{
    children : React.ReactNode,
}

function Container({children}: TContainerProps) {
  return (
    <div className='px-8 py-4'>
        {children}
    </div>
  )
}

export default Container