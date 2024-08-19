
import image from '../../assets/sleep_image/middle_new.png'
import imageUp1 from '../../assets/middle_icon_image/up_left_image/heart_svg.svg'
import imageUp2 from '../../assets/middle_icon_image/up_left_image/line-1.png'
const SleepContainer = () => {
    return (
        <div>
            <div className="w-[100%] h-[100vh] bg-[#472b1b]">
                
                <h1 className="text-white text-7xl font-GoogleRed font-extrabold text-center py-20 ">
                Sleep Naturally, <br />
                Wake up Energized
                </h1>

                <div className='flex justify-center items-center -mt-20 '>
                <img  src={image} alt="" />

                </div>
                <div className=' flex items-center text-white -mt-[620px]
                ms-[430px] '>
                    <h2 className='-mt-28  text-2xl text-center'>Improved <br />
                    Circadian Health</h2>
                    <img src={imageUp2} alt="" />
                    <img src={imageUp1} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default SleepContainer;