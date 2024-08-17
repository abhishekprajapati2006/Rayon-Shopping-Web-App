import React from 'react'
import Rayonbg from '../assets/rayonbg.png'
import Foot3 from '../assets/foot3.png'
import Playstore from '../assets/play.png'
import Appstore from '../assets/apple.png'
function footer() {
  return (
    <div className="bg-gradient-to-t from-blue-300 to-blue-400 pb-4">
        <div className="sm:flex sm:flex-row lg:flex lg:flex-row sm:px-8 lg:py-6 gap-12 px-6 md:px-12 py-2 w-full">
            <div className="my-12 lg:my-2">
                <div className="mt-2">
                    <img src={Rayonbg} alt="" className="w-[12rem]" />
                </div>
                <div className="sm:bg-red-3 00 md:bg-green-40 0 lg:bg-yellow- 500 lg:w-[40rem] sm:w-[25rem] md:w-[35rem]">
                    <h1 className="font-bold text-gray-700 text-lg my-3 md:text-2xl">Contact</h1>
                    <p className="text-gray-600 text-sm md:text-lg my-1"><b>Address: </b>562 Wellington Road, Street 32, San Francisco</p>
                    <p className="text-gray-600 text-sm md:text-lg my-1"><b>Phone: </b>+01 2222 365/(+91)</p>
                    <p className="text-gray-600 text-sm md:text-lg my-1"><b>Hours: </b>10:00 -18:00, Mon -Sat</p>
                    <div className="my-6">
                        <h1 className="font-bold text-gray-700 text-lg md:text-3xl">Follow us</h1>
                        <div className="flex flex-row ml-[-0.5rem] text-cyan-900 my-5 text-xl gap-1.5 md:gap-2 md:my-4">
                            <a href="https://www.facebook.com/profile.php?id=100066411862124">
                                <div className="md:text-3xl">
                                    <svg viewBox="0 0 24 24" fill="currentColor" height="1.5em" width="1.5em">
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                                    </svg>
                                </div>
                            </a>
                            <div className="md:text-3xl">
                                <svg viewBox="0 0 1024 1024" fill="currentColor" height="1.5em" width="1.5em">
                                    <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
                                </svg>
                            </div>
                            <a href="https://www.instagram.com/abhishekprajapatt/">
                                <div className="md:text-3xl">
                                    <svg viewBox="0 0 1024 1024" fill="currentColor" height="1.5em" width="1.5em">
                                        <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                                    </svg>
                                </div>
                            </a>
                            <div className="md:text-3xl">
                                <svg viewBox="0 0 448 512" fill="currentColor" height="1.5em" width="1.5em">
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                </svg>
                            </div>
                            <div className="md:text-3xl">
                                <svg viewBox="0 0 1024 1024" fill="currentColor" height="1.5em" width="1.5em">
                                    <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:flex sm:flex-col lg:flex lg:flex-row py-4 gap-12 mt-[-rem] lg:mt-[15rem]">
                <div className="sm:flex sm:flex-col lg:flex lg:flex-row flex flex-row gap-[8rem] md:gap-[12rem]">
                    <div className="sm:mt-[6rem] sm:w-[10rem] md:ml-[-4rem] lg:mt-[-14.4rem] lg:mx-[-15rem] xl:ml-[-12rem] lg:mr-[-12rem] xl:mr-[-8rem] lg:w-[12rem]">
                        <h1 className="font-bold text-gray-700 text-lg mb-4 md:text-2xl">About</h1>
                        <p className="text-gray-600 md:text-lg">About us</p>
                        <p className="text-gray-600 md:text-lg">Delivery information</p>
                        <p className="text-gray-600 md:text-lg">Privacy policy</p>
                        <p className="text-gray-600 md:text-lg">Terms&Conditions</p>
                        <p className="text-gray-600 md:text-lg">Contact us</p>
                    </div>
                    <div className="ml-[-4rem] sm:ml-[-28rem] md:mt-[-3rem] md:ml-[-38rem] lg:ml-[-1rem] lg:w-[9rem] lg:mt-[-14.4rem]">
                        <h1 className="font-bold text-gray-700 text-lg md:text-2xl">My account</h1>
                        <p className="text-gray-600 md:text-lg">Sign in</p>
                        <p className="text-gray-600 md:text-lg">View Cart</p>
                        <p className="text-gray-600 md:text-lg">My wishlist</p>
                        <p className="text-gray-600 md:text-lg">Track my order</p>
                        <p className="text-gray-600 md:text-lg">Help</p>
                    </div>
                </div>
                <div className="my-4 sm:mt-[-12rem] sm:ml-[-14rem] md:mt-[-15rem] md:ml-[-18rem] lg:mx-[-2rem] xl:ml-[1rem]">
                    <h1 className="font-bold text-gray-700 text-lg my-2 md:text-2xl">Install app</h1>
                    <p className="text-gray-600 md:text-lg">From appstore or Google Play</p>
                    <div className="flex flex-row ml-[-0.5rem] my-2 sm:px-4">
                        <img src={Appstore} alt="img" className="w-1/2 h-1/2 sm:w-1/2 sm:h-1/2 md:w-1/2 md:h-1/2"/>
                        <img src={Playstore} alt="img" className="w-1/2 h-1/2 sm:w-1/2 sm:h-1/2 md:w-1/2 md:h-1/2"/>
                    </div>
                    <p className="text-gray-600 md:text-lg">Secured Payment Gateways</p>
                    <div className="ml-[-1rem] my-2">
                        <img src={Foot3} alt="img" className="md:w-1/2 lg:w-[16rem]"/>
                    </div>
                </div>
            </div>
        </div>
        <p className="text-gray-600 text-sm ml-[4rem] sm:ml-[14rem] md:ml-[18rem] lg:mx-[24rem] xl:ml-[32rem]">@ 2024, Html css ecommerce template</p>
    </div>
  )
}

export default footer