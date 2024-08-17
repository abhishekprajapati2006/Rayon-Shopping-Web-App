import React from 'react'
import Main from '../assets/blog/main.png'
import Blog1 from '../assets/blog/blog1.png'
import Blog2 from '../assets/blog/blog2.png'
import Blog3 from '../assets/blog/blog3.png'
import Blog4 from '../assets/blog/blog4.png'
import Blog5 from '../assets/blog/blog5.png'
import Blog6 from '../assets/blog/blog6.png'
import Blog7 from '../assets/blog/blog7.png'
import Blog8 from '../assets/blog/blog8.png'
function blog1() {
  return (
    <div>

      <div className="mb-1rem">
        <img src={Main} alt="" className="h-[16rem] w-full md:h-[20rem]"/>
      </div>
      <div className="my-[0.5rem] ">
        <div  className="text-4xl font-semibold text-gray-600 font-serif text-center my-[0.2rem] md:my-[0.5rem] md:text-5xl ">Rayon Blogs</div>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
      </div>
      <div className="md:flex md:flex-row bg-gray-300 rounded-sm my-[2rem] lg:w-[60rem] lg:my-[6rem] mx-[2rem] border-4 md:my-[1rem] ">
        <div className="lg:w-[25rem] border-2">
          <img src={Blog1} alt="" className="h-[20rem] w-[20rem] md:w-[60rem] md:h-[23rem] lg:h-[30rem]" />
        </div>
        <div className="font-serif lg:w-[40rem] border-2 py-[1rem] lg:py-[2rem] px-[1rem] lg:px-[4rem]">
          <div className="text-gray-600 text-xl lg:text-4xl font-bold font-serif md:text-3xl">Rayon Revolution: The Fabric That Combines Comfort and Style.</div>
          <div className="my-[2rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis.
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis. */}
          </div>
          <div className="flex flex-row text-gray-600 lg:my-[4rem]">
            Subscribe
            <svg viewBox="0 0 24 24" fill="currentColor" height="1.4em" width="1.5em">
              <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row bg-gradient-to-r from-peach-100 to-beige-100 rounded-sm my-[2rem] lg:w-[60rem] lg:my-[6rem] mx-[2rem] border-4 ">
        <div className="lg:w-[25rem] border-2">
          <img src={Blog2} alt="" className="h-[20rem] w-[20rem] md:w-[60rem] md:h-[23rem] lg:h-[30rem]" />
        </div>
        <div className="font-serif lg:w-[40rem] border-2 py-[1rem] lg:py-[2rem] px-[1rem] lg:px-[4rem]">
          <div className="text-gray-600 text-xl font-bold font-serif md:text-3xl">Embrace Elegance: Discover the Beauty of Rayon Clothing.</div>
          <div className="my-[2rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis.
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis. */}
          </div>
          <div className="flex flex-row text-gray-600 lg:my-[4rem]">
            Subscribe
            <svg viewBox="0 0 24 24" fill="currentColor" height="1.4em" width="1.5em">
              <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row bg-[#aeaeaee8] rounded-sm my-[2rem] lg:w-[60rem] lg:my-[6rem] mx-[2rem] border-4 ">
        <div className="lg:w-[25rem] border-2">
          <img src={Blog3} alt="" className="h-[20rem] w-[20rem] md:w-[60rem] md:h-[23rem] lg:h-[30rem]" />
        </div>
        <div className="font-serif lg:w-[40rem] border-2 py-[1rem] lg:py-[2rem] px-[1rem] lg:px-[4rem]">
          <div className="text-gray-600 text-xl font-bold font-serif md:text-3xl">From Day to Night: Versatile Rayon Outfits for Every Occasion.</div>
          <div className="my-[2rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis.
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis. */}
          </div>
          <div className="flex flex-row text-gray-600 lg:my-[4rem]">
            Subscribe
            <svg viewBox="0 0 24 24" fill="currentColor" height="1.4em" width="1.5em">
              <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row bg-[#7a5d1e8a] rounded-sm my-[2rem] lg:w-[60rem] lg:my-[6rem] mx-[2rem] border-4 ">
        <div className="lg:w-[25rem] border-2">
          <img src={Blog4} alt="" className="h-[20rem] w-[20rem] md:w-[60rem] md:h-[23rem] lg:h-[30rem]" />
        </div>
        <div className="font-serif lg:w-[40rem] border-2 py-[1rem] lg:py-[2rem] px-[1rem] lg:px-[4rem]">
          <div className="text-gray-600 text-xl md:text-4xl font-bold font-serif md:text-3xl">Sustainable Fashion: The Eco-Friendly Benefits of Rayon.</div>
          <div className="my-[2rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis.
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis. */}
          </div>
          <div className="flex flex-row text-gray-600 lg:my-[4rem]">
            Subscribe
            <svg viewBox="0 0 24 24" fill="currentColor" height="1.4em" width="1.5em">
              <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row bg-gray-300 rounded-sm my-[2rem] lg:w-[60rem] lg:my-[6rem] mx-[2rem] border-4 ">
        <div className="lg:w-[25rem] border-2">
          <img src={Blog5} alt="" className="h-[20rem] w-[20rem] md:w-[60rem] md:h-[26rem]" />
        </div>
        <div className="font-serif lg:w-[40rem] border-2 py-[1rem] lg:py-[2rem] px-[1rem] lg:px-[4rem]">
          <div className="text-gray-600 text-xl md:text-4xl font-bold font-serif md:text-3xl">Soft, Breathable, and Beautiful: The Magic of Rayon Fabric.</div>
          <div className="my-[2rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis.
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis. */}
          </div>
          <div className="flex flex-row text-gray-600 lg:my-[4rem]">
            Subscribe
            <svg viewBox="0 0 24 24" fill="currentColor" height="1.4em" width="1.5em">
              <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row bg-gray-100 rounded-sm my-[2rem] lg:w-[60rem] lg:my-[6rem] mx-[2rem] border-4 ">
        <div className="lg:w-[25rem] border-2">
          <img src={Blog6} alt="" className="h-[20rem] w-[20rem] md:w-[60rem] md:h-[26rem]" />
        </div>
        <div className="font-serif lg:w-[40rem] border-2 py-[1rem] lg:py-[2rem] px-[1rem] lg:px-[4rem]">
          <div className="text-gray-600 text-xl font-bold font-serif md:text-3xl">Upgrade Your Wardrobe with These Stunning Rayon Pieces.</div>
          <div className="my-[2rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis.
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis. */}
          </div>
          <div className="flex flex-row text-gray-600 lg:my-[4rem]">
            Subscribe
            <svg viewBox="0 0 24 24" fill="currentColor" height="1.4em" width="1.5em">
              <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row bg-gray-100 rounded-sm my-[2rem] lg:w-[60rem] lg:my-[6rem] mx-[2rem] border-4 ">
        <div className="lg:w-[25rem] border-2">
          <img src={Blog7} alt="" className="h-[20rem] w-[20rem] md:w-[60rem] md:h-[26rem]" />
        </div>
        <div className="font-serif lg:w-[40rem] border-2 py-[1rem] lg:py-[2rem] px-[1rem] lg:px-[4rem]">
          <div className="text-gray-600 text-xl font-bold font-serif md:text-3xl">Why Rayon Should Be Your Go-To Fabric This Season.</div>
          <div className="my-[2rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis.
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis. */}
          </div>
          <div className="flex flex-row text-gray-600 lg:my-[4rem]">
            Subscribe
            <svg viewBox="0 0 24 24" fill="currentColor" height="1.4em" width="1.5em">
              <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row bg-beige-100 rounded-sm my-[2rem] lg:w-[60rem] lg:my-[6rem] mx-[2rem] border-4 ">
        <div className="lg:w-[25rem] border-2">
          <img src={Blog8} alt="" className="h-[20rem] w-[20rem] md:w-[60rem] md:h-[26rem]" />
        </div>
        <div className="font-serif lg:w-[40rem] border-2 py-[1rem] lg:py-[2rem] px-[1rem] lg:px-[4rem]">
          <div className="text-gray-600 text-xl font-bold font-serif md:text-3xl">Fashion Forward: How to Style Rayon for a Chic Look.</div>
          <div className="my-[2rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis.
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis. */}
          </div>
          <div className="flex flex-row text-gray-600 lg:my-[4rem]">
            Subscribe
            <svg viewBox="0 0 24 24" fill="currentColor" height="1.4em" width="1.5em">
              <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row bg-gray-300 rounded-sm mt-[2rem] lg:w-[60rem] lg:my-[6rem] mx-[2rem] border-4 ">
        <div className="lg:w-[25rem] border-2">
          <img src={Blog1} alt="" className="h-[20rem] w-[20rem] md:w-[60rem] md:h-[26rem]" />
        </div>
        <div className="font-serif lg:w-[40rem] border-2 py-[1rem] lg:py-[2rem] px-[1rem] lg:px-[4rem]">
          <div className="text-gray-600 text-xl font-bold font-serif md:text-3xl">Stay Cool and Stylish: Why Rayon is Your Summer Wardrobe Essential.</div>
          <div className="my-[2rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis.
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis. */}
          </div>
          <div className="flex flex-row text-gray-600 lg:my-[4rem]">
            Subscribe
            <svg viewBox="0 0 24 24" fill="currentColor" height="1.4em" width="1.5em">
              <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row bg-gradient-to-r from-peach-100 to-beige-100 rounded-sm my-[2rem] lg:w-[60rem] lg:my-[6rem] mx-[2rem] border-4 ">
        <div className="lg:w-[25rem] border-2">
          <img src={Blog2} alt="" className="h-[20rem] w-[20rem] md:w-[60rem] md:h-[26rem]" />
        </div>
        <div className="font-serif lg:w-[40rem] border-2 py-[1rem] lg:py-[2rem] px-[1rem] lg:px-[4rem]">
          <div className="text-gray-600 text-xl font-bold font-serif md:text-3xl">Embrace Elegance: Discover the Beauty of Rayon Clothing.</div>
          <div className="my-[2rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis.
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum commodi sit pariatur eveniet voluptate consectetur, earum velit! Quae, dolores veritatis. */}
          </div>
          <div className="flex flex-row text-gray-600 lg:my-[4rem]">
            Subscribe
            <svg viewBox="0 0 24 24" fill="currentColor" height="1.4em" width="1.5em">
              <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
            </svg>
          </div>
        </div>
      </div>
        <div className="my-[2rem] mx-[0.5rem] ">
          <div className="text-3xl font-bold font-serif text-gray-800 my-[0.5rem] mx-[1rem] md:text-6xl md:text-center">Join our newsletter</div>
          <div className="text-gray-600 font-serif text-sm mx-[1.3rem] my-[0.5rem] md:text-2xl md:text-center">Stay up-to-date with new collections and deals.</div>
        </div>
        <div className=" mx-[1.5rem] md:flex md:flex-row ">
          <div className="my-[0.5rem] md:my-[1rem] ">
            <input type="email" name="email" id="email" className=" rounded-lg pr-[6rem] pl-[1rem] py-[1rem] md:py-[1.5rem] md:pr-[16rem] md:pl-[1.5rem] md:text-2xl " placeholder="Your E-mail" />
          </div>
          <div className="my-[1rem] mx-[0.5] md:mx-[1rem]">
            <button class="bg-gradient-to-t from-red-600 to-pink-400 hover:bg-gradient-to-t hover:from-red-700 hover:to-pink-500 font-bold px-[9.2rem] py-3 rounded-lg text-center text-gray-300 md:text-2xl md:px-[2rem] md:py-[1.5rem] ">SEND</button>
          </div>
        </div>
    </div>
  )
}

export default blog1