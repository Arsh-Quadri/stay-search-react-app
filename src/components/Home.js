import React from 'react'
import logo from './Image.png'
import logo2 from './logo2.png'
import logo3 from './logo3.png'
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
            <div className='mainbody w-full flex'>
                <div className="left w-[50%] left-0 flex flex-col items-start justify-start  pl-12  font-semibold">
                    <h1 className="text-[1.5rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] text-white ">
                        Exploring </h1>
                    <h1 className="text-[1.5rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] text-[#AC6FFA] ">
                        Accommodation </h1>
                    <h1 className="text-[1.5rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] text-white">
                        Made Easy </h1>
                    <p className="md:text-lg lg:text-xl text-white text-start py-5 mb-5">Effortlessly find your perfect hostel/PG: Discover,<br />Compare, and Save with Ease</p>
                    <div className="searchMain flex flex-col">
                        <div className="buttons flex gap-5">
                            <button className="bg-[#AC6FFA] px-3 py-2 rounded-sm w-[80px]">Hostel</button>
                            <button className="bg-white px-3 py-2 rounded-sm w-[80px]">PG</button>
                            <button className="bg-white px-3 py-2 rounded-sm w-[90px]">Rent out</button>
                        </div>
                        <div className="search w-full sm:w-[70vw] z-10 mb-5 sm:mb-16 bg-white bg-opacity-30 backdrop-blur-sm flex px-5 py-5 gap-5">
                            <div className="searchBox w-full px-5 py-2 bg-white flex items-center gap-3">
                                <img src="https://png.pngtree.com/png-clipart/20220117/original/pngtree-modern-purple-location-icon-png-image_7129242.png" width={30} alt="" className="" />
                                <input type="text" className='outline-none w-[80%]' />
                                <img src="https://static.thenounproject.com/png/3456470-200.png" alt="" className="w-3" />
                            </div>
                            <div className="searchBox w-full hidden md:flex px-5 py-2 bg-white items-center gap-3">
                                <img src="https://www.pinclipart.com/picdir/big/387-3872576_purple-home-5-icon-free-icons-house-with.png" alt="" className="h-4" />
                                <input type="text" className='outline-none w-[80%]' />
                                <img src="https://static.thenounproject.com/png/3456470-200.png" alt="" className="w-3" />
                            </div>
                            <div className="searchBox w-full hidden md:flex px-5 py-2 bg-white items-center gap-3">
                                <img src={dolar} alt="" className="w-3" />
                                <input type="text" className='outline-none w-[80%]' />
                                <img src="https://static.thenounproject.com/png/3456470-200.png" alt="" className="w-3" />
                            </div>
                            <button className="flex  items-center pl-2 px-6 rounded-md py-2 gap-2 bg-purple-600 hover:bg-white ease-in duration-300 delay-100">
                                <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" className='w-4' alt="" />
                                Search
                            </button>
                        </div>
                    </div>


                </div>
                <div className="right absolute w-[45%] lg:w-[50%] right-0 flex items-center justify-end pr-10 lg:pr-20 pt-20 sm:pt-10 -z-10">
                    <img src={logo} alt="frontImage" width={450} className='object-cover' />
                </div>
            </div>
            <div className="companys h-[70px] flex justify-around bg-gray-800 px-1 py-3 mt-5 lg:mt-10 items-center">
                <div className="w-[60px] md:w-[80px] lg:w-[130px]"><img src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png" alt="" /></div>
                <div className="w-[100px] md:w-[120px] lg:w-[200px]"><img src="https://assets.rentometer.com/assets/rentometer-white-logo-4186f59d1b3fb85544a011f1793361b7229deb6c0d9d9e3f2efdab00c4be7ae0.png" alt="" /></div>
                <div className="w-[120px] md:w-[130px] lg:w-[200px]"><img src={logo2} alt="" /></div>
                <div className="w-[38px] md:w-[50px] lg:w-[80px]"><img src={logo3} alt="" /></div>

            </div>
            <div className="homepage2 mt-10 flex-col md:flex-row flex items-center justify-center">
                <div className="left2 mt-20 w-[80%] md:w-[50%] left-0 flex flex-col justify-center items-center">
                    {/* right2 w-full md:w-[50%] right-0 flex flex-col justify-center */}
                    <div className="box w-[80%] h-[49vw] md:h-[31vw] aspect-[1] border-[3px] border-purple-500 -translate-x-4 sm:translate-x-0">
                        <img src={border} alt="image1" className='translate-x-3 -translate-y-3' />
                        <img src={frame} alt="tag" className='translate-x-14 -translate-y-10 bg-cover' />
                        <img src={review} alt="review" className='z-10 translate-x-8 -translate-y-[75vw] md:-translate-y-[45vw] w-[60%]' />
                    </div>
                </div>
                <div className="right2 mt-10 md:mt-20 w-[80%] md:w-[50%] right-auto md:right-0 flex flex-col justify-center items-start px-5 lg:px-24">
                    <button className="px-4 py-2 bg-purple-500 font-bold hover:bg-white ease-in duration-300 delay-100">ABOUT US</button>
                    <p className="text-start text-white w-[100%] mt-10">Finding the ideal hostel or paying guest (PG) accommodation can be a daunting task, but with the help of the lines "find your perfect hostel/PG: Discover, Compare, and Save with EaseEffortlessly," the process becomes much simpler. These lines convey the message that the search for suitable lodging options is no longer a challenging endeavor. <span className='hidden lg:block'>They emphasize the ability to effortlessly discover various accommodation choices, compare their features and prices, and ultimately save time and effort in the decision-making process. These lines encapsulate the convenience and efficiency of modern technology and services that make finding the perfect hostel or PG accommodation a hassle-free experience.</span></p>
                </div>
            </div>
            <div className="homepage3 mt-14 md:mt-20 lg:mt-[8%] flex-col-reverse md:flex-row flex items-center justify-center">
                <div className="left2 mt-8 lg:mt-16 w-[80%] md:w-[50%] left-0 flex flex-col justify-start items-start px-8 lg:px-16">
                    <button className="px-4 py-2 bg-purple-500 font-bold hover:bg-white ease-in duration-300 delay-100">ABOUT US</button>
                    <p className="text-start text-white w-[98%] mt-10">Finding the ideal hostel or paying guest (PG) accommodation can be a daunting task, but with the help of the lines "find your perfect hostel/PG: Discover, Compare, and Save with EaseEffortlessly," the process becomes much simpler. These lines convey the message that the search for suitable lodging options is no longer a challenging endeavor. <span className='hidden lg:block'>They emphasize the ability to effortlessly discover various accommodation choices, compare their features and prices, and ultimately save time and effort in the decision-making process. These lines encapsulate the convenience and efficiency of modern technology and services that make finding the perfect hostel or PG accommodation a hassle-free experience.</span></p>

                </div>
                <div className="right2 w-[80%] md:w-[50%] right-0 flex flex-col justify-center items-center">

                    <div className="box w-[80%] mt-10 h-[48vw] sm:h-[53vw] md:h-[31vw] border-[3px] border-purple-500">
                        <img src={border} alt="box" className='translate-x-3 -translate-y-3' />
                        {/* <img src={frame} alt="frame" className='translate-x-14 -translate-y-10' /> */}
                        {/* <img src={review} alt="review" className='z-10 translate-x-14 -translate-y-[38rem]' /> */}
                    </div>
                </div>
            </div>
            <div className="homepage4 p-14 mt-0 lg:mt-5 flex flex-col">
                <h1 className='text-4xl font-[600] ml-0 sm:ml-6 flex justify-start text-white'><span className='text-purple-400'>Popluar</span>&nbsp;Property</h1>
                <div className="cards flex flex-wrap justify-center gap-10 mt-10">
                    <div className="card bg-black text-white w-[30%] min-w-[300px] border-b-2 border-purple-500 pb-2 rounded-lg">
                        <img src={card1} alt="" />
                        <div className="px-8 py-5 flex flex-col gap-2">
                            <p className='flex justify-start text-xl font-semibold'>staza</p>
                            <div className='flex justify-start text-sm font-[400] text-gray-400 gap-1 -translate-x-1'>
                                <img src="https://icon-library.com/images/location-icon-white-png/location-icon-white-png-12.jpg" alt="location" className='w-5 h-5' />
                                4059 Waterview Texico, NM 88135
                            </div>
                            <div className="line w-[80%] m-auto mt-7 mb-4 bg-gray-400 h-[1px] "></div>
                            <div className='flex items-start justify-between'>
                                <p className='text-lg lg:text-xl text-purple-400 font-semibold'>Rs 1,600/-</p>
                                <button className='bg-gray-500 px-3 py-1 rounded-[4px] hover:bg-purple-500 ease-in duration-300 delay-50'>View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-black text-white w-[30%] min-w-[300px] border-b-2 border-purple-500 pb-2 rounded-lg">
                        <img src={card2} alt="" />
                        <div className="px-8 py-5 flex flex-col gap-2">
                            <p className='flex justify-start text-xl font-semibold'>staza</p>
                            <div className='flex justify-start text-sm font-[400] text-gray-400 gap-1 -translate-x-1'>
                                <img src="https://icon-library.com/images/location-icon-white-png/location-icon-white-png-12.jpg" alt="location" className='w-5 h-5' />
                                4059 Waterview Texico, NM 88135
                            </div>
                            <div className="line w-[80%] m-auto mt-7 mb-4 bg-gray-400 h-[1px] "></div>
                            <div className='flex items-start justify-between'>
                                <p className='text-lg lg:text-xl text-purple-400 font-semibold'>Rs 1,600/-</p>
                                <button className='bg-gray-500 px-3 py-1 rounded-[4px] hover:bg-purple-500 ease-in duration-300 delay-50'>View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-black text-white w-[30%] min-w-[300px] border-b-2 border-purple-500 pb-2 rounded-lg">
                        <img src={card3} alt="" />
                        <div className="px-8 py-5 flex flex-col gap-2">
                            <p className='flex justify-start text-xl font-semibold'>staza</p>
                            <div className='flex justify-start text-sm font-[400] text-gray-400 gap-1 -translate-x-1'>
                                <img src="https://icon-library.com/images/location-icon-white-png/location-icon-white-png-12.jpg" alt="location" className='w-5 h-5' />
                                4059 Waterview Texico, NM 88135
                            </div>
                            <div className="line w-[80%] m-auto mt-7 mb-4 bg-gray-400 h-[1px] "></div>
                            <div className='flex items-start justify-between'>
                                <p className='text-lg lg:text-xl text-purple-400 font-semibold'>Rs 1,600/-</p>
                                <button className='bg-gray-500 px-3 py-1 rounded-[4px] hover:bg-purple-500 ease-in duration-300 delay-50'>View More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial p-14 mt-0 lg:mt-10 flex flex-col">
                <button className='bg-purple-500 px-2 py-1 text-md font-semibold ml-0 md:ml-6 w-[250px]   hover:bg-purple-200 ease-in duration-300 delay-50'>CUSTOMER TESTIMONIAL</button>
                <div className="customer-cards flex flex-wrap gap-10 justify-center mt-10">
                    <img src={cust1} alt="customer" className='w-[30%] min-w-[300px]' />
                    <img src={cust2} alt="customer" className='w-[30%] min-w-[300px]' />
                    <img src={cust3} alt="customer" className='w-[30%] min-w-[300px]' />
                </div>
            </div>
            <div className="appcontainer px-10 sm:px-20 py-14 mt-5 bg-[#101010] flex-col-reverse md:flex-row flex">
                <div className="left flex flex-col mt-5 gap-8 text-start w-full md:w-[50%] left-0 ">
                    <h1 className="text-3xl lg:text-5xl text-white font-mono">Download <br />Stay Search App Now</h1>
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
                <div className="Right w-full md:w-[50%] right-0 justify-center items-center relative">
                    <img src={app} alt="app" className='w-[85%] mx-auto' />
                    {/* <div className="mail flex gap-5 mt-32 justify-end">
                        <input type="email" placeholder='blender@gmail.com' className='px-5 py-1 bg-transparent w-[48%] outline-none text-white' />
                        <button className='text-sm font-semibold px-3 py-2 bg-purple-500'>Get Started</button>
                    </div>
                    <div className="lin w-[64.5%] h-[2px] bg-purple-500 absolute right-0 mt-3"></div> */}
                </div>
            </div>
            <div className="flex-col-reverse md:flex-row flex justify-between gap-10  px-5 sm:px-20 py-14 bg-[#101010]">
                <div className="left flex w-full md:w-[50%] left-0 text-start">
                    <h1 className="text-2xl lg:text-4xl font-mono text-white">
                        Discover, Compare, and Save with Ease
                    </h1>
                </div>
                <div className="righti flex w-full md:w-[40vw] lg:w-[30vw] right-0 flex-col">
                    <div className="mail flex gap-0 sm:gap-5 justify-end">
                        <input type="email" placeholder='staysearch@gmail.com' className='pr-5 py-1 bg-transparent flex-1 outline-none text-white' />
                        <button className='text-sm font-semibold px-3 py-2 w-[100px] bg-purple-500 hover:bg-purple-200 ease-in duration-300 delay-50'>Get Started</button>
                    </div>
                    <div className="lin h-[2px] bg-purple-500 mt-3"></div>
                </div>
            </div>
            <div className="footer px-20 py-5 sm:py-14 bg-[#101010] flex flex-col">
                <div className="lin w-[100%] h-[2px] bg-gray-500"></div>
                <ul className="flex mt-5 sm:mt-10 justify-center gap-5 sm:gap-14 text-gray-400 font-semibold">
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