import React from 'react'
import NrayonBg from '../assets/Nrayonbg.png'
import { Link } from 'react-router-dom'
function navbar() {
  return (
    <div class="h-[3.8rem] bg-gray-50">
      <nav class="fixed w-full z-20 border-b bg-white">
        <div class="px-[2rem]">
          <div class="flex items-center justify-between">
            <div class="relative z-20">
              <a href="home.jsx">
                <img src={NrayonBg} alt="logo-tailus" class="w-32 my-[0.6rem] md:w-[32rem] md:h-[2.5rem] "/>
              </a>
            </div>

            <div class="flex items-center justify-end border-l md:h-[5rem] md:border-0">
              <input type="checkbox" name="hamburger" id="hamburger" class="peer" hidden/>
              <label for="hamburger" class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer md:hidden">
                <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-gray-600 transition duration-300"></div>
                <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-gray-600 transition duration-300"></div>
              </label>
              {/* <div class="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 "> */}
              <div class="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-300 md:border-r-0 md:w-auto md:static md:shadow-none md:translate-x-0 md:h-[5rem] md:mx-[rem] ">
                <div class="flex flex-col h-full justify-between md:items-center md:flex-row">
                  <ul class="px-6 pt-8 my-[4rem] space-y-4 md:space-y-0 md:flex lg:space-x-12 lg:pt-0 md:mr-[-4rem] xl:mx-[12rem] md:py-[2rem">
                    <Link to="/"  class="w-[16rem] h-[3rem] hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-400 rounded-lg flex flex-row gap-[1rem] py-[-4rem] px-[1rem] mx-[0.2rem] hover:border-2 group relative lg:before:absolute lg:before:inset-x-0 lg:before:bottom-1 lg:before:h-0.5 lg:before:origin-right lg:before:scale-x-0 lg:before:bg-gray-600 lg:before:transition lg:before:duration-400 lg:hover:before:origin-left lg:hover:before:scale-x-100 md:w-[4rem] md:hover:bg-red-400">
                      <svg viewBox="0 0 1024 1024" fill="currentColor" height="2em" width="2em" className="my-[0.5rem] text-slate-600 hover:text-slate-800 lg:hidden ">
                        <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
                      </svg>
                      <li class="my-[0.7rem] lg:my-auto text-xl lg:text-lg text-slate-600 hover:text-slate-500 font-semibold md:text-3xl md:hidden">Home</li>
                    </Link>
                    <Link to="/fshop" class="w-[16rem] h-[3rem] hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-400 rounded-lg flex flex-row gap-[1rem] py-[-4rem] px-[1rem] mx-[0.2rem] hover:border-2 group relative lg:before:absolute lg:before:inset-x-0 lg:before:bottom-1 lg:before:h-0.5 lg:before:origin-right lg:before:scale-x-0 lg:before:bg-gray-600 lg:before:transition lg:before:duration-400 lg:hover:before:origin-left lg:hover:before:scale-x-100 md:w-[4rem]">
                      <svg viewBox="0 0 1024 1024" fill="currentColor" height="2em" width="2em" className="my-[0.5rem] text-slate-600 hover:text-slate-800 lg:hidden">
                        <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
                      </svg>
                      <li class="my-[0.7rem] lg:my-auto text-xl lg:text-lg text-slate-600 hover:text-slate-500 font-semibold md:text-3xl md:hidden">Shop</li>
                    </Link>
                    <Link to="/blog" class="w-[16rem] h-[3rem] hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-400 rounded-lg flex flex-row gap-[1rem] py-[-4rem] px-[1rem] mx-[0.2rem] hover:border-2 group relative lg:before:absolute lg:before:inset-x-0 lg:before:bottom-1 lg:before:h-0.5 lg:before:origin-right lg:before:scale-x-0 lg:before:bg-gray-600 lg:before:transition lg:before:duration-400 lg:hover:before:origin-left lg:hover:before:scale-x-100 md:w-[4rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" id="Hashnode-Logo--Streamline-Ultimate" height="2em" width="2em" className="my-[0.5rem] text-slate-600 hover:text-slate-800 lg:hidden">
                      <path d="m13.80625 5.36875 -4.175 -4.175a3.01875 3.01875 0 0 0 -4.2625 0L1.1937499999999999 5.36875a3.01875 3.01875 0 0 0 0 4.2625l4.175 4.175a3.01875 3.01875 0 0 0 4.2625 0l4.175 -4.175a3.01875 3.01875 0 0 0 0 -4.2625Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                      <path d="M5 7.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0 -5 0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                    </svg>
                      <li class="my-[0.7rem] lg:my-auto text-xl lg:text-lg text-slate-600 hover:text-slate-500 font-semibold md:text-3xl md:hidden">Blog</li>
                    </Link>
                    <Link to="/about" class="w-[16rem] h-[3rem] hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-400 rounded-lg flex flex-row gap-[1rem] py-[-4rem] px-[1rem] mx-[0.2rem] hover:border-2 group relative lg:before:absolute lg:before:inset-x-0 lg:before:bottom-1 lg:before:h-0.5 lg:before:origin-right lg:before:scale-x-0 lg:before:bg-gray-600 lg:before:transition lg:before:duration-400 lg:hover:before:origin-left lg:hover:before:scale-x-100 md:w-[4rem]">
                      <svg id="Equal-Approximately--Streamline-Carbon" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" height="2em" width="2em" className="my-[0.5rem] text-slate-600 hover:text-slate-800 lg:hidden ">
                        <path d="M9.375 7.03125c-0.8330156249999999 0 -1.51471875 -0.40903125 -2.1161250000000003 -0.7699218750000001C6.7134374999999995 5.93409375 6.198234374999999 5.625 5.625 5.625c-0.655171875 0 -1.14796875 0.404484375 -1.543453125 0.80015625l-0.66309375 -0.6628593749999999C3.9187968749999995 5.26190625 4.6216875 4.687453125 5.625 4.687453125c0.8330156249999999 0 1.51471875 0.40903125 2.1161250000000003 0.7699218750000001 0.5454375 0.327234375 1.060640625 0.6363281249999999 1.633875 0.6363281249999999 0.655078125 0 1.147828125 -0.404484375 1.54359375 -0.80025l0.6628593749999999 0.6629531249999999c-0.50034375 0.500390625 -1.203328125 1.07475 -2.20640625 1.07475Z" stroke-width="1"/>
                        <path d="M9.375 10.3125c-0.8330156249999999 0 -1.51471875 -0.40903125 -2.1161250000000003 -0.7699218750000001C6.7134374999999995 9.21534375 6.198234374999999 8.90625 5.625 8.90625c-0.655171875 0 -1.14796875 0.404484375 -1.543453125 0.80015625l-0.66309375 -0.6628593749999999c0.50034375 -0.500390625 1.203234375 -1.07484375 2.206546875 -1.07484375 0.8330156249999999 0 1.51471875 0.40903125 2.1161250000000003 0.7699218750000001 0.5454375 0.327234375 1.060640625 0.6363281249999999 1.633875 0.6363281249999999 0.655078125 0 1.147828125 -0.404484375 1.54359375 -0.80025l0.6628593749999999 0.6629531249999999c-0.50034375 0.500390625 -1.203328125 1.07475 -2.20640625 1.07475Z" stroke-width="1"/>
                        <path d="M7.5 14.0625C3.8813906250000003 14.0625 0.9375 11.1185625 0.9375 7.5S3.88134375 0.9375 7.5 0.9375s6.5625 2.9439375 6.5625 6.5625 -2.9438906250000003 6.5625 -6.5625 6.5625Zm0 -12.1875C4.398421875 1.875 1.875 4.398375000000001 1.875 7.5s2.523421875 5.625 5.625 5.625 5.625 -2.523375 5.625 -5.625S10.601578125000001 1.875 7.5 1.875Z" stroke-width="1"></path>
                        <path id="_Transparent_Rectangle_" d="M0 0h15v15H0Z" fill="none" stroke-width="1"/>
                      </svg>
                      <li class="my-[0.7rem] lg:my-auto text-xl lg:text-lg text-slate-600 hover:text-slate-500 font-semibold md:text-3xl md:hidden">About us</li>
                    </Link>
                    <Link to="/contact" class="w-[16rem] h-[3rem] hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-400 rounded-lg flex flex-row gap-[1rem] py-[-4rem] px-[1rem] mx-[0.2rem] hover:border-2 group relative lg:before:absolute lg:before:inset-x-0 lg:before:bottom-1 lg:before:h-0.5 lg:before:origin-right lg:before:scale-x-0 lg:before:bg-gray-600 lg:before:transition lg:before:duration-400 lg:hover:before:origin-left lg:hover:before:scale-x-100 md:w-[4rem] md:hover:bg-red-400">
                      <svg viewBox="0 0 24 24" fill="currentColor" height="2em" width="2em" className="my-[0.5rem] text-slate-600 hover:text-slate-800">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M19 7h5v2h-5V7zm-2 5h7v2h-7v-2zm3 5h4v2h-4v-2zM2 22a8 8 0 1116 0h-2a6 6 0 10-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                      </svg>
                      <li class="my-[0.7rem] lg:my-auto text-xl lg:text-lg text-slate-600 hover:text-slate-800 font-semibold md:text-3xl md:hidden">Contact</li>
                    </Link>
                    <Link to="/signup" class="border-t py-[1rem] px-6 md:px-[1rem] md:border-none">
                      <div class="block bg-gradient-to-t from-red-600 to-pink-400 px-6 py-3 rounded-full text-center text-white md:text-2xl md:mt-[-1.2rem] ">
                        SignUp
                      </div>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default navbar


// https://play.tailwindcss.com/3Tox96tRmY?file=css