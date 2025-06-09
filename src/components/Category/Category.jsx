import React from 'react'
import { Product } from '../../mock/categorys'


const Category = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {
            Product.map((value)=>(
                <div key={value.id} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                    <img src={value.image} className='w-full h-full object-cover rounded-lg shadow-md'/>
                    <div className='absolute top-20 left-12'>
                        <p className='text-xl font-bold'>{value.title}</p>
                        <p className='text-gray-600'>View All</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Category