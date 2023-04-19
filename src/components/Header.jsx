import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'


export default function Header() {
    const navigate = useNavigate()

 

 
    const location =useLocation()
    console.log(location.pathname);
    function pathMathRoute(route){
        if(route === location.pathname){
            return true
        }

    }  
  
    return (
    <div className="bg-white border shadow-2xl sticky top-0">
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto '>
            <div className="shadow-lg stroke-black	">
                <img src='https://github.com/kamalnah2003/Scroll---ecommerce/blob/main/src/components/logo.png?raw=true' 
                alt='logo' className="h-12 cursor-pointer" onClick={()=>navigate("/")}/>
                
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMathRoute("/") && "text-black border-b-red-500"
              }`} onClick={()=>navigate("/")}>Home</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMathRoute("/offers") && "text-black border-b-red-500"
              }`}onClick={()=>navigate("/offers")}>Offers</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMathRoute("/signin") && "text-black border-b-red-500"
              }`}onClick={()=>navigate("/signin")}>Sign in</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
