import React, { useRef } from 'react'

import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

const UseRef = () => {
  const link_nav = useRef(null)
  const link_home = useRef(null)
  const link_about = useRef(null)
  const link_contact = useRef(null)


  const goTo = (ref) => {
    // window.smoothscroll.polyfill()
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      {/* <nav ref={link_nav} id='nav' className='bg-red h-[8vh] flex w-full items-center justify-center'>
        <ul className='flex  text-lg font-medium h-full justify-center items-center'>
          <li className='md:hover:bg-blue h-full flex items-center px-6 cursor-pointer' onClick={() => goTo(link_home.current)}>Home</li>

          <li className='md:hover:bg-blue h-full flex items-center px-6 cursor-pointer' onClick={() => goTo(link_about.current)}>About</li>

          <li onClick={() => goTo(link_contact.current)} className='md:hover:bg-blue h-full flex items-center px-6 cursor-pointer'>Contact</li>
        </ul>
      </nav> */}

      

      <div className='max-w-7xl mx-auto'>
        <button onClick={() => goTo(link_nav.current)} className='fixed bottom-4 right-4 bg-red rounded-full h-16 w-16'>Go Top</button>

        <section ref={link_home} id='home' className='bg-gray-400 h-screen pt-4 px-4 flex flex-col gap-6'>
          <h1 className='text-4xl text-center'>Home</h1>
          <div className='bg-gray-500 rounded-md p-4 shadow-sm'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste incidunt non quas molestiae doloremque quod ipsum consequatur ut? Quisquam ipsa iure dolor consequatur voluptatibus hic numquam cupiditate! Inventore culpa ea cupiditate animi velit sapiente perspiciatis aspernatur quas in
          </div>
          <p className='rounded-xl shadow-inner'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi qui numquam sed. Quaerat explicabo aliquid eum ducimus consequatur! Iure, dolorum.</p>

          <div className=''>

          </div>
        </section>

        <section ref={link_about} id='about' className='bg-green-500 h-screen pt-4'>
          <h1 className='text-4xl text-center'>About</h1>
        </section>

        <section ref={link_contact} id='contact'className='bg-yellow h-screen pt-4'>
          <h1 className='text-4xl text-center'>Contact</h1>
        </section>
      </div>

    </div>
  )
}

export default UseRef