import banner1 from '../../../assets/Banner_Image/banner .png'
import Button from '../../../utility/shered/Button/Button';
// import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className=" w-[100%]">
                <div className=' flex justify-between items-center flex-col lg:flex-row md:flex-row'>

                <div className='w-[100%] md:w-[50%] lg:w-[50%]'>
                    <div className='ps-52 font-GoogleRed'>
                    <h1 className='text-6xl font-extrabold'>The Deepest <br /> Sleep of your <br /> Life</h1>

                    <p className='text-xl my-5 font-semibold'>
                    A <strong>natural</strong> and <span className='text-[#f8ad79] '>melatonin free</span> <strong>science based sleep mix.</strong> <br />  Formulated with herbs & amino acids to help you <strong>sleep deeper, <br /> wake up energized</strong> and <strong>feel better, all day long.</strong>
                    </p>
                    <Button></Button>

                <div className='my-2 flex items-center gap-2 '>
                    <div className="avatar-group -space-x-9   rtl:space-x-reverse">
                        <div className="avatar">
                            <div className="w-10">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-10">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-10">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-10">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                    
                    <div className=' font-GoogleRed flex items-center  gap-5'>

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
                     
                     <h1>Rated <strong>5/5</strong> based on <strong>+50 Reviews</strong> </h1>

                    </div>

                </div>

                    </div>
                </div>

                <div className='w-[100%] md:w-[50%] lg:w-[50%]'>
                    <img
                     src={banner1} 
                     alt="Banner Image Coming Soon"
                     className='w-[100%] md:w-[100%] lg:w-[100%] lg:h-[780px] object-cover'
                     />
                </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
