import Link from 'next/link';
import React from 'react'

const HomePage = () => {
  return (
    <>
    <div className='content'>
        <h2>Hello Visitors!
        </h2>
        <h2>Hello Visitors!
        </h2>
        <h1 className='frontend'>A Frontend Dev Here</h1>
     </div>
     <Link href="contact">
     <button className="px-10 py-4 -mt-16 text-2xl bg-slate-700 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-150 content-2">Hire Me</button>
     </Link>
     </>
  )
}

export default HomePage;