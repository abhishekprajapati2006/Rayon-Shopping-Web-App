import React from 'react'
import { Link } from 'react-router-dom'
import Banner1 from '../../assets/banner1.png'
import Banner2 from '../../assets/banner2.png'
import Adwatisment1 from '../../assets/adwatisment1.png'
import Adwatisment2 from '../../assets/adwatisment2.png'
import Adwatisment3 from '../../assets/adwatisment3.png'
const home4 = () => {
  return (
    <div>
        <div className="flex flex-col my-[2rem] gap-[1rem] md:mx-[1rem] ">
            <div className="bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-xl flex flex-row ">
                <div className="">
                    <img src={Banner1} alt="img" className="w-[12rem] h-[15rem] md:w-[20rem] md:h-[24rem] " />
                </div>
                <div className="mx-[0.5rem] md:my-[2rem] ">
                    <p className="text-2xl text-gray-500 font-semibold font-sans-serif my-2 mx-[1rem] md:text-4xl md:my-[1rem]  ">Crazy deals</p>
                    <p className="text-3xl text-gray-700 font-sans-serif font-bold mx-[0.2rem] md:text-5xl md:mx-[1rem] md:my-[1rem] ">buy 1 get 1 free</p>
                    <p className="text-lg text-white font-serif my-[0.3rem] md:text-3xl md:mx-[1rem] md:my-[1rem] ">best classic dress is on sale at Rayon</p>
                    <Link to="/about"><button className="bg-gradient-to-r from-red-500 to-yellow-400 hover:bg-gradient-to-r hover:from-red-600 hover:to-yellow-500 px-[0.5rem] py-[0.5rem] rounded-xl border-2 rounded-sm mx-[3rem] md:px-[1.5rem] md:py-[1rem] md:text-2xl md:mx-[8rem] ">Learn more</button></Link>
                </div>
            </div>
            <div className="bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-xl flex flex-row ">
                <div className=" mx-[0.5rem] md:my-[2rem]">
                    <p className="text-2xl text-gray-500 font-semibold font-sans-serif my-2 mx-[0.45rem] md:text-4xl md:mx-[1.2rem] md:my-[1rem] ">Crazy deals</p>
                    <p className="text-3xl text-gray-700 font-sans-serif font-bold mx-[0.2rem] px-1 md:text-5xl md:mx-[1rem] md:my-[1rem] ">buy 1 get 1 free</p>
                    <p className="text-lg text-white font-serif my-[0.3rem] pl-3 md:text-3xl md:mx-[1rem] md:my-[1rem] ">best classic dress is on sale at Rayon</p>
                    <Link to="/about"><button className="bg-gradient-to-r from-red-500 to-yellow-400 hover:bg-gradient-to-r hover:from-red-600 hover:to-yellow-500 px-[0.5rem] py-[0.5rem] rounded-xl border-2 rounded-sm mx-[3rem] md:px-[1.5rem] md:py-[1rem] md:text-2xl md:mx-[8rem] ">Learn more</button></Link>
                </div>
                <div className="">
                    <img src={Banner2} alt="img" className="w-[12rem] h-[15rem] md:w-[20rem] md:h-[24rem]" />
                </div>
            </div>
        </div>
        <div className="">
            <div className="my-[2rem] mx-[0.5rem] rounded-xl flex flex-row bg-gradient-to-r from-red-600 to-blue-400 md:mx-[1rem] ">
                <div className="">
                    <img src={Adwatisment1} alt="img" className="w-[12rem] h-[21rem] md:w-[20rem] md:h-[24rem]" />
                </div>
                <div className="my-[4rem] md:my-[3rem] md:mx-[-2rem] ">
                    <p className="text-sm text-gray-400 font-sans-serif my-2 md:text-3xl md:my-[1rem] ">Seasonal Sale</p>
                    <p className="text-lg text-gray-700 font-sans-serif font-bold my-2 md:text-4xl">Winter Collection 70% off</p>
                    <div className="">
                    <p className="text-sm text-gray-600 font-serif my-[0.3rem] md:text-2xl ">best classic dress is on sale at Rayon</p>
                    <Link to="/fshop"><div className="text-gray-700 font-bold bg-gradient-to-r from-red-700 to-blue-500 hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-500 text-sm rounded-full w-[9rem] px-[2rem] py-[0.5rem] my-[1rem] mx-[1rem] md:w-[10rem] md:py-5 md:text-xl md:mx-[6rem] md:my-[2rem] ">Shop now</div></Link>
                    </div>
                </div>
            </div>
            <div className="my-[2rem] mx-[0.5rem] rounded-xl flex flex-row bg-gradient-to-r from-red-600 to-yellow-400 md:mx-[1rem] ">
                <div className="">
                    <img src={Adwatisment2} alt="img" className="w-[12rem] h-[21rem] md:w-[20rem] md:h-[24rem]" />
                </div>
                <div className="my-[4rem] md:my-[3rem] md:mx-[-2rem] ">
                    <p className="text-sm text-gray-400 font-sans-serif my-2 md:text-3xl md:my-[1rem]">Seasonal Sale</p>
                    <p className="text-lg text-gray-700 font-sans-serif font-bold my-2 md:text-4xl">Winter Collection 70% off</p>
                    <div className="">
                    <p className="text-sm text-gray-600 font-serif my-[0.3rem] md:text-2xl ">best classic dress is on sale at Rayon</p>
                    <Link to="/fshop"><div className="text-gray-700 font-bold bg-gradient-to-r from-red-700 to-yellow-500 hover:bg-gradient-to-r hover:from-red-600 hover:to-yellow-500 text-sm rounded-full w-[9rem] px-[2rem] py-[0.5rem] my-[1rem] mx-[1rem] md:w-[10rem] md:py-5 md:text-xl md:mx-[6rem] md:my-[2rem]">Shop now</div></Link>
                    </div>
                </div>
            </div>
            <div className="my-[2rem] mx-[0.5rem] rounded-xl flex flex-row bg-gradient-to-r from-red-600 to-purple-400 ">
                <div className="">
                    <img src={Adwatisment3} alt="img" className="w-[12rem] h-[21rem] md:w-[20rem] md:h-[24rem]" />
                </div>
                <div className="my-[4rem] md:my-[3rem] md:mx-[-2rem] ">
                    <p className="text-sm text-gray-400 font-sans-serif my-2 md:text-3xl md:my-[1rem]">Seasonal Sale</p>
                    <p className="text-lg text-gray-700 font-sans-serif font-bold my-2 md:text-4xl">Winter Collection 70% off</p>
                    <div className="">
                    <p className="text-sm text-gray-600 font-serif my-[0.3rem] md:text-2xl ">best classic dress is on sale at Rayon</p>
                    <Link to="/fshop"><div className="text-gray-700 font-bold  bg-gradient-to-r from-red-700 to-purple-500 hover:bg-gradient-to-r hover:from-red-600 hover:to-purple-500 text-sm rounded-full w-[9rem] px-[2rem] py-[0.5rem] my-[1rem] mx-[1rem] md:w-[10rem] md:py-5 md:text-xl md:mx-[6rem] md:my-[2rem]">Shop now</div></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default home4