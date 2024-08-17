import React from 'react'
import { Link } from 'react-router-dom'
import ForgateBg from '../../assets/forgate.png'
import Rayonbg from '../../assets/rayonbg.png'

function forgate() {
  return (
    <div>
        <div className="my-[1.1rem]">
            <div className="my-[1rem]">
                <img src={Rayonbg} alt="" className="w-[12rem] mx-[35rem]" />
            </div>
            <div className="lg:flex lg:flex-row  gap-14 bg-gradient-to-t from-[#f0abdc] to-[#88aae5] w-[50rem] h-[28rem] mx-[16rem] rounded-lg">
                <div className="">
                    <img src={ForgateBg} alt="img" className="mx-[1rem] my-[2rem]" />
                </div>
                <form action="" className="w-[28rem] mx-[1rem]">
                    <div className="my-[1.5rem] w-[w-[10rem]">
                        <div className="font-bold font-sans-serif text-gray-600 text-3xl my-2">Password assistance</div>
                        <div className="font-sans-serif text-gray-600">Enter the email address or mobile phone number </div>
                        <div className="font-sans-serif text-gray-600"> associated with your Rayon account.</div>
                    </div>
                    <div className="">
                        <div className="font-bold font-sans-serif text-gray-600">Email or mobile phone number</div>
                            <input type="email, phonenumber" className="w-[22rem] px-4 py-2 rounded-lg" placeholder="Enter your Email Id or mobile phone number"/>
                        </div>
                    <div className="my-4">
                        <button class="bg-gradient-to-t from-red-600 to-pink-400 px-36 py-3 rounded-full text-center text-white">Continue</button>
                    </div>
                    <div className="">
                        <hr />
                        <div className="font-sans-serif text-gray-600 text-lg my-2">Has your email address or mobile phone number changed?</div>
                        <div className="text-sm">If you no longer use the e-mail address associated with your Rayon account, you may contact <b className=" text-sm text-blue-600 border-b border-blue-600 hover:border-amber-700 hover:text-amber-700">Customer Service</b> for help restoring access to your account.</div>
                        <Link to="/sign-in"><div className="text-sm text-blue-600 hover:border-b hover:border-amber-700 hover:text-amber-700 w-[2.6rem] ml-[20rem] my-[0.1rem]">SignIn</div></Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default forgate