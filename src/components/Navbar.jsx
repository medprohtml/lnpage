import React from 'react'
import nikelogo from '../assets/nike.svg'
import { navlink } from '../consts'
import { useState } from 'react'
function Navbar() {
  const [burger, setBurger] = useState(false)
  return (
   <header className=' absolute ps-4 pt-4 z-10 w-full '>
    <nav className=' flex justify-between  px-10 items-center  ' >
        <a className=' flex gap-2 ms-2 w-16  items-center' href="">
            <img src={nikelogo} alt="no image" /> <p className=' text-orange-400 font-mono text-sm'>Nike</p>
        </a>

        <ul className={`${!burger?'hidden':'absolute right-32 rounded-md bg-white shadow-md py-11 px-28 top-3 flex flex-col'}  text-sm font-medium gap-16   md:flex md  justify-center `}>
      {navlink.map((e)=>(
        <li className=' font-mono text-sm' key={e.id}>{e.name} </li>
      ))}
    </ul>
    <div onClick={()=>setBurger(!burger)} className=' flex md:hidden'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fa9200" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
    </div>
    </nav>

   </header>
  )
}

export default Navbar