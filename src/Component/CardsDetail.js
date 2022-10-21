import React from 'react'

function CardsDetail( props ) {
  return (
    <div className='w-4/12 bg-gray-300 p-6 rounded m-4'>
        <h2 className='text-black font-medium leading-8 pt-2 text-3xl font-medium pb-6'>{props.title}</h2>
        <h3 className='text-black font-medium leading-8 text-xl font-normal'>{props.infectedCases}</h3>
        <span className='text-black font-medium leading-8 text-xl font-normal'>Updated on Tuesday</span>
    </div>
  )
}

export default CardsDetail