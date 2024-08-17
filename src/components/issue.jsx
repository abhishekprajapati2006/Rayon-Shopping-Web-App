import React from 'react'

function issue() {
  return (
    <div className="mb-[20rem]">
        <div className="lg:mx-[6rem]">
            <div className="font-bold font-sans-serif text-gray-600 text-3xl mx-[1rem] my-[2rem] lg:mx-auto">Account & Login Issues</div>
            <div className="flex flex-row mx-[1rem] lg:mx-auto">
                <div className="text-2xl font-bold text-white text-center border-2 rounded-l-lg bg-black border-black w-[5rem] lg:w-[2.5rem] h-[2.5rem]">1</div>
                <div className="border-2 border-black rounded-r-lg text-sm font-bold text-gray-600 px-[1rem] py-[0.5rem] w-[50rem] h-[2.5rem]">What can we help you with?</div>
            </div>
            <div className="border-2 border-black flex flex-col rounded-lg px-[1rem] py-[2rem] w-[22rem] mx-[1.2rem] lg:mx-auto lg:w-[52.5rem] my-[0.5rem]">
                <div className="flex flex-row">
                    <div className="text-amber-500 mt-[0.1rem]">
                        <svg viewBox="0 0 24 24" fill="currentColor" height="1.5em" width="1.5em" className="">
                            <path d="M5.536 21.886a1.004 1.004 0 001.033-.064l13-9a1 1 0 000-1.644l-13-9A.998.998 0 005 3v18a1 1 0 00.536.886zM7 4.909L17.243 12 7 19.091V4.909z" />
                        </svg>
                    </div>
                    <div className=" text-sm lg:text-lg font-bold text-gray-600">Select an issue</div>
                </div>
                <div className="my-[1rem] lg:mt-[-1.5rem]">
                    <select name="text" id="text" className=" mx-[2rem] w-[16rem] lg:mx-[14rem] px-[1.2rem] text-black rounde-lg border-2 border-black rounded-lg">
                        <option value="" className="">Please make a selection</option>
                        <option value="" className="">I forgat my password</option>
                        <option value="" className="">I can not sign into my account</option>
                        <option value="" className="">I do not have an Rayon Account but need assistance</option>
                        <option value="" className="">I can not create an account</option>
                        <option value="" className="">My account is on hold</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default issue