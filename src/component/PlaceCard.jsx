import React from 'react'
import './PlaceCard.css'
// import img from '../assets/images/places/jaffna-library.jpg'

const PlaceCard = ({ onClick, name, img }) => {
  return (
    <div className='card-body' onClick={ onClick }>
        <img src={img} alt=""  className='card-image'/>
        <div className='card-text'>{name}</div>
    </div>
  )
}

export default PlaceCard