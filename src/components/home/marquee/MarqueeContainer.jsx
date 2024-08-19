
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";
import { GiStrongMan } from "react-icons/gi";
import { IoMoon } from "react-icons/io5";
import { LuHeartCrack } from "react-icons/lu";
import { SiCelestron, SiFreelancermap, SiHearthisdotat } from "react-icons/si";
const MarqueeContainer = () => {
    return (
        <div className=" bg-[#f8ad79]">
            <Marquee
             direction="right" speed={150}
             pauseOnHover={true}

            >
                <div className="flex items-center justify-center h-10 p-8 text-2xl font-GoogleRed font-bold gap-5 me-20">
                    <span><GiStrongMan /></span>
                    <h1>Faster Recovery</h1>
                </div>

                <div className="flex items-center h-10 p-8 text-xl font-GoogleRed font-bold gap-3 ">
                    <span><SiHearthisdotat /></span>
                    <h1>Reduce Stress</h1>
                </div>

                <div className="flex items-center h-10 p-8 text-xl font-GoogleRed font-bold gap-3 ">
                    <span><SiFreelancermap /></span>
                    <h1>Melatonin Free</h1>
                </div>

                <div className="flex items-center h-10 p-8 text-xl font-GoogleRed font-bold gap-3 ">
                    <span><LuHeartCrack /></span>
                    <h1>Better Circadian Health</h1>
                </div>

                <div className="flex items-center h-10 p-8 text-xl font-GoogleRed font-bold gap-3 ">
                    <span><IoMoon /></span>
                    <h1>Deep Sleep</h1>
                </div>

                <div className="flex items-center h-10 p-8 text-xl font-GoogleRed font-bold gap-3 ">
                    <span><FaStar /></span>
                    <h1>No Grogginess</h1>
                </div>
                
                <div className="flex items-center h-10 p-8 text-xl font-GoogleRed font-bold gap-3 ">
                    <span><SiCelestron /></span>
                    <h1>Sleep Faster</h1>
                </div>


            </Marquee>
        </div>
    );
};

export default MarqueeContainer;