import React from 'react'
import { Link } from 'react-router-dom'
import Image1 from '../../../../assets/t-shirt1.png'
import Image2 from '../../../../assets/t-shirt2.png'
import Image3 from '../../../../assets/t-shirt3.png'
import Image4 from '../../../../assets/t-shirt4.png'
function image1() {
  return (
    <div>
        <div className="">
            <div className="my-[2rem]">
                <div className="bg-gray-200 my-[1rem] mx-[2rem] w-[20rem] h-[24rem] px-[2rem] py-[1rem] rounded-t-lg">
                    <img src={Image1} alt="" className="w-[16rem] my-[2rem] " />
                </div>
                <div className="flex flex-row mx-[2rem] gap-[0.7rem] mt-[-0.5rem]">
                    <Link to="/img1">
                        <div className=""><img src={Image1} alt="" className="w-[6rem] h-[6rem] bg-gray-200 rounded-sm" /></div>
                    </Link>
                    <Link to="/img2">
                        <div className=""><img src={Image2} alt="" className="w-[6rem] h-[6rem] bg-gray-200 rounded-sm" /></div>
                    </Link>
                    <Link to="/img3">
                        <div className=""><img src={Image3} alt="" className="w-[6rem] h-[6rem] bg-gray-200 rounded-sm" /></div>
                    </Link>
                    <Link to="/img4">
                        <div className=""><img src={Image4} alt="" className="w-[6rem] h-[6rem] bg-gray-200 rounded-sm" /></div>
                    </Link>
                </div>
            </div>
            <div className="mx-[3rem] ">
                <div className="my-6 font-bold text-3xl">Men's fashion shirt</div>
                <div className="font-bold text-gray-800 lg:text-2xl my-2">Men's Regular Fit Printed Spread Collar Casual Shirt</div>
                <div className="my-2 flex flex-row gap-[4rem] ">
                    <div className="text-3xl font-bold my-2 text-gray-600">$78.00</div>
                    <select name="text" id="text" className="px-[1rem] py-[0.5rem] text-black rounde-lg border-2 border-black rounded-lg">
                        <option value="" className="">Select Size</option>
                        <option value="" className="">XL</option>
                        <option value="" className="">XLL</option>
                        <option value="" className="">Small</option>
                        <option value="" className="">Large</option>
                        <option value="" className=""></option>
                    </select>
                </div>
                <div className="flex flex-row gap-[2rem] my-[2rem] ">
                    <button className="bg-gradient-to-t from-red-600 to-pink-400 w-[8rem] py-[1rem] text-sm rounded-lg text-white font-sans-serif font-semibold">Add to Cart</button>
                    <button className="bg-gradient-to-t from-red-600 to-pink-400 w-[8rem] py-[1rem] text-sm rounded-lg text-white font-sans-serif font-semibold">Buy now</button>
                </div>
                    <div className="font-bold text-2xl ">Product Details</div>
                    <div className="">Pack of<b>1</b></div>
                    <div className="">Fabric<b>Viscose Rayon</b></div>
                    <div className="">Sleeve<b>Half Sleeve</b></div>
                    <div className="">Pattern<b>Printed</b></div>
                    <div className="">Collar<b>Spread</b></div>
                    <div className="">Color<b>Dark Blue</b></div>
                <div className="my-[2rem]"></div>
                <div className="my-[2rem] ">
                <div className="font-bold text-gray-700 text-2xl ">Details</div>
                <div className="text-gray-600">STAGBEETLE shirt are designed for those who appreciate both style and ease. Viscose Rayon's silky-smooth texture creates an unparalleled wearing experience, ensuring you feel as good as you look. It's the perfect choice for leisurely outings, social gatherings, or simply relaxing in style.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default image1