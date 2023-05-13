import React from 'react'

const ContactForm = () => {
  return (
    
   <>
    <div className='max-w-xl m-36 '>
      <div className='ml-5'>
        <h1 className='text-4xl  text-gray-500'>LET'S HAVE A TALK</h1>
        <p className='pt-6 '>Please leave your message here. I will get back to you as soon as possible.</p>
        <p> Your message does not have to be formal.</p>
        </div>
    </div>
    <div className="max-w-xl  ml-auto mr-40 -mt-80 bg-gray-100 rounded-lg shadow-xl overflow-hidden">
    <div className="px-12 py-20">
      
      <form>
        <div className="mb-8">
         
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Name"></input>
        </div>
        <div className="mb-8">
         
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Subject"></input>
        </div>
        <div className="mb-4">
         
          <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Enter your message"></textarea>
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
  
  </>
  
 
  )
}

export default ContactForm