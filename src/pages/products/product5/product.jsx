import { Link } from 'react-router-dom'
import Shirt1 from '../../../assets/t-shirt1.png'
import Shirt2 from '../../../assets/t-shirt2.png'
import Shirt3 from '../../../assets/t-shirt3.png'
import Shirt4 from '../../../assets/t-shirt4.png'

import React from 'react'

function product() {
  return (
    <div>
    <div className="mx-[1.5rem] sm:mx-auto sm:flex sm:flex-row md:flex md:flex-row lg:flex lg:flex-row lg:mx-[1rem] lg:gap-0 xl:flex xl:flex-row xl:mx-[5rem]">
          <div className=" mx-[2rem] sm:mx-[2.5rem] md:mx-[4.5rem] lg:flex lg:flex-row gap-8 lg:mx-[2rem] lg:ml-auto">
            <Link to="/product1">
            <div className="bg-gradient-to-r from-[#eeabdb] to-[#a3bfef] my-[2rem] sm:my-[2rem] md:my-[2rem] w-[16rem] h-[21.5rem] border-2 border-red-200 bg-gray-100 rounded-3xl p-3">
              <div className=" border-1 border-gray-400 bg-gray-300 rounded-2xl p-4">
                <img src={Shirt1} alt="" className="h-[12rem] mx-[2rem]" />
              </div>
              <div className="my-2">
                <div className="text-sm text-gray-600 font-sans-serif">Rayon</div>
                <div className="font-bold mb-[-0.4rem] lg:text-sm">Cartoon Astronaut T-shirts</div>
                <div className="mb-[-0.4rem]">⭐⭐⭐⭐⭐</div>
                <div className="text-2xl font-bold">$98</div>
                <div className="ml-[11rem] mt-[-2rem] lg:ml-[10rem]">
                  <svg viewBox="0 0 1024 1024" fill="currentColor" height="2em" width="2em" className="text-gray-600">
                    <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
                  </svg>
                </div>
              </div>
            </div>
            </Link>
            <Link to="/product2">
            <div className="bg-gradient-to-r from-[#eeabdb] to-[#a3bfef] sm:my-[2rem] md:my-[2rem] w-[16rem] h-[21.5rem]  border-2 border-red-200 bg-gray-100 rounded-3xl p-3">
              <div className=" border-1 border-gray-400 bg-gray-300 rounded-2xl p-4">
                <img src={Shirt2} alt="" className="h-[12rem] mx-[2rem]" />
              </div>
              <div className="my-2">
                <div className="text-sm text-gray-600 font-sans-serif">Rayon</div>
                <div className="font-bold mb-[-0.4rem] lg:text-sm">Cartoon Astronaut T-shirts</div>
                <div className="mb-[-0.4rem]">⭐⭐⭐⭐⭐</div>
                <div className="text-2xl font-bold">$78</div>
                <div className="ml-[11rem] mt-[-2rem] lg:ml-[10rem]">
                  <svg viewBox="0 0 1024 1024" fill="currentColor" height="2em" width="2em" className="text-gray-600">
                    <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
                  </svg>
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div className="mx-[2rem] sm:mx-[1rem] md:mx-[2rem] lg:flex lg:flex-row lg:gap-8 lg:ml-auto lg:mx-[2rem]">
            <Link to="/product3">
            <div className="bg-gradient-to-r from-[#eeabdb] to-[#a3bfef] my-[2rem] sm:my-[2rem] md:my-[2rem] w-[16rem] h-[21.5rem]  border-2 border-red-200 bg-gray-100 rounded-3xl p-3">
              <div className=" border-1 border-gray-400 bg-gray-300 rounded-2xl p-4">
                <img src={Shirt3} alt="" className="h-[12rem] mx-[2rem]" />
              </div>
              <div className="my-2">
                <div className="text-sm text-gray-600 font-sans-serif">Rayon</div>
                <div className="font-bold mb-[-0.4rem] lg:text-sm">Cartoon Astronaut T-shirts</div>
                <div className="mb-[-0.4rem]">⭐⭐⭐⭐⭐</div>
                <div className="text-2xl font-bold">$68</div>
                <div className="ml-[11rem] mt-[-2rem] lg:ml-[10rem]">
                  <svg viewBox="0 0 1024 1024" fill="currentColor" height="2em" width="2em" className="text-gray-600">
                    <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
                  </svg>
                </div>
              </div>
            </div>
            </Link>
            <Link to="/product4">
            <div className="bg-gradient-to-r from-[#eeabdb] to-[#a3bfef] my-[2rem] sm:my-[2rem] md:my-[2rem] w-[16rem] h-[21.5rem]  border-2 border-red-200 bg-gray-100 rounded-3xl p-3">
              <div className=" border-1 border-gray-400 bg-gray-300 rounded-2xl p-4">
                <img src={Shirt4} alt="" className="h-[12rem] mx-[2rem]" />
              </div>
              <div className="my-2">
                <div className="text-sm text-gray-600 font-sans-serif">Rayon</div>
                <div className="font-bold mb-[-0.4rem] lg:text-sm">Cartoon Astronaut T-shirts</div>
                <div className="mb-[-0.4rem]">⭐⭐⭐⭐⭐</div>
                <div className="text-2xl font-bold">$88</div>
                <div className="ml-[11rem] mt-[-2rem] lg:ml-[10rem]">
                  <svg viewBox="0 0 1024 1024" fill="currentColor" height="2em" width="2em" className="text-gray-600">
                    <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
                  </svg>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default product