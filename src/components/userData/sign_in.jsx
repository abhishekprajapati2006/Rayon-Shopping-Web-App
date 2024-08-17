import React from 'react'
import Rayonbg from '../../assets/Nrayonbg.png'
import SigninBg from '../../assets/singinbg.png'
import { Link } from 'react-router-dom'
function sign_in() {
  return (
    <div>
       <div className="my-[0.8rem]">
        <div className="my-[0.5rem]">
          <img src={Rayonbg} alt="" className="w-[12rem] mx-[7rem] md:w-[16rem] md:mx-[30rem]" />
        </div>
        <div className="flex flex-row  gap-14 bg-gradient-to-t from-[#f0abdc] to-[#88aae5] w-[22rem] h-[30rem] mx-[1.2rem] md:w-[50rem] md:h-[28rem] md:mx-[16rem] rounded-lg">
          <div className="hidden md:block">
            <img src={SigninBg} alt="img" className="w-[22rem] ml-4 my-4" />
          </div>
          <form action="href" className="mx-[2rem] my-[1rem] md:mx-auto md:my-auto">
            <h1 className="font-bold font-sans-serif text-gray-600 text-3xl my-2">Sign in</h1>
            <div className="my-2 md:my-auto">
              <h1 className="font-bold text-2xl font-sans-serif text-gray-600">Email id</h1>
              <input type="email" name="email" id="email" className="px-12 py-2 rounded-lg" placeholder="Enter your email id" />
            </div>
            <div className="my-2 md:my-auto">
              <h1 className="font-bold font-sans-serif text-2xl text-gray-600">Password</h1>
              <input type="password" name="password" id="password" className="px-12 py-2 rounded-lg" placeholder="Enter your password" />
            </div>
            <div className="my-4">
              <button class="bg-gradient-to-t from-red-600 to-pink-400 px-28 py-3 rounded-full text-center text-white">Submit</button>
            </div>
            <div className="">
              <p className="text-sm">By continuing, you agree to Rayon's</p>
              <p className="text-sm"><b className="text-sm text-blue-600 hover:border-b hover:border-amber-700 hover:text-amber-700">continuing of Use</b> and <b className="text-sm text-blue-600 hover:border-b hover:border-amber-700 hover:text-amber-700">Privacy Notice.</b></p>
            </div>
            <div className="my-2">
              <details>
                <summary><b className="text-sm text-blue-600 hover:border-b hover:border-amber-700 hover:text-amber-700">Need help</b></summary>
                <Link to="/forgate"><p className="text-sm text-blue-600 hover:border-b hover:border-amber-700 hover:text-amber-700 w-[7rem]">Forgot Password</p></Link>
                <Link to="/other-issue"><p className="text-sm text-blue-600 hover:border-b hover:border-amber-700 hover:text-amber-700 w-[10rem]">Other issues with Sign-in</p></Link>
              </details>
            </div>
            <div className="my-4 text-sm">
              <hr />
              <p className="">Buying for work?</p>
              <p className="text-sm text-blue-600 hover:border-b hover:border-amber-700 hover:text-amber-700 w-[8rem] md:w-[7rem]">Shop on Business</p>
            </div>
          </form>
        </div>
       </div>
    </div>
  )
}

export default sign_in