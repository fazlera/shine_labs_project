import Marquee from "react-fast-marquee";
import image1  from '../../assets/potent-images/images1.png'
import image2  from '../../assets/potent-images/images2.png'
import image3  from '../../assets/potent-images/images3.png'
import image4  from '../../assets/potent-images/images4.png'
import image5  from '../../assets/potent-images/images5.png'
import image6  from '../../assets/potent-images/images6.png'
import image7  from '../../assets/potent-images/images7.png'
import image8  from '../../assets/potent-images/images8.png'

const Potent = () => {
    return (
        <div>
            {/* h-[80vh] */}
           <div className=" bg-[#f8ad79] py-20 ">
                <div className="text-center py-10">
                    <h1 className="text-4xl md:text-7xl font-GoogleMarcellus font-extrabold">Natural and Potent Ingredients</h1>
                    <p className="text-2xl font-GoogleRed font-semibold py-5">A blend of the following vitamins, minerals and amino acids that are <br /> scientifically proven to target the root cause of restlessness and poor sleep</p>
                </div>

                <div>
                    <Marquee speed={200} pauseOnHover>
                    <div className=" flex items-center justify-center gap-10 md:gap-0 "> 
                        {/* card number 1  */}
                        <div className="w-[400px] bg-gray-100 rounded-2xl overflow-hidden md:mr-10 mr-0">
                            <div className="flex items-center gap-4 p-5">
                                <div>
                                    <img src={image1} alt='image1'/>
                                </div>
                                <div>
                                    <small className="text-lg font-medium">200mg</small>
                                    <h1 className="text-3xl font-bold">L-Tryphophan</h1>
                                </div>
                            </div>
                            <div className="w-[380px] mx-auto text-justify p-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ea voluptate assumenda deserunt pariatur explicabo ex provident perferendis, excepturi dicta minima eveniet accusamus quo </p>
                                <p> <br />
                                ipsa earum veritatis fugiat recusandae reprehenderit voluptatem asperiores esse eaque quia ipsam! Explicabo eaque est nam similique 
                                </p> <br />
                                <div className="h-32 relative left-0 right-0 bottom-0 top-24">
                                    <div className="">
                                        <h6>sources</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card number 2  */}
                        <div className="w-[400px] bg-gray-100 rounded-2xl overflow-hidden md:mr-10 mr-0">
                            <div className="flex items-center gap-4 p-5">
                                <div>
                                    <img src={image2} alt='image1'/>
                                </div>
                                <div>
                                    <small className="text-lg font-medium">200mg</small>
                                    <h1 className="text-3xl font-bold">L-Tryphophan</h1>
                                </div>
                            </div>
                            <div className="w-[380px] mx-auto text-justify p-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ea voluptate assumenda deserunt pariatur explicabo ex provident perferendis, excepturi dicta minima eveniet accusamus quo </p>
                                <p> <br />
                                ipsa earum veritatis fugiat recusandae reprehenderit voluptatem asperiores esse eaque quia ipsam! Explicabo eaque est nam similique 
                                </p> <br />
                                <div className="h-32 relative left-0 right-0 bottom-0 top-24">
                                    <div className="">
                                        <h6>sources</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card number 3  */}
                        <div className="w-[400px] bg-gray-100 rounded-2xl overflow-hidden md:mr-10 mr-0">
                            <div className="flex items-center gap-4 p-5">
                                <div>
                                    <img src={image3} alt='image1'/>
                                </div>
                                <div>
                                    <small className="text-lg font-medium">200mg</small>
                                    <h1 className="text-3xl font-bold">L-Tryphophan</h1>
                                </div>
                            </div>
                            <div className="w-[380px] mx-auto text-justify p-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ea voluptate assumenda deserunt pariatur explicabo ex provident perferendis, excepturi dicta minima eveniet accusamus quo </p>
                                <p> <br />
                                ipsa earum veritatis fugiat recusandae reprehenderit voluptatem asperiores esse eaque quia ipsam! Explicabo eaque est nam similique 
                                </p> <br />
                                <div className="h-32 relative left-0 right-0 bottom-0 top-24">
                                    <div className="">
                                        <h6>sources</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card number 4  */}
                        <div className="w-[400px] bg-gray-100 rounded-2xl overflow-hidden md:mr-10 mr-0">
                            <div className="flex items-center gap-4 p-5">
                                <div>
                                    <img src={image4} alt='image1'/>
                                </div>
                                <div>
                                    <small className="text-lg font-medium">200mg</small>
                                    <h1 className="text-3xl font-bold">L-Tryphophan</h1>
                                </div>
                            </div>
                            <div className="w-[380px] mx-auto text-justify p-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ea voluptate assumenda deserunt pariatur explicabo ex provident perferendis, excepturi dicta minima eveniet accusamus quo </p>
                                <p> <br />
                                ipsa earum veritatis fugiat recusandae reprehenderit voluptatem asperiores esse eaque quia ipsam! Explicabo eaque est nam similique 
                                </p> <br />
                                <div className="h-32 relative left-0 right-0 bottom-0 top-24">
                                    <div className="">
                                        <h6>sources</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card number 5  */}
                        <div className="w-[400px] bg-gray-100 rounded-2xl overflow-hidden md:mr-10 mr-0">
                            <div className="flex items-center gap-4 p-5">
                                <div>
                                    <img src={image5} alt='image1'/>
                                </div>
                                <div>
                                    <small className="text-lg font-medium">200mg</small>
                                    <h1 className="text-3xl font-bold">L-Tryphophan</h1>
                                </div>
                            </div>
                            <div className="w-[380px] mx-auto text-justify p-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ea voluptate assumenda deserunt pariatur explicabo ex provident perferendis, excepturi dicta minima eveniet accusamus quo </p>
                                <p> <br />
                                ipsa earum veritatis fugiat recusandae reprehenderit voluptatem asperiores esse eaque quia ipsam! Explicabo eaque est nam similique 
                                </p> <br />
                                <div className="h-32 relative left-0 right-0 bottom-0 top-24">
                                    <div className="">
                                        <h6>sources</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card number 6  */}
                        <div className="w-[400px] bg-gray-100 rounded-2xl overflow-hidden md:mr-10 mr-0">
                            <div className="flex items-center gap-4 p-5">
                                <div>
                                    <img src={image6} alt='image1'/>
                                </div>
                                <div>
                                    <small className="text-lg font-medium">200mg</small>
                                    <h1 className="text-3xl font-bold">L-Tryphophan</h1>
                                </div>
                            </div>
                            <div className="w-[380px] mx-auto text-justify p-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ea voluptate assumenda deserunt pariatur explicabo ex provident perferendis, excepturi dicta minima eveniet accusamus quo </p>
                                <p> <br />
                                ipsa earum veritatis fugiat recusandae reprehenderit voluptatem asperiores esse eaque quia ipsam! Explicabo eaque est nam similique 
                                </p> <br />
                                <div className="h-32 relative left-0 right-0 bottom-0 top-24">
                                    <div className="">
                                        <h6>sources</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card number 7  */}
                        <div className="w-[400px] bg-gray-100 rounded-2xl overflow-hidden md:mr-10 mr-0">
                            <div className="flex items-center gap-4 p-5">
                                <div>
                                    <img src={image7} alt='image1'/>
                                </div>
                                <div>
                                    <small className="text-lg font-medium">200mg</small>
                                    <h1 className="text-3xl font-bold">L-Tryphophan</h1>
                                </div>
                            </div>
                            <div className="w-[380px] mx-auto text-justify p-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ea voluptate assumenda deserunt pariatur explicabo ex provident perferendis, excepturi dicta minima eveniet accusamus quo </p>
                                <p> <br />
                                ipsa earum veritatis fugiat recusandae reprehenderit voluptatem asperiores esse eaque quia ipsam! Explicabo eaque est nam similique 
                                </p> <br />
                                <div className="h-32 relative left-0 right-0 bottom-0 top-24">
                                    <div className="">
                                        <h6>sources</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card number 8  */}
                        <div className="w-[400px] bg-gray-100 rounded-2xl overflow-hidden md:mr-10 mr-0">
                            <div className="flex items-center gap-4 p-5">
                                <div>
                                    <img src={image8} alt='image1'/>
                                </div>
                                <div>
                                    <small className="text-lg font-medium">200mg</small>
                                    <h1 className="text-3xl font-bold">L-Tryphophan</h1>
                                </div>
                            </div>
                            <div className="w-[380px] mx-auto text-justify p-5">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ea voluptate assumenda deserunt pariatur explicabo ex provident perferendis, excepturi dicta minima eveniet accusamus quo </p>
                                <p> <br />
                                ipsa earum veritatis fugiat recusandae reprehenderit voluptatem asperiores esse eaque quia ipsam! Explicabo eaque est nam similique 
                                </p> <br />
                                <div className="h-32 relative left-0 right-0 bottom-0 top-24">
                                    <div className="">
                                        <h6>sources</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                     </div>
                    </Marquee>
                </div>

            </div> 
        </div>
    );
};

export default Potent;