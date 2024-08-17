import React from 'react'
import { Link } from 'react-router-dom'
import Image1 from '../../../assets/t-shirt1.png'
import Image2 from '../../../assets/t-shirt2.png'
import Image3 from '../../../assets/t-shirt3.png'
import Image4 from '../../../assets/t-shirt4.png'
function image1() {
  return (
    <div>
        <div className="bg-gradient-to-t from-[#f0abdc] to-[#88aae5] rounded-lg h-[32rem]  mx-[8rem] my-[1.5rem] flex flex-row gap-[4rem]">
            <div className="">
                <div className="bg-gray-200 my-[1rem] mx-[2rem] w-[26rem] h-[24rem] px-[3rem] py-[1rem] rounded-sm"><img src={Image1} alt="" className="w-[18rem]" /></div>
                <div className="flex flex-row mx-[2rem] gap-[0.7rem] mt-[-0.5rem]">
                    <Link to="/product1">
                        <div className=""><img src={Image1} alt="" className="w-[6rem] h-[6rem] bg-gray-200 rounded-sm" /></div>
                    </Link>
                    <Link to="/product2">
                        <div className=""><img src={Image2} alt="" className="w-[6rem] h-[6rem] bg-gray-200 rounded-sm" /></div>
                    </Link>
                    <Link to="/product3">
                        <div className=""><img src={Image3} alt="" className="w-[6rem] h-[6rem] bg-gray-200 rounded-sm" /></div>
                    </Link>
                    <Link to="/product4">
                        <div className=""><img src={Image4} alt="" className="w-[6rem] h-[6rem] bg-gray-200 rounded-sm" /></div>
                    </Link>
                </div>
            </div>
            <div className="">
                <div className="my-6 font-bold text-3xl">Rayon T-shirt</div>
                <div className="font-bold text-gray-800 lg:text-2xl my-2">Men's fashion T-shirt</div>
                <div className="text-2xl font-bold my-2 text-gray-600">$78.00</div>
                <div className="my-2 flex flex-row">
                    <select name="text" id="text" className="mx-[rem] py-[0.5rem] text-black rounde-lg border-2 border-black rounded-lg">
                        <option value="" className="">Select Size</option>
                        <option value="" className="">XL</option>
                        <option value="" className="">XLL</option>
                        <option value="" className="">Small</option>
                        <option value="" className="">Large</option>
                        <option value="" className=""></option>
                    </select>
                <div className="">
                    <div className=""></div>
                    <button className="bg-gradient-to-t from-red-600 to-pink-400 ml-[4rem] lg:ml-[1rem] px-2 py-2 text-sm sm:px-6 sm:py-4 rounded-lg text-white font-sans-serif font-semibold">Add to Cart</button>
                </div>
                </div>
                <div className="font-bold lg:text-2xl   my-2">Product Details</div>
                <div className="w-[24rem] text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At eos voluptatem iste mollitia. Dolorum est maxime labore excepturi totam atque recusandae doloremque ipsum harum aut unde, voluptatem, nemo, nisi omnis.</div>
            </div>
        </div>
    </div>
  )
}

export default image1