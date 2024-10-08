
import image from '../../assets/sleep_image/middle_new.png'
import imageUp1 from '../../assets/middle_icon_image/up_left_image/heart_svg.svg'
import imageUp2 from '../../assets/middle_icon_image/up_left_image/line-1.png'
// import  './sleep.css'
import image_right1 from '../../assets/middle_icon_image/up_right_image/leaf_svg.svg'
import image_right2 from '../../assets/middle_icon_image/up_right_image/line-3 (1).png'
import image_left_down1 from '../../assets/middle_icon_image/left_down_image/yinyang_svg.svg'

import image_left_down2 from '../../assets/middle_icon_image/left_down_image/line-2 (1).png'

import image_right_down1 from '../../assets/middle_icon_image/right_down_image/line-4 (1).png'

import image_right_down2 from '../../assets/middle_icon_image/right_down_image/moon_svg.svg'

const SleepContainer = () => {
    return (
        <div>
            <div className="w-[100%] h-[100vh] bg-[#472b1b]">
                
                <h1 className="text-white md:text-7xl text-4xl font-GoogleRed font-extrabold text-center py-20 ">
                Sleep Naturally, <br />
                Wake up Energized
                </h1>
                {/* Middle Image */}
                <div className='flex justify-center w-60 md:w-auto mx-auto items-center  md:-mt-20'>
                <img  src={image} alt="middle_new.png" />

                </div>
                {/* left up side icon  */}
                <div>
                    <div className=' flex items-center text-white lg:-mt-[620px] -mt-[170px]
                    lg:ms-[610px] ms-[80px] '>

                        <img className='-mt-5 w-8 md:w-28' src={imageUp2} alt="heart_svg.svg" />
                        <img className='ml-3 w-8 md:w-20' src={imageUp1} alt="line-1.png" />

                    </div>
                    <h2 className='md:text-3xl text-sm font-semibold text-white lg:-mt-40 -mt-20 lg:ml-[490px] ml-5'><span className='lg:ml-12 ml-5'>Improved</span> <br />
                    Circadian Health</h2>
                </div>
                {/* right up side icon  */}
                <div>
                    <div className=' '>

                        <img className='ml-[280px] md:ml-[1150px] mt-1  w-10 md:w-28' src={image_right2} alt="heart_svg.svg" />
                        <img className='ml-60 md:ml-[1050px] -mt-8 md:-mt-16  w-8 md:w-20' src={image_right1} alt="line-1.png" />

                    </div>
                    <h2 className=' text-sm md:text-3xl  font-semibold text-white  ml-72
                    md:ml-[1220px] md:-mt-5'>
                    Natural Amino <br /> <span className='ml-8'>Acids <br /> <span className='ml-4'>and Herbs</span> </span> </h2>
                    
                </div>
                {/* left down side icon  */}
                <div>
                    <img className='ml-[120px] md:ml-[680px] md:mt-20 md:w-20 w-10 -mt-5 ' src={image_left_down1} alt="image_left_down1" />
                    <img className='ml-[72px] md:ml-[550px] md:w-20 w-10' src={image_left_down2} alt="image_left_down2" />
                   <div className='text-center md:-ml-[850px] -ml-[300px]'>
                   <h1 className='text-white text-sm md:text-3xl '>Calming and <br />
                   reduces anxiety</h1>
                   </div>
                </div>
                {/* left down side icon  */}
                <div>
                    <img className='ml-[230px] md:ml-[1000px] -mt-20 w-10 md:w-20' src={image_right_down2} alt="image_right_down1" />
                    <img className='ml-[240px] md:ml-[1080px] w-10 md:w-20' src={image_right_down1} alt="image_right_down2" />
                    <div className='text-center md:ml-[500px] md:-mt-10'>
                    <h1 className='ml-[150px] text-sm md:text-3xl text-white'>Deeper and <br />
                    restorative sleep</h1>
                    </div>
                </div>

            </div>

            
        </div>
    );
};

export default SleepContainer;