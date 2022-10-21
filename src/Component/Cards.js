import React from 'react'
import CardsDetail from './CardsDetail'

const Cards = ( props ) => {

    const infectedCases = props.data.reduce((acc, curr) => {
        return acc = acc + curr.Confirmed;
    }, 0)

    const recoveredCases = props.data.reduce((acc, curr) => {
        return acc = acc + curr.Recovered;
    }, 0)

    const deathsCases = props.data.reduce((acc, curr) => {
        return acc = acc + curr.Deaths;
    }, 0)
        
    
  return (
    <div className='w-6/12 mx-auto pt-8 pb-8 flex wrap justify-between'>
        <CardsDetail infectedCases={infectedCases} title={'Confirmed'} />
        <CardsDetail infectedCases={recoveredCases} title={'Recovered'} />
        <CardsDetail infectedCases={deathsCases} title={'Deaths'} />      
    </div>
  )
}

export default Cards