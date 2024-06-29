import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/logo.png";
import flagGif from "../../assets/flag.gif";
import Menu from "../../assets/menu.png";
import Cross from "../../assets/cross.png"; // Import the cross icon
// import Carousel from "../carosel/Carosel";

const Header = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  

  return (
    <div className="section w-full">
      <header className="w-full bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <div className="logo">
              <img
                onClick={() => navigate("/")}
                src={Logo}
                alt="Logo"
                className="logo cursor-pointer w-16 md:h-16" // Adjust the width and height as needed
              />
            </div>
            {/* mid */}
            <div className="main-nav-text">
              <h1
                onClick={() => navigate("/")}
                className="cursor-pointer text-2xl font-bold text-red-500"
              >
                बेलबारी नगरपालिका<br/>नगर कार्यपालिकाको कार्यालय
              </h1>
              <h3 className="text-xl text-red-600">
                कोशी प्रदेश, मोरङ , नेपाल
              </h3>
            </div>
            {/* links */}

    

          </div>
          <div className="main-nav-flag">
            <img src={flagGif} alt="Flag" className="w-16 h-16" />
          </div>
        </div>
        <div className="bg-gray-100 py-2 px-6 ">
          <h2 className="text-xl font-bold text-blue-800">News</h2>
          <marquee className="text-xl">
             
            <Link to="/" className="text-blue-600">
              दोस्रो बोलपत्रको सूचना (Invitation for Bids) !!&nbsp;
            </Link>
            <Link to="/" className="text-blue-600">
              &nbsp;बोलपत्रको सूचना(Invitation for Online Bids) !!&nbsp;
            </Link>
            <Link to="/" className="text-blue-600">
              &nbsp;बोलपत्र आशयको मुल्याङ्कन सूचना !!&nbsp;
            </Link>
            <Link to="/" className="text-blue-600">
              &nbsp;गोल्ड कप फुटवल प्रतियोगितामा फुटबल टिम सहभागीता सम्बन्धी
              सम्बन्धी सूचना !!&nbsp;
            </Link>
            <Link to="/" className="text-blue-600">
              &nbsp;बेलबारी नगरपालिका स्थित सबै सामुदायिक विद्यालयहरु प्रस्ताव पेश
              गर्ने सम्बन्धमा !!&nbsp;
            </Link>
            <Link to="/" className="text-blue-600">
              &nbsp;नदिजन्य पदार्थको बिक्री शुल्क उठाउने सम्बन्धी बोलपत्र ठेक्का
              को मुल्याङ्कन बोलपत्र आशयको सूचना !!!
            </Link>
          </marquee>
        </div>
        <div className="container mx-auto flex justify-between items-center py-4 px-6 bg-blue-500">
          <ul
            className={`${
              menu ? "flex" : "hidden"
            } flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-4`}
          >
            <li
              onClick={() => navigate("/")}
              className="cursor-pointer hover:text-blue-500 hover:bg-gray-200 px-3 py-2 rounded-md transition-all duration-300 "
            >
              Home
            </li>
            <li
              onClick={() => navigate("/about")}
              className="cursor-pointer hover:text-blue-500 hover:bg-gray-200 px-3 py-2 rounded-md transition-all duration-300"
            >
              About
            </li>
            <li
              onClick={() => navigate("/forms")}
              className="cursor-pointer hover:text-blue-500 hover:bg-gray-200 px-3 py-2 rounded-md transition-all duration-300"
            >
              Forms
            </li>
            <li
              onClick={() => navigate("/download")}
              className="cursor-pointer hover:text-blue-500 hover:bg-gray-200 px-3 py-2 rounded-md transition-all duration-300"
            >
             Download
            </li>
            <Link
              to="/"
              className="cursor-pointer text-blue-600 hover:text-blue-500 hover:bg-gray-200 px-3 py-2 rounded-md transition-all duration-300"
            >
              <li>How to use website</li>
            </Link>
            <li
              onClick={() => navigate("/contact")}
              className="cursor-pointer hover:text-blue-500 hover:bg-gray-200 px-3 py-2 rounded-md transition-all duration-300"
            >
              Contact Us
            </li>
          </ul>
          {/* bla */}
          <div className="flex items-center space-x-4">
            <div className="md:hidden">
              <img
                src={menu ? Cross : Menu} // Conditional rendering of the icon
                onClick={() => setMenu(!menu)}
                alt={menu ? "Close Menu" : "Open Menu"}
                className="cursor-pointer w-8 h-8"
              />
            </div>
          </div>

          {/* Separate div for mobile responsiveness */}
          <div className=" lg:flex  items-center">
            {/* application status for mobile */}
            <button
              className="lg:flex bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-all duration-300 mr-4"
              onClick={() => navigate("/login")}
            >
             Login
            </button>

            {/* admin button for mobile */}
            <button
              id="employee-login-btn-mobile "
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
              onClick={() => navigate("/admin")}
            >
              Admin
            </button>
          </div>
        </div>
      {/* <Carousel/> */}

       
      </header>
    

    </div>

  
  );
};

export default Header;
