import React from 'react'

export const LeftHead = (props) => {
  return (
    <div>
    <li className="flex items-center mt-3">
      <a href="/" className="flex items-center ">
        <div className="box-content w-12 h-12 rounded-lg ">
          <img src={props.img} className='aspect-square rounded-xl' alt={props.name} />
        </div>
        <div className="pl-2">
          <h1 className="text-lg">{props.name}</h1>
          <p className="opacity-50 pt-[0.2vh] text-sm">{props.desc}</p>
        </div>
      </a>
    </li>
  </div>
  )
}
