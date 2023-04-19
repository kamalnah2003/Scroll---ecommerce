import React from 'react'

export default function Header() {
  return (
    <div className="bg-black border-b-2">
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto '>
            <div className="bg-slate-800">
                <img src='https://github.com/kamalnah2003/Scroll---ecommerce/blob/main/src/components/logo.png?raw=true' 
                alt='logo' className="h-12 cursor-pointer"/>
                
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Sign in</li>
                    <li>d</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
