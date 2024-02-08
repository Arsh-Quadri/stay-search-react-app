import React, { useState } from 'react'
import logomain from './logomain.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex-col">
            <div className='w-full flex items-center justify-between px-10 py-5 text-white'>
                <div className="logoLinks flex items-center gap-4 lg:gap-[15vw] h-[60px]">
                    <img src={logomain} alt="logo" width={200} className='cursor-pointer w-[180px] lg:w-[250px]' />
                    <div className="w-full hidden md:flex gap-5 text lg:text-lg">
                        <div className="cursor-pointer hover:text-purple-400 ease-in duration-300 delay-50">Explore</div>
                        <div className="cursor-pointer hover:text-purple-400 ease-in duration-300 delay-50">About Us</div>
                        <div className="cursor-pointer hover:text-purple-400 ease-in duration-300 delay-50">Service</div>
                        <div className="cursor-pointer hover:text-purple-400 ease-in duration-300 delay-50">Contact</div>
                    </div>
                </div>
                <div className="login hidden md:flex gap-4">
                    <button className="font-[500] hover:text-purple-400 ease-in duration-300 delay-50">Sign Up</button>
                    <button className="font-[500] border border-white hover:text-purple-400 hover:border-purple-500 ease-in duration-300 delay-100 px-3 py-2 mr-10">Login</button>
                </div>
                <div className="hamberger block md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png" width={30} className='cursor-pointer' alt="hamburger" /> : <img src='https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close' width={20} alt='cross' className='cursor-pointer' />}
                </div>
            </div>
            {isOpen && (<div className="sider w-full h-screen flex flex-col items-center justify-start mt-10 text-lg gap-5 z-10 text-white">
                <div className="">Explore</div>
                <div className="">About Us</div>
                <div className="">Service</div>
                <div className="">Contact</div>
                <div className="flex mt-10 gap-5 justify-center items-center">
                    <div className="">Login</div>
                    <div className="font-[500] border border-purple-500 text-purple-500 px-3 py-2">Sign In</div>
                </div>
            </div>)}
        </div>
    )
}

export default Navbar