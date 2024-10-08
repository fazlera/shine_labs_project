import { CiDeliveryTruck } from "react-icons/ci";
import Logo from "../../../assets/Logo/ShineLogo.png"
import { PiShoppingCartBold } from "react-icons/pi";
import { LuLeaf } from "react-icons/lu";
import { GiSelfLove } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      {/* Nav header title on the top */}
      <h2 className="text-center font-bold text-sm bg-[#f8ad79] p-1 text-black font-GoogleRed ">
        SUBSCRIBE & GET A FREE SLEEP JOURNAL EBOOK
      </h2>
        {/* Navbar Link is here */}
      <div className="w-9/12 mx-auto h-20 my-3">

        <div className="navbar bg-base-100">
           {/* Navbar link show on small device */}
          <div className="navbar-start">
            {/* Navbar link is here for small device */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              {/* Navbar link is here for small device */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
              >
                <li>
                  <a>Lights Out</a>
                </li>

                <li>
                  <a>FAQ</a>
                </li>

                <li>
                  <a>Contact</a>
                </li>
                
              </ul>

            </div>
                {/* This is for Navbar logo */}
                <div> 
                <img src={Logo} alt="Logo" />

                </div>
          </div>


          {/* Navbar link show on medium & large device */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-28 px-1 text-xl font-GoogleRed font-bold text-black cursor-pointer">

              <li className="hover:underline"> Lights Out </li>

              <li className="hover:underline"> FAQ </li>
              
              <li className="hover:underline"> Contact </li>

            </ul>
          </div>

          {/* Navbar end people & cart icon is here */}
          <div className="navbar-end flex  items-center gap-10 font-GoogleRed font-semibold">
            <div className="flex flex-col items-center ">
              <img className="w-6 h-7" src="https://cdn.shopify.com/s/files/1/0680/2210/8393/files/User.png" alt="" />
              <h2>Account</h2>
            </div>

            <div className="flex flex-col items-center ">
              <h1 className="text-3xl"><PiShoppingCartBold /></h1>
              <h2>Cart</h2>
            </div>

          </div>
        </div>
      </div>

      {/* Navbar bottom title */}
      <div className="bg-[#ffe1cc]">
      
      <div className="lg:w-8/12 mx-auto flex justify-center items-center gap-5 md:gap-40 p-1">
      
      <div className=" text-[10px] md:text-[18px]">
          <h1 className="flex items-center gap-3 font-bold font-GoogleRed "> <span><CiDeliveryTruck />
          </span>  FAST SHIPPING
          </h1>
      </div>
     
      <div className=" text-[10px] md:text-[18px]">
          <h1 className="flex items-center gap-3 font-bold font-GoogleRed">
          <span>
            <LuLeaf />
            </span> 
          100% NATURAL INGREDIENTS
          </h1>
       </div>

       <div className=" text-[10px] md:text-[18px]">
          <h1 className="flex items-center gap-3 font-bold font-GoogleRed">
          <span>
          <GiSelfLove />
          </span>  
          BETTER SLEEP
          </h1>
      </div>

    </div>
      </div>

    </div>
  );
};

export default Navbar;
