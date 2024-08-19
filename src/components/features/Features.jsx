import features1 from '../../assets/Features_Images/features_1.png'
import features2 from '../../assets/Features_Images/features_2.png'
import features3 from '../../assets/Features_Images/features3.png'
import Button2 from '../../utility/shered/Button/Button2';
const Features = () => {
    return (
        <div>
            <div className='h-[450px] flex justify-center items-center gap-10 py-28'>

                <div className="card h-96 bg-base-100 w-[450px] shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                    src={features1}
                    alt="features1 image  coming soon"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center font-GoogleRed">
                    <h1 className="card-title text-3xl font-bold">Melatonin Free</h1>

                    <p className='my-5'>Formulated with powerful amino acids and natural herbs. Experience restful and quality sleep with our melatonin free formula of properly dosed ingredients.</p>
                    
                </div>
                </div>

                <div className="card h-96 bg-base-100 w-[450px] shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                    src={features2}
                    alt="features1 image  coming soon"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center font-GoogleRed ">
                    <h1 className="card-title text-3xl font-bold">Deep, High Quality Sleep</h1>

                    <p className='my-5'>Light s Out enhances deep sleep phases, and promotes restful & quality sleep. No need for afternoon naps anymore</p>
                    
                </div>
                </div>

                <div className="card h-96 bg-base-100 w-[450px] shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                    src={features3}
                    alt="features1 image  coming soon"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center font-GoogleRed ">
                    <h1 className="card-title text-3xl font-bold">Energized Mornings</h1>

                    <p className='my-5'>Groggy mornings are now a thing of the past! Wake up and thrive after a reviving night of full sleep, with heightened energy, mood and focus.</p>
                    
                </div>
                </div>
             
            </div>

            <div className='text-center my-5'>
                <Button2></Button2>               
                    <div className=' font-GoogleRed flex items-center justify-center my-5  gap-5'>

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
            </div>

            
        </div>
    );
};

export default Features ;