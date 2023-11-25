import React from 'react'
import logo from './Image.png'
import border from './border.png'
import review from './review.png'
import frame from './Frame.png'
import card1 from './card1.png'
import card2 from './card2.png'
import card3 from './card3.png'
import cust1 from './customer1.png'
import cust2 from './customer2.png'
import cust3 from './customer3.png'
import AppStore from './AppStore.png'
import PlayStore from './PlayStore.png'
import app from './app.png'
import dolar from './Vector.png'



const Home = () => {
    return (
        <>
            <div className='w-full flex'>
                <div className="left w-[50%] left-0 flex flex-col items-start justify-start  pl-12  font-semibold">
                    <h1 className="text-[4.5rem] text-white ">
                        Exploring </h1>
                    <h1 className="text-[4.5rem] text-[#AC6FFA] ">
                        Accommodation </h1>
                    <h1 className="text-[4.5rem] text-white">
                        Made Easy </h1>
                    <p className="text-xl text-white text-start py-5 mb-5">Effortlessly find your perfect hostel/PG: Discover,<br />Compare, and Save with Ease</p>
                    <div className="searchMain flex flex-col">
                        <div className="buttons flex gap-5">
                            <button className="bg-[#AC6FFA] px-3 py-2 rounded-sm w-[80px]">Hostel</button>
                            <button className="bg-white px-3 py-2 rounded-sm w-[80px]">PG</button>
                            <button className="bg-white px-3 py-2 rounded-sm w-[90px]">Rent out</button>
                        </div>
                        <div className="search w-[70vw] z-10 mb-16 bg-white bg-opacity-30 backdrop-blur-sm flex px-5 py-5 gap-5">
                            <div className="searchBox px-5 py-2 bg-white flex items-center gap-3">
                                <img src="https://png.pngtree.com/png-clipart/20220117/original/pngtree-modern-purple-location-icon-png-image_7129242.png" width={30} alt="" className="" />
                                <input type="text" className='outline-none w-[80%]' />
                                <img src="https://static.thenounproject.com/png/3456470-200.png" alt="" className="w-3" />
                            </div>
                            <div className="searchBox px-5 py-2 bg-white flex items-center gap-3">
                                <img src="https://www.pinclipart.com/picdir/big/387-3872576_purple-home-5-icon-free-icons-house-with.png" alt="" className="h-4" />
                                <input type="text" className='outline-none w-[80%]' />
                                <img src="https://static.thenounproject.com/png/3456470-200.png" alt="" className="w-3" />
                            </div>
                            <div className="searchBox px-5 py-2 bg-white flex items-center gap-3">
                                <img src={dolar} alt="" className="w-3" />
                                <input type="text" className='outline-none w-[80%]' />
                                <img src="https://static.thenounproject.com/png/3456470-200.png" alt="" className="w-3" />
                            </div>
                            <button className="flex  items-center pl-2 pr-5 rounded-md py-2 gap-2 bg-purple-600 hover:bg-white ease-in duration-300 delay-100">
                                <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" className='w-4' alt="" />
                                Search
                            </button>
                        </div>
                    </div>


                </div>
                <div className="right absolute w-[50%] right-0 flex items-center justify-end pr-20 pt-10">
                    <img src={logo} alt="frontImage" width={450} className='object-cover' />
                </div>
            </div>
            <div className="companys flex justify-around bg-gray-800 py-3 mt-10 items-center">
                <div className="w-[130px]"><img src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png" alt="" /></div>
                <div className="w-[140px]"><img src="https://cdn.logojoy.com/wp-content/uploads/2019/01/25132926/logo_cocacola-600x197.png" alt="" /></div>
                <div className="w-[130px]"><img src="https://companieslogo.com/img/orig/RIO_BIG.D-ecf2a77e.png?t=1686476939" alt="" /></div>
                <div className="w-[180px]"><img src="https://s.w.org/style/images/about/WordPress-logotype-wordmark-white.png" alt="" /></div>

            </div>
            <div className="homepage2 p-14 mt-10 flex">
                <div className="left2 mt-20 w-[50%] left-0 flex flex-col justify-center items-center">
                    <div className="box w-[80%] h-[24rem] aspect-[1] border-[3px] border-purple-500">
                        <img src={border} alt="box" className='translate-x-3 -translate-y-3' />
                        <img src={frame} alt="frame" className='translate-x-14 -translate-y-10 bg-cover' />
                        <img src={review} alt="review" className='z-10 translate-x-14 -translate-y-[20rem] md:-translate-y-[25rem] lg:-translate-y-[36rem]' />
                    </div>
                </div>
                <div className="right2 absolute w-[50%] right-0 flex flex-col justify-center items-start px-32">
                    <button className="px-4 py-2 bg-purple-500 font-bold hover:bg-white ease-in duration-300 delay-100">ABOUT US</button>
                    <p className="text-start text-white w-[98%] mt-10">Finding the ideal hostel or paying guest (PG) accommodation can be a daunting task, but with the help of the lines "find your perfect hostel/PG: Discover, Compare, and Save with EaseEffortlessly," the process becomes much simpler. These lines convey the message that the search for suitable lodging options is no longer a challenging endeavor. They emphasize the ability to effortlessly discover various accommodation choices, compare their features and prices, and ultimately save time and effort in the decision-making process. These lines encapsulate the convenience and efficiency of modern technology and services that make finding the perfect hostel or PG accommodation a hassle-free experience.</p>
                </div>
            </div>
            <div className="homepage3 p-14 mt-10 flex">
                <div className="left2 mt-16 w-[50%] left-0 flex flex-col justify-start items-start px-16">
                    <button className="px-4 py-2 bg-purple-500 font-bold hover:bg-white ease-in duration-300 delay-100">ABOUT US</button>
                    <p className="text-start text-white w-[98%] mt-10">Finding the ideal hostel or paying guest (PG) accommodation can be a daunting task, but with the help of the lines "find your perfect hostel/PG: Discover, Compare, and Save with EaseEffortlessly," the process becomes much simpler. These lines convey the message that the search for suitable lodging options is no longer a challenging endeavor. They emphasize the ability to effortlessly discover various accommodation choices, compare their features and prices, and ultimately save time and effort in the decision-making process. These lines encapsulate the convenience and efficiency of modern technology and services that make finding the perfect hostel or PG accommodation a hassle-free experience.</p>

                </div>
                <div className="right2 absolute w-[50%] right-0 flex flex-col justify-center">

                    <div className="box w-[80%] mt-10 h-[26.5rem] border-[3px] border-purple-500">
                        <img src={border} alt="box" className='translate-x-3 -translate-y-3' />
                        {/* <img src={frame} alt="frame" className='translate-x-14 -translate-y-10' /> */}
                        {/* <img src={review} alt="review" className='z-10 translate-x-14 -translate-y-[38rem]' /> */}
                    </div>
                </div>
            </div>
            <div className="homepage4 p-14 mt-5 flex flex-col">
                <h1 className='text-4xl font-[600] ml-6 flex justify-start text-white'><span className='text-purple-400'>Popluar</span>&nbsp;Property</h1>
                <div className="cards flex justify-center gap-10 mt-10">
                    <div className="card bg-black text-white w-[30%] border-b-2 border-purple-500 pb-2 rounded-lg">
                        <img src={card1} alt="" />
                        <div className="px-8 py-5 flex flex-col gap-2">
                            <p className='flex justify-start text-xl font-semibold'>staza</p>
                            <div className='flex justify-start text-sm font-[400] text-gray-400 gap-1 -translate-x-1'>
                                <img src="https://icon-library.com/images/location-icon-white-png/location-icon-white-png-12.jpg" alt="location" className='w-5' />
                                4059 Waterview Texico, NM 88135
                            </div>
                            <div className="line w-[80%] m-auto mt-7 mb-4 bg-gray-400 h-[1px] "></div>
                            <div className='flex items-start justify-between'>
                                <p className='text-xl text-purple-400 font-semibold'>Rs 1,600/-</p>
                                <button className='bg-gray-500 px-3 py-1 rounded-[4px] hover:bg-purple-500 ease-in duration-300 delay-50'>View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-black text-white w-[30%] border-b-2 border-purple-500 pb-2 rounded-lg">
                        <img src={card2} alt="" />
                        <div className="px-8 py-5 flex flex-col gap-2">
                            <p className='flex justify-start text-xl font-semibold'>staza</p>
                            <div className='flex justify-start text-sm font-[400] text-gray-400 gap-1 -translate-x-1'>
                                <img src="https://icon-library.com/images/location-icon-white-png/location-icon-white-png-12.jpg" alt="location" className='w-5' />
                                4059 Waterview Texico, NM 88135
                            </div>
                            <div className="line w-[80%] m-auto mt-7 mb-4 bg-gray-400 h-[1px] "></div>
                            <div className='flex items-start justify-between'>
                                <p className='text-xl text-purple-400 font-semibold'>Rs 1,600/-</p>
                                <button className='bg-gray-500 px-3 py-1 rounded-[4px] hover:bg-purple-500 ease-in duration-300 delay-50'>View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-black text-white w-[30%] border-b-2 border-purple-500 pb-2 rounded-lg">
                        <img src={card3} alt="" />
                        <div className="px-8 py-5 flex flex-col gap-2">
                            <p className='flex justify-start text-xl font-semibold'>staza</p>
                            <div className='flex justify-start text-sm font-[400] text-gray-400 gap-1 -translate-x-1'>
                                <img src="https://icon-library.com/images/location-icon-white-png/location-icon-white-png-12.jpg" alt="location" className='w-5' />
                                4059 Waterview Texico, NM 88135
                            </div>
                            <div className="line w-[80%] m-auto mt-7 mb-4 bg-gray-400 h-[1px] "></div>
                            <div className='flex items-start justify-between'>
                                <p className='text-xl text-purple-400 font-semibold'>Rs 1,600/-</p>
                                <button className='bg-gray-500 px-3 py-1 rounded-[4px] hover:bg-purple-500 ease-in duration-300 delay-50'>View More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial p-14 mt-10 flex flex-col">
                <button className='bg-purple-500 px-2 py-1 text-md font-semibold ml-6 w-[20%]   hover:bg-purple-200 ease-in duration-300 delay-50'>CUSTOMER TESTIMONIAL</button>
                <div className="customer-cards flex gap-10 justify-center mt-10">
                    <img src={cust1} alt="customer" className='w-[30%]' />
                    <img src={cust2} alt="customer" className='w-[30%]' />
                    <img src={cust3} alt="customer" className='w-[30%]' />
                </div>
            </div>
            <div className="appcontainer px-20 py-14 mt-5 bg-[#101010] flex">
                <div className="left flex flex-col gap-8 text-start w-[50%] left-0 ">
                    <h1 className="text-5xl text-white font-mono">Download <br />Blender App Now</h1>
                    <p className="text-[#A5A5A5] text-lg">and never miss out any updates</p>
                    <ul className='list-disc text-lg text-white translate-x-5'>
                        <li>Get to know about newly posted property as soon as they are posted</li>
                        <li>Manage your properties with ease and get  instant alerts about responses</li>
                    </ul>
                    <div className="flex gap-5 mt-6">
                        <img src={AppStore} alt="store" className='w-[36%]' />
                        <img src={PlayStore} alt="store" className='w-[36%]' />
                    </div>
                    {/* <h1 className="mt-24 text-4xl font-mono text-white">
                        Discover, Compare, and Save with Ease
                    </h1> */}
                </div>
                <div className="Right w-[50%] right-0 justify-center relative">
                    <img src={app} alt="app" className='w-[85%]  ml-auto' />
                    {/* <div className="mail flex gap-5 mt-32 justify-end">
                        <input type="email" placeholder='blender@gmail.com' className='px-5 py-1 bg-transparent w-[48%] outline-none text-white' />
                        <button className='text-sm font-semibold px-3 py-2 bg-purple-500'>Get Started</button>
                    </div>
                    <div className="lin w-[64.5%] h-[2px] bg-purple-500 absolute right-0 mt-3"></div> */}
                </div>
            </div>
            <div className="flex px-20 py-14 bg-[#101010]">
                <div className="left flex w-[50%] left-0 text-start">
                    <h1 className=" text-4xl font-mono text-white">
                        Discover, Compare, and Save with Ease
                    </h1>
                </div>
                <div className="righti flex w-[50%] right-0 flex-col">
                    <div className="mail flex gap-5 justify-end">
                        <input type="email" placeholder='blender@gmail.com' className='px-5 py-1 bg-transparent w-[48%] outline-none text-white' />
                        <button className='text-sm font-semibold px-3 py-2 bg-purple-500 hover:bg-purple-200 ease-in duration-300 delay-50'>Get Started</button>
                    </div>
                    <div className="lin w-[64.5%] h-[2px] bg-purple-500 ml-auto mt-3"></div>
                </div>
            </div>
            <div className="footer px-20 py-14 bg-[#101010] flex flex-col">
                <div className="lin w-[100%] h-[2px] bg-gray-500"></div>
                <ul className="flex mt-10 justify-center gap-14 text-gray-400 font-semibold">
                    <li className="cursor-pointer hover:text-purple-500 ease-in duration-300 delay-50">Explore</li>
                    <li className="cursor-pointer hover:text-purple-500 ease-in duration-300 delay-50">About</li>
                    <li className="cursor-pointer hover:text-purple-500 ease-in duration-300 delay-50">Services</li>
                    <li className="cursor-pointer hover:text-purple-500 ease-in duration-300 delay-50">Contact</li>
                </ul>
            </div>

        </>
    )
}

export default Home