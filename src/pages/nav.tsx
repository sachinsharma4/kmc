import React ,{useRef}from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.png'
function Nav() {
    const side:any = useRef();
    const hi=()=>{side.current.classList.contains("hidden")?side.current.classList.remove("hidden"):side.current.classList.add("hidden")}
    
  return (<>
    <div ref={side}  className="hidden h-screen fixed w-36 p-3 bg-purple-300">
    <AiOutlineClose className='absolute right-3  ' onClick={hi} />
      <ul className='my-4 text-lg ' >
   <li><Link href="./">home</Link></li>
   <li><Link href="./about">About</Link></li>
   {/*<li><Link href="./Blogs">Blogs</Link></li>*/}
   <li><Link href="./contact_us">Contact</Link></li>
   </ul>
  
   </div>
          <nav className='flex items-center px-4 bg-purple-500 justify-start '>
            <button onClick={hi} className='lg:hidden bg-inherited text-white'>&#9776;</button>
            <Image src={logo} width={50} height={50} alt="hi" className='hidden lg:block py-2' />
            <h1 className="text-3xl font-bold text-left text-white px-6 ">
              KMCEDOF
            </h1>
            <ul className='hidden  text-white bg-inherited px-6 lg:flex absolute right-0  items-center  '>
              <li className='px-6 cursor-pointer'><Link href="/">Home</Link></li>
              <li className='px-6 cursor-pointer'>  <Link href="./about">About</Link></li>
              <li className='px-6 cursor-pointer '><Link href="./contact_us">Contact us</Link></li>
  
            </ul>
          </nav></>
  )
}

export default Nav