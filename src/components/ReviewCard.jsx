//import React from 'react'
import {star} from '../assets/icons';
const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
      src={imgURL}
      alt="customer"
      className="rounded-full w-[120px] h-[120px] object-cover"/>
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
    <div className="mt-2 flex justify-center gap-2.5">
        <img src={star}
        width={24}
        height={24}
        className="oject-contain m-0"/>
        <p className="text-xl font-montserrat
         text-slate-gray">({rating})</p> 
        
    </div>
    <div>
    <h3 className="mt-1 font-palanquin text-3xl text-center font-bold items-center">{customerName}</h3>
    </div>
    </div>
  )
}

export default ReviewCard
