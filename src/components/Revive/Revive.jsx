import image1 from '../../assets/review_image/revive_thrive.webp'
import image2 from '../../assets/review_image/Melatonin Free.webp'
// import { FaStar } from "react-icons/fa";
import { GiStrongMan } from "react-icons/gi";
import Button2 from '../../utility/shered/Button/Button2';
import { FaCheckCircle, FaLeaf } from 'react-icons/fa';
import { BsBagPlusFill } from 'react-icons/bs';
import { IoSunny } from 'react-icons/io5';
import { IoIosHeart } from 'react-icons/io';
// import { IoMoon } from "react-icons/io5";
// import { LuHeartCrack } from "react-icons/lu";
// import { SiCelestron, SiFreelancermap, SiHearthisdotat } from "react-icons/si";
const Revive = () => {
    return (
        <div className='w-8/12 mx-auto mt-20 mb-20'>

            <div className='flex items-center justify-center gap-10 flex-col md:flex-row'>
                <div>
                    <img className='w-full' src={image1} alt="" />
                </div>

                <div>
                    <h1 className='md:text-7xl text-center text-4xl font-GoogleRed font-extrabold text-[#462b13]'>Revive & Thrive</h1>

                    {/* according number 1  */}
                    <div className=''>
                        
                    <div className='w-[350px]  md:w-[450px]  border-[1px] border-gray-200 rounded-2xl mt-10 hover:bg-[#f8ad79] hover:duration-500 '>
                        <div className="collapse ">
                        
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium flex items-center justify-center gap-5 md:p-6 p-2">
                                {/* icon */}
                                <div className=' font-extrabold text-2xl '>
                                     <h1> 
                                        <GiStrongMan></GiStrongMan>
                                    </h1> 
                                </div>
                                {/* query question */}
                                <div className='font-GoogleRed font-semibold text-lg '>
                                    <h1>Faster and better <span className='font-bold 
                                    '>Recovery</span> </h1>
                                </div>
                            </div>
                            {/* content */}
                            <div className="collapse-content text-center">
                                <p className='text-md font-medium'>Whether you are sick, tired or fatigued. Light s out will enhance your recovery through deeper & more restful sleep, allowing you to feel energized and rejuvenated.</p>
                            </div>

                            </div>
                        </div>
                    </div>
                    {/* according number 2  */}
                    <div className=''>
                        
                    <div className='w-[350px]  md:w-[450px]  border-[1px] border-gray-200 rounded-2xl mt-5 hover:bg-[#f8ad79] hover:duration-500 '>
                        <div className="collapse ">
                        
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium flex items-center justify-center gap-5 md:p-6 p-2">
                                {/* icon */}
                                <div className=' font-extrabold text-2xl '>
                                     <h1> 
                                     <BsBagPlusFill />
                                    </h1> 
                                </div>
                                {/* query question */}
                                <div className='font-GoogleRed font-semibold text-lg '>
                                    <h1>Increased Productivity<span className='font-bold 
                                    '>Recovery</span> </h1>
                                </div>
                            </div>
                            {/* content */}
                            <div className="collapse-content text-center">
                                <p className='text-md font-medium'>Obviously it s hard to stay focused and work hard when you have had a bad night of sleep. Light s Out gives you deep and restorative sleep. This helps your focus & brain, allowing for better productivity & you getting more work done!</p>
                            </div>

                            </div>
                        </div>
                    </div>
                    {/* according number 3  */}
                    <div className=''>
                        
                    <div className='w-[350px]  md:w-[450px]  border-[1px] border-gray-200 rounded-2xl mt-5 hover:bg-[#f8ad79] hover:duration-500 '>
                        <div className="collapse ">
                        
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium flex items-center justify-center gap-5 md:p-6 p-2">
                                {/* icon */}
                                <div className=' font-extrabold text-2xl '>
                                     <h1> 
                                     <IoSunny />
                                    </h1> 
                                </div>
                                {/* query question */}
                                <div className='font-GoogleRed font-semibold text-lg '>
                                    <h1>No more Groggy Mornings<span className='font-bold 
                                    '>Recovery</span> </h1>
                                </div>
                            </div>
                            {/* content */}
                            <div className="collapse-content text-center">
                                <p className='text-md font-medium'>If you have tried many sleep supplements, you are most likely familiar with that grogginess in the morning and brain fog. This happens when you take things like melatonin which overloads your natural melatonin levels leading to grogginess and sleepiness even after you wake up.</p>
                            </div>

                            </div>
                        </div>
                    </div>
                    {/* according number 4  */}
                    <div className=''>
                        
                    <div className='w-[350px]  md:w-[450px]  border-[1px] border-gray-200 rounded-2xl mt-5 hover:bg-[#f8ad79] hover:duration-500 '>
                        <div className="collapse ">
                        
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium flex items-center justify-center gap-5 md:p-6 p-2">
                                {/* icon */}
                                <div className=' font-extrabold text-2xl '>
                                     <h1> 
                                     <FaLeaf />
                                    </h1> 
                                </div>
                                {/* query question */}
                                <div className='font-GoogleRed font-semibold text-lg '>
                                    <h1>Actually Natural, Not that BS<span className='font-bold 
                                    '>Recovery</span> </h1>
                                </div>
                            </div>
                            {/* content */}
                            <div className="collapse-content text-center">
                                <p className='text-md font-medium'>We are tired of companies claiming “natural”. Light s out is actually natural not that BS other companies spew. Our ingredient label is as clean as it gets: Malic Acid and natural flavors, extracted from natural sources for flavoring. Rice hulls, a natural mixing agent as an alternative to silicon dioxide & other artificial agents. And sweetened naturally with stevia leaf. Just take a look at your other supplements ingredient labels compared to ours. Night and Day Difference.</p>
                            </div>

                            </div>
                        </div>
                    </div>
                    {/* according number 5  */}
                    <div className=''>
                        
                    <div className='w-[350px]  md:w-[450px]  border-[1px] border-gray-200 rounded-2xl mt-5 hover:bg-[#f8ad79] hover:duration-500 '>
                        <div className="collapse ">
                        
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium flex items-center justify-center gap-5 md:p-6 p-2">
                                {/* icon */}
                                <div className=' font-extrabold text-2xl '>
                                     <h1> 
                                     <IoIosHeart />

                                    </h1> 
                                </div>
                                {/* query question */}
                                <div className='font-GoogleRed font-semibold text-lg '>
                                    <h1>Improved Overall Health <span className='font-bold 
                                    '>Recovery</span> </h1>
                                </div>
                            </div>
                            {/* content */}
                            <div className="collapse-content text-center">
                                <p className='text-md font-medium'>Sleep and the circadian rhythm is our body s internal clock. Sleep allows our body to recover and to be at its best state. Lights out allows you to revive and thrive, improving your sleep and consequently improving your overall health.</p>
                            </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='flex items-center justify-center gap-10 flex-col md:flex-row-reverse mt-36'>

                <div className='w-6/12'>
                    <img className='w-full' src={image2} alt="" />
                </div>

                <div className='w-6/12'>

                    <div className=' font-GoogleRed flex items-center  my-5  gap-5'>

                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        
                        <h1>Rated <strong>5/5</strong> based on <strong>+30 Reviews</strong> </h1>

                    </div>   

                    <h1 className='md:text-7xl my-5  text-4xl font-GoogleMarcellus font-extrabold text-[#462b13]'>Melatonin Free</h1>

                    <p className='w-10/12 text-xl text-justify font-semibold my-5 font-GoogleRed'>
                    Melatonin can cause unwanted side effects, such as morning grogginess or disruption of the body s natural sleep-wake circadian cycle. Lights Out provides a melatonin-free alternative that works with your body s natural rhythms to promote restful, restorative sleep. Get better sleep without all the drawbacks!
                    </p>
                    <div>
                        <Button2></Button2>
                        <p className='ml-12 py-3 flex items-center gap-2 font-GoogleRed font-bold'>
                        <FaCheckCircle />
                        <span>Risk Guarantee30 Day Risk Free Guarantee</span>
                        </p>
                    </div>
                    
                </div>

            </div>

        </div>
    );
};

export default Revive;