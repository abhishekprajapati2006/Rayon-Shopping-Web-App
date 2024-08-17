import React from 'react'



function contact() {
  return (
    <div>
      <div className="my-[2rem] md:my-[4rem] ">
        <div className="text-4xl text-center font-semibold font-sans-serif text-gray-700 my-[1rem] md:text-6xl">Get in Touch</div>
        <div className="text-gray-600 font-serif text-sm mx-[1.3rem] my-[1rem] md:text-3xl md:text-center">We want to hear from you. Please feel free to email Order@Rayon.com or fill out the form below.</div>
      </div>
      <div className="my-[2rem] mx-[2rem] px-[rem] ">
        <div className="font-bold text-3xl text-center font-sans-serif text-gray-600 border-b-2 md:text-5xl ">Contact us</div>
            <div className="my-[1rem] md:my-[2rem] md:mx-[3rem] ">
              <h1 className="text-xl font-sans-serif text-gray-600 md:text-3xl">Full Name*</h1>
              <input type="email" name="email" id="email" className="px-12 py-4 rounded-lg md:pr-[16rem] md:text-2xl " placeholder="Enter your email id" />
            </div>
            <div className="my-[1rem] md:my-[2rem] md:mx-[3rem]">
              <h1 className="font-sans-serif text-xl text-gray-600 md:text-3xl">Email*</h1>
              <input type="password" name="password" id="password" className="px-12 py-4 rounded-lg md:pr-[16rem] md:text-2xl " placeholder="Enter your password" />
            </div>
            <div className="md:my-[2rem] md:mx-[3rem]">
              <div className="font-sans-serif text-xl text-gray-600 md:text-3xl">Subject*</div>
              <select name="" id="" className="text-gray-500 font-sans px-[3.5rem] py-4 rounded-lg md:pr-[16rem] md:text-2xl ">
                <option value="" className="text-sm">Select a subject</option>
                <option value="" className="text-sm">Order status</option>
                <option value="" className="text-sm">Feedback</option>
                <option value="" className="text-sm">Report an issue</option>
                <option value="" className="text-sm">Request refund or dicount</option>
                <option value="" className="text-sm">Product question</option>
                <option value="" className="text-sm">Other</option>
              </select>
            </div>
            <div className="my-[2rem] md:my-[2rem] md:mx-[3rem]">
              <h1 className="text-xl font-sans-serif text-gray-600 md:text-3xl">Message*</h1>
              <textarea name="Subject" id="Subject" placeholder="Write your message...!" className=" rounded-lg pb-[6rem] pr-[7rem] pl-[1rem] py-[1rem] md:pr-[21.5rem] md:pb-[8rem] md:text-2xl  "/>
            </div>
            <div className="my-4 mx-[0.5rem] ">
              <button class="bg-gradient-to-t from-red-600 to-pink-400 hover:bg-gradient-to-t hover:from-red-700 hover:to-pink-500 font-bold px-[8rem] py-3 rounded-xl text-center text-white md:px-[16.5rem] md:py-[1.5rem] md:text-2xl md:mx-[2.5rem] md:rounded-xl ">SEND</button>
            </div>
            <div className="text-sm text-gray-500 w-[20rem] mx-[1rem] md:text-2xl md:w-[40rem] md:mx-[3rem] ">This site is protected by reCAPTCHA Enterprise and the Google <b className="text-sm text-blue-600 hover:border-b hover:border-amber-700 hover:text-amber-700 md:text-xl">Privacy Policy</b> and <b className="text-sm text-blue-600 hover:border-b hover:border-amber-700 hover:text-amber-700 md:text-xl">Terms of Service</b> apply.</div>
            <div className="my-[2rem] mx-[-1.4rem]">
              <div className="text-3xl font-bold font-serif text-gray-800 my-[0.5rem] mx-[1rem] md:text-6xl md:text-center">Join our newsletter</div>
              <div className="text-gray-600 font-serif text-sm mx-[1.3rem] my-[0.5rem] md:text-2xl md:text-center">Stay up-to-date with new collections and deals.</div>
            </div>
          <div className=" mx-[-0.5rem] md:flex md:flex-row md:mx-[3rem] ">
            <div className="my-[0.5rem] md:my-[1rem] ">
              <input type="email" name="email" id="email" className=" rounded-lg pr-[6rem] pl-[1rem] py-[1rem] md:py-[1.5rem] md:pr-[10rem] md:pl-[1.5rem] md:text-2xl " placeholder="Your E-mail" />
            </div>
            <div className="my-[1rem] mx-[0.5] md:mx-[0.5rem]">
              <button class="bg-gradient-to-t from-red-600 to-pink-400 hover:bg-gradient-to-t hover:from-red-700 hover:to-pink-500 font-bold px-[9.2rem] py-3 rounded-lg text-center text-gray-300 md:text-2xl md:px-[2rem] md:py-[1.5rem] ">SEND</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default contact