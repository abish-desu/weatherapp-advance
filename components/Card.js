import React from 'react'

const Card = ({title,children}) => {
  return (
    <div class="card">
    <h3 class="title">{title}</h3>
    <div class="px-9 py-16">
    
    <p class="text-gray-700 text-sm">
        {children}
    </p>
  </div>
  </div>  )
}

export default Card;