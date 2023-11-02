import React from 'react'
import "./Errors.css";

export const Errors = ({mensaje}) => {
  return (
    <div className='container'>
        <h3 className='error'>{mensaje}</h3>
    </div>
  )
}
