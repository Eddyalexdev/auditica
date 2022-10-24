import React from 'react'

function Category() {
  return (
    <div className='relative rounded flex items-center justify-center w-full h-20 overflow-hidden'>
        <img className="absolute w-full h-full object-cover" src='https://codeworkshop.dev/static/350e6cb1b81f18a6053b50450249a7da/8ec0a/ibiza_sunset.jpg' alt='image category'/>
        <h3 className="relative z-10 font-semibold text-lg">Pop</h3>
    </div>
  )
}

export default Category