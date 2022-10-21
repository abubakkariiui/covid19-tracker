import React from 'react';

const Pagination = ( { dataperpage, totalData, paginate } ) => {
    
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalData / dataperpage); i++){
        pageNumbers.push(i);
    }

    return (
        <div className='w-6/12 mx-auto pt-8 pb-8'>
            <ul className='flex flex-wrap'>
                {
                    pageNumbers.map((number, i) => {
                        return (
                            <li key={i} className='flex bg-slate-600 p-2 mr-2 mb-2'>
                                <a onClick={() => paginate(number)} href="javascript:void(0);" className='text-white'>
                                    {number}
                                </a>

                            </li>
                        )
                    })
                }            
            </ul>
        </div>
    )

}

export default Pagination