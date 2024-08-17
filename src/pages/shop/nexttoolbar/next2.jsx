import React from 'react'
import { Link } from 'react-router-dom'

function next2() {
  return (
    <div className="mx-[2rem] md:mx-[12rem]">
        <div className="flex flex-row lg:gap-[0.2rem] lg:mx-[28rem] my-[2rem] border-1 border-black rounded-lg">
            <Link to="/shop1" className="flex flex-row font-bold text-gray-800 text-lg text-center rounded-lg border-2 border-black w-[8rem] h-[3.5rem] py-[0.5rem] mt-[-0.2rem]">
                <svg className="text-black font-semibold text-3xl"  viewBox="0 0 24 24" fill="currentColor" height="1em"width="1em">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                </svg>
                <div className="">Previous</div>
            </Link>
            <div className="text-lg font-bold text-gray-800 text-center rounded-lg border-2 border-black w-[2.8rem] h-[2.8rem] py-[0.6rem] mt-[0.1rem]">1</div>
            <div className="bg-blue-600 text-lg font-bold text-white text-center rounded-lg border-2 border-black w-[3rem] h-[3rem] py-[0.6rem]">2</div>
            <div className="text- font-bold text-gray-800 text-center rounded-lg border-2 border-black w-[2.8rem] h-[2.8rem] py-[0.6rem] mt-[0.1rem]">3</div>
            <Link to="/shop3" className="flex flex-row text-lg py-[0.6rem] px-[0.5rem] font-bold text-gray-800 text-center rounded-lg border-2 border-black w-[5.5rem] h-[3.5rem] mt-[-0.2rem]">
                <div className=" "> Next </div>
                <svg className="text-black font-semibold text-3xl" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                </svg>
            </Link>
        </div>
    </div>
  )
}

export default next2