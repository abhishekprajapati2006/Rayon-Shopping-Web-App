import React from 'react'
import Fblog from '../../assets/shopblog9.png'
import Shop1 from '../products/product1/product.jsx'
import Shop2 from '../products/product1/product.jsx'
import Shop3 from '../products/product1/product.jsx'
import Shop4 from '../products/product1/product.jsx'
import Shop5 from '../products/product1/product.jsx'
import Shop6 from '../products/product1/product.jsx'
import Next3 from './nexttoolbar/next3.jsx'

function shop3() {
  return (
    <div>
        <div className="">
          <img src={Fblog} alt="" className="w-full" />
        </div>
        <div className="my-[2rem]">
          <h1 className="text-3xl font-semibold text-gray-600 font-sans-serif text-center md:text-6xl">Featured Products</h1>
          <p className="my-[0.5rem] text-center font-semibold font-serif  text-gray-600 md:text-3xl">Summer Collection New Morden Design.</p>
        </div>
        <Shop1/>
        <Shop2/>
        <Shop3/>
        <Shop4/>
        <Shop5/>
        <Shop6/>
        <Next3/>
    </div>
  )
}

export default shop3