import { FaCheckCircle } from 'react-icons/fa';
import image1 from '../../assets/rounder-image/circle_features.png'
import girlImage from '../../assets/rounder-image/girlImage.jpg'
import Button from '../../utility/shered/Button/Button';
import Button2 from '../../utility/shered/Button/Button2';

const RoundedImage = () => {
    return (
        <div>
            <div>
                <div className="text-center md:text-7xl text-2xl font-GoogleMarcellus font-extrabold py-20 text-[#462b13]">
                    <h1>One scoop. All it takes for the Best <br /> Sleep of your Life</h1>
                </div>
                <div className='w-full mx-auto flex justify-center items-center text-5xl font-GoogleRed font-extrabold text-[#462b13]'>
                    <div>
                    <h1 className='text-right'>Better <br /> Mood</h1>
                    <h1 className='my-40 text-right'>Melatonin <br />
                    Free</h1>
                    <h1 className='text-right'>Reduced <br />
                    Anxiety</h1>
                    </div>

                    <div> <img className='w-[700px]' src={image1} alt="image1" /> 
                    </div>

                    <div>
                    <h1 className=''>Wake Up <br />
                    Energized</h1>
                    <h1 className='my-40 '>Melatonin <br />
                    Free</h1>
                    <h1 className=''>Stay <br />
                    Asleep</h1>
                    </div>

                </div>
                <div className='text-center'>
                    <Button></Button>
                </div>

                {/* image2 container  */}

            <div className='w-8/12 mx-auto my-20'>
                    <div className='flex items-center justify-center gap-10 flex-col md:flex-row-reverse mt-36'>

                    <div className='w-6/12'>
                        <img className='w-full' src={girlImage} alt="" />
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
                            <p className='flex items-center gap-2 font-GoogleRed ml-5 my-5 font-bold '>
                            <FaCheckCircle />
                            <span>Risk Guarantee30 Day Risk Free Guarantee</span>
                            </p>
                        </div>
                        
                    </div>

                    </div>
            </div>

            </div>
        </div>
    );
};

export default RoundedImage;