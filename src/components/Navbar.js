import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full flex items-center justify-between px-10 py-5 text-white'>
            <div className="logoLinks flex items-center gap-[170px]">
                <img src="https://www.blender.org/wp-content/uploads/2020/07/blender_logo_no_socket_white.png" alt="logo" width={200} className='cursor-pointer' />
                <div className="w-full flex gap-5">
                    <div className="cursor-pointer hover:text-purple-400 ease-in duration-300 delay-50">Explore</div>
                    <div className="cursor-pointer hover:text-purple-400 ease-in duration-300 delay-50">About Us</div>
                    <div className="cursor-pointer hover:text-purple-400 ease-in duration-300 delay-50">Service</div>
                    <div className="cursor-pointer hover:text-purple-400 ease-in duration-300 delay-50">Contact</div>
                </div>
            </div>
            <div className="login flex gap-4">
                <button className="font-[500] hover:text-purple-400 ease-in duration-300 delay-50">Sign Up</button>
                <button className="font-[500] border border-white hover:text-purple-400 hover:border-purple-500 ease-in duration-300 delay-100 px-3 py-2 mr-10">Login</button>
            </div>
        </div>
    )
}

export default Navbar