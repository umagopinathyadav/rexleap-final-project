
import { useContext, useState } from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import sport1 from '../assets/sport1.png'
import sport2 from '../assets/sport2.png'
import { ThemeContext } from '../App'
const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);


    return <div className='dark:bg-slate-700 pb-10 pt-10'>

        <div class='font-semibold text-2xl px-4 md:px-20  mx-4 md:mx-20  dark:text-white'>
            <div class='flex justify-between'>
                Sports
                <button className='' onClick={toggleTheme}>
                    <i className={`bi ${theme === 'dark' ? "bi-moon-stars-fill " : " bi-sun-fill"}`} ></i>
                </button>
            </div>
        </div>
        <div class='px-4 md:px-20 mt-5 flex flex-wrap justify-evenly dark:text-white'>
            <div class="card shadow-xl dark:shadow-slate-900 shadow-slate-300  md:w-64 px-5 p-6 mb-4 md:mb-0">
                <div class="card-body  ">
                    <img src={img1} alt="" />
                </div>
                <div class="card-footer flex mt-4  ">
                    <div className='text-lg'>Sacramento River Cats</div>
                </div>
                <div className='flex space-x-9 mt-5 dark:bg-black'>
                    <div className='mx-2 pb-2'>
                        <div className='text-gray-500'>total Events</div>
                        <div className='font-medium'>48 Events</div>
                    </div>
                    <div className=''>
                        <div className='text-gray-500'>Sport</div>
                        <div className='font-medium'>Baseball</div>
                    </div>

                </div>
            </div>
            <div class="card shadow-xl dark:shadow-slate-900 shadow-slate-300  md:w-64 px-5 p-6 mb-4 md:mb-0">
                <div class="card-body ">
                    <img src={img2} alt="" />
                </div>
                <div class="card-footer flex mt-4 ">
                    <div className='text-lg'>Las Vegas Aviators</div>
                </div>
                <div className='flex space-x-9 mt-4 dark:bg-black'>
                    <div className='mx-2 pb-2'>
                        <div className='text-gray-500'>total Events</div>
                        <div className='font-medium'>28 Events</div>
                    </div>
                    <div className=''>
                        <div className='text-gray-500'>Sport</div>
                        <div className='font-medium'>Baseball</div>
                    </div>

                </div>
            </div>
            <div class="card shadow-xl dark:shadow-slate-900 shadow-slate-300  md:w-64 px-5 p-6 mb-4 md:mb-0">
                <div class="card-body ">
                    <img src={img3} alt="" />
                </div>
                <div class="card-footer flex mt-4 ">
                    <div className='text-lg'>Snew jersey devils
                    </div>
                </div>
                <div className='flex space-x-9 mt-4 dark:bg-black'>
                    <div className='mx-2 pb-2'>
                        <div className='text-gray-500'>total Events</div>
                        <div className='font-medium'>15 Events
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-gray-500'>Sport</div>
                        <div className='font-medium'>ice hockey
                        </div>
                    </div>

                </div>
            </div>
            <div class="card dark:shadow-slate-900 shadow-xl w-64 shadow-slate-300  md:w-64 px-5 p-6 mb-4 md:mb-0 sm:w-64 relative ">
                <div class="absolute top-6 left-40 md:mx-4">
                    <button class="bg-black text-white px-3 py-2">Add</button>
                </div>
                <div class="card-body  ">
                    <img src={img4} alt="" />
                    <div className='border border-green-700 '>
                        <div class="card-footer w-full mt-4 ">
                            <div className='text-lg mx-2'>Advertisement title</div>
                            <div className=' text-gray-500 mx-2 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic distinctio asperiores molestiae, recusandae quis facilis eveniet quia explicabo nam atque voluptatibus commodi officiis provident iure quasi vero quos accusantium praesentium!
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        <div class="flex justify-center mt-14">
            <button class="bg-blue-400 text-white px-4 md:px-5 py-2 md:py-3 rounded-lg">See More</button>
        </div>

        {/* card 2 */}
        <div class="md:text-center mt-12 mx-4 md:mx-36 pb-12 bg-slate-100 dark:bg-slate-800  dark:text-white">
            <p class="font-bold text-5xl text-center  md:mx-5 md:text-center pt-3 mx-5">Collection Spotlight</p>

            <div class="mt-2">
                <p class="text-center md:text-center ml-4">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable</p>
                <p class="text-center md:text-center  md:mx-5 px-4 md:px-5">experience. Grab yours today!</p>
            </div>



            <div class="lg:flex lg:justify-center mt-12">
                <div class="w-64 mx-20 lg:w-10/12 xl:w-8/12  md:justify-center">
                    <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-col-3  gap-8 mx-4  pb-4">
                        <div class="col-span-1 p-4 shadow-xl dark:shadow-slate-900 md:w-64 lg:w-full shadow-slate-300">
                            <div class="">
                                <img src={sport1} alt="" class="" />
                                <div class="border-2 border-dashed border-slate-300 mt-3"></div>
                            </div>
                            <div class="mt-4">
                                <div class="text-xl font-semibold">Las Vegas Aviators</div>
                                <div class="mx-2">
                                    <div class="text-xl mt-4">OCT 50|Sun|4:30 PM</div>
                                    <div class="text-slate-500 text-lg mt-3">Las Vegas Ballpark, Las Vegas, Nevada</div>
                                </div>
                                <div class="mt-6">
                                    <button class="bg-black text-white px-5 py-2">Take Flight Collection</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-1 p-4 shadow-xl  dark:shadow-slate-900 md:w-64 lg:w-full shadow-slate-300">
                            <div class="">
                                <img src={sport2} alt="" class="" />
                                <div class="border-2 border-dashed border-slate-300 mt-3"></div>
                            </div>
                            <div class="mt-4">
                                <div class="text-xl font-semibold">Sacramento River Cats</div>
                                <div class="mx-2">
                                    <div class="text-xl mt-4">OCT 50|Sun|4:30 PM</div>
                                    <div class="text-slate-500 text-lg mt-3">Las Vegas Ballpark, Las Vegas, Nevada</div>
                                </div>
                                <div class="mt-6">
                                    <button class="bg-black text-white px-5 py-2">Orange Collection</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-1 p-4 shadow-xl dark:shadow-slate-900 md:w-64 lg:w-full shadow-slate-300">
                            <div class="">
                                <img src={sport1} alt="" class="" />
                                <div class="border-2 border-dashed border-slate-300 mt-3"></div>
                            </div>
                            <div class="mt-4">
                                <div class="text-xl font-semibold">Las Vegas Aviators</div>
                                <div class="mx-2">
                                    <div class="text-xl mt-4">OCT 50|Sun|4:30 PM</div>
                                    <div class="text-slate-500 text-lg mt-3">Las Vegas Ballpark, Las Vegas, Nevada</div>
                                </div>
                                <div class="mt-6">
                                    <button class="bg-black text-white px-5 py-2">Take Flight Collection</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div >
    </div>

}

export default Home



































