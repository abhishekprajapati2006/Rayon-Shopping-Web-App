import React from 'react'
import SigninBg from '../assets/singinbg.png'
import Rayonbg from '../assets/rayonbg.png'
function sign_in() {
  return (
    <div>
       <div className="my-[2rem]">
        <div className="my-[1rem]">
          <img src={Rayonbg} alt="" className="w-[18rem] mx-[30rem]" />
        </div>
        <div className="lg:flex lg:flex-row  gap-14 bg-gradient-to-t from-[#f0abdc] to-[#88aae5] w-[50rem] h-[28rem] mx-[16rem] rounded-lg">
          <div className="">
            <img src={SigninBg} alt="img" className="ml-4 my-4" />
          </div>
          <form action="" className="">
            <h1 className="font-bold font-sans-serif text-gray-600 text-3xl my-2">Sign in</h1>
            <div className="">
              <h1 className="font-bold font-sans-serif text-gray-600">Email id</h1>
              <input type="email" name="email" id="email" className="px-12 py-2 rounded-lg" placeholder="Enter your email id" />
            </div>
            <div className="">
              <h1 className="font-bold font-sans-serif text-gray-600">Password</h1>
              <input type="password" name="password" id="password" className="px-12 py-2 rounded-lg" placeholder="Enter your password" />
            </div>
            <div className="my-4">
              <button class="bg-gradient-to-t from-red-600 to-pink-400 px-28 py-3 rounded-full text-center text-white">Submit</button>
            </div>
            <div className="">
              <p className="text-sm">By continuing, you agree to Rayon's</p>
              <p className="text-sm"><b className="text-blue-600">continuing of Use</b> and <b className="text-blue-600">Privacy Notice.</b></p>
            </div>
            <div className="my-2">
              <details>
                <summary><b className="font-sans-serif text-sm text-blue-600 hover:border-b hover:border-blue-600">Need help</b></summary>
                <a href="#" className=""><p className="text-blue-600 text-sm hover:border-b hover:border-blue-600 w-[7rem]">Forgot Password</p></a>
                <a href="#" className=""><p className="text-blue-600 text-sm hover:border-b hover:border-blue-600 w-[10rem]">Other issues with Sign-in</p></a>
              </details>
            </div>
            <div className="my-4 text-sm">
              <hr />
              <p className="">Buying for work?</p>
              <p className="text-blue-600 text-sm hover:border-b hover:border-blue-600 w-[11rem]">Shop on Business</p>
            </div>
          </form>
        </div>
       </div>
    </div>
  )
}

export default sign_in