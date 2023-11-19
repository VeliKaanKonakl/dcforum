import React from 'react'

export const Pinned = (props) => {
  return (
    <div>
    <li className="flex">
      <a href="/" className="flex pt-3 ">
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
