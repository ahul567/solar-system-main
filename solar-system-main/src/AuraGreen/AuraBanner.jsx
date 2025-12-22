import React from 'react'
import './AuraGreen.css';

export default function AuraBanner(props) {
  return (
    <div className='Banner-Text'>
      <h1 className='Banner-head'>{props.head}</h1>
      <p className='banner-span'>{props.span}</p>
    </div>
  )
}
