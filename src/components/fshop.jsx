import React from 'react'
// import './fshop.css'
// import './fshop.js'
import { Link } from 'react-router-dom';
import Shop1 from '../pages/products/product1/product.jsx'
import Shop2 from '../pages/products/product2/product.jsx'
import Shop3 from '../pages/products/product3/product.jsx'
import Shop4 from '../pages/products/product4/product.jsx'
import Shop5 from '../pages/products/product5/product.jsx'

// import Fblog1 from '../../assets/shopblog1.png'
// import Fblog2 from '../../assets/shopblog2.png'
import Fblog3 from '../assets/shopblog3.png'
// import Fblog4 from '../../assets/shopblog4.png'
// import Fblog5 from '../../assets/shopblog5.png'
// import Fblog6 from '../../assets/shopblog6.png'
// import Fblog7 from '../../assets/shopblog7.png'
// import Fblog8 from '../../assets/shopblog8.png'
// import Fblog9 from '../../assets/shopblog9.png'
// import Fblog10 from '../../assets/shopblog10.png'


function fshop() {

  return (
    <div className="body">
        <div className="">
          <img src={Fblog3} alt="" className="w-full" />
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
        <div className="mx-[2rem] my-[2rem] md:mx-[12rem] ">
        <Link to="/shop1" >
            <div className="bg-slate-400 py-[1rem] rounded-lg">
                <p className="text-2xl text-blue-600 mx-[5rem]  font-sans-serif font-semibold hover:text-amber-600 hover:border-b-2 hover:border-amber-600 w-[11rem] h-[1.8rem] md:mx-[6.5rem]">Show all result </p>
            </div>          
        </Link> 
        </div>
    </div>
  )
}

export default fshop