import Button2 from "../../utility/shered/Button/Button2";

const Faq = () => {
    return (
       <div>
        <div className="w-10/12 mx-auto">
            <div className="text-center my-10">
            <h1 className="md:text-7xl text-3xl font-extrabold font-GoogleMarcellus mb-20">
            Frequently Asked <br />
            Questions
            </h1>
            <Button2></Button2>
            </div>

            <div className="my-20">
                    {/* according number 1 */}
                    <div className="collapse collapse-plus bg-base-200 hover:bg-[#f8ad79] py-5 ">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">How does Lights Out work?</div>
                        <div className="collapse-content">
                            <p>Light s Out uses natural herbs and amino acids which signal to your body to sleep and also promote sleep quality. This allows for the deepest and most restful sleep of my life.</p>
                        </div>
                    </div>
                    {/* according number 2 */}
                    <div className="collapse collapse-plus bg-base-200 hover:bg-[#f8ad79] py-5 ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Who should take Light’s Out?</div>
                    <div className="collapse-content">
                        <p>Light s Out is for anyone, students, adults, athletes, young people, old people. Everyone benefits from better sleep in many ways!</p>
                    </div>
                    </div>
                    {/* according number 3 */}
                    <div className="collapse collapse-plus bg-base-200 hover:bg-[#f8ad79] py-5 ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">When Should I take Light s Out?</div>
                    <div className="collapse-content">
                        <p>While it varies from person to person, we recommend taking Shine 30-60minutes before bed for best effects!</p>
                    </div>
                    </div>
                    {/* according number 4 */}
                    <div className="collapse collapse-plus bg-base-200 hover:bg-[#f8ad79] py-5 ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Why shouldn’t I take another sleep supplement?</div>
                    <div className="collapse-content">
                        <p>Most sleep supplements on the market all have melatonin which is actually harmful for your health and circadian rhythm. Shine is not only melatonin & sugar free, but we also have one of the cleanest labels with no additives. Go compare your other supplement labels to ours!</p>
                    </div>
                    </div>
                    {/* according number 5 */}
                    <div className="collapse collapse-plus bg-base-200 hover:bg-[#f8ad79] py-5 ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">What is your 30 Day Guarantee Policy?</div>
                    <div className="collapse-content">
                        <p>We have a 30 day guarantee for all customers. If your health tracker fails to show any sign of sleep improvements, we will refund you! No risk! But we aren t expecting you to have any issues as less than 1% of customers have asked for a refund</p>
                    </div>
                    </div>
                    {/* according number 6 */}
                    <div className="collapse collapse-plus bg-base-200 hover:bg-[#f8ad79] py-5 ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">What if I m not getting enough hours of Sleep?</div>
                    <div className="collapse-content">
                        <p>Light s Out was made so you can make the most out of the sleep you get, whether it s 4 hours or 8 hours! If you aren t able to get enough hours of sleep in, the best thing you can do is to have the deepest 3 hours of sleep during that time frame. So Light s out is perfect!</p>
                    </div>
                    </div>
            </div>

         </div>
        </div> 
    );
};

export default Faq;