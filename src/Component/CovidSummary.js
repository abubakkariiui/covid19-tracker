import React from 'react'

const CovidSummary = ( props ) => {

    return (
        <div className='w-6/12 mx-auto pt-8 pb-8'>
            <h1 className='text-left text-black text-4xl font-medium leading-8 pb-12'>Covid Summary Pakistan</h1>
            <table width='100%' className='flex flex-wrap w-full'>
                <thead className='flex flex-wrap w-full'>
                    {
                        props.data.map((key, i) => {
                            if(i === 0) {
                                return (
                                    // console.log(Object.keys(key))
                                    <tr key={i} className='text-left bg-slate-100 flex flex-wrap w-full'>
                                        <th className='p-5 w-1/5'>{Object.keys(key)[3]}</th>
                                        <th className='p-5 pl-0 w-1/5 text-center bg-red-500'>{Object.keys(key)[11]}</th>
                                        <th className='p-5 pl-0 w-1/5 text-center'>{Object.keys(key)[8]}</th>
                                        <th className='p-5 pl-0 w-1/5 text-center bg-green-400'>{Object.keys(key)[10]}</th>
                                        <th className='p-5 pl-0 w-1/5 text-center bg-rose-200'>{Object.keys(key)[9]}</th>
                                    </tr>
                                )
                            }
                        })                        
                    }
                </thead>
                <tbody className='border-zinc-200 border border-t-0 flex flex-wrap w-full'>
                    {
                        props.data.map((data, i) => {
                            return (
                                <tr key={i} className='flex flex-wrap w-full border-y-2'>
                                    <td className='w-1/5 pl-4'>
                                        <span className='w-full flex text-black font-medium pt-2 pb-2 text-base font-medium pb-6'>
                                            {data.Province}
                                        </span>
                                    </td>
                                    <td className='w-1/5 bg-red-500'>
                                        <span className='w-full text-right flex justify-center text-black text-sm font-normal leading-8 pt-2 pb-2'>
                                            {data.Active}
                                        </span>
                                    </td>
                                    <td className='w-1/5'>
                                        <span className='w-full text-right flex justify-center text-black text-sm font-normal leading-8 pt-2 pb-2'>
                                            {data.Confirmed } 
                                        </span>
                                    </td>
                                    <td className='w-1/5 bg-green-400'>
                                        <span className='w-full text-right flex justify-center text-black text-sm font-normal leading-8 pt-2 pb-2'>
                                            {data.Recovered}
                                        </span>
                                    </td>
                                    <td className='w-1/5 bg-rose-200'>
                                        <span className='w-full text-right flex justify-center text-black text-sm font-normal leading-8 pt-2 pb-2'>
                                            {data.Deaths}
                                        </span>
                                    </td>
                                </tr>
                            )
                        })
                    }                    
                </tbody>
            </table>
        </div>
    )
}

export default CovidSummary