import { GoHomeFill } from "react-icons/go";
import { IoIosCalendar } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { IoHeadsetSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { FaSortDown } from "react-icons/fa";
import React, { useState } from 'react';
import logo from "../../images/logo.png";

export const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  return (
    <header className="flex justify-between w-full gap-3 bg-[#262d34] py-2 px-4">
      {/* Logo Start */}
      <div className="logo flex items-center">
        <img className="w-12" src={logo} alt="logo" />
        <h1 className="text-[#ff4401] font-extrabold text-lg hidden md:flex lg:flex">Dev Forum</h1>
      </div>
      {/* Logo End */}
      {/* Navbar Start */}
      <nav className="navBar  items-center text-white text-xl hidden md:flex lg:flex">
        <ul className="navbar-list flex items-center gap-4">
          <li className="home transition ease-in-out delay-150ms; rounded-md p-2 hover:bg-[#ff4401]">
            <GoHomeFill />
          </li>
          <li className="calendar transition ease-in-out delay-150ms; rounded-md p-2 hover:bg-[#ff4401]">
            <IoIosCalendar />
          </li>
          <li className="community  transition ease-in-out delay-150ms; rounded-md p-2 hover:bg-[#ff4401]">
            <FaUsers />
          </li>
          <li className="voiced transition ease-in-out delay-150ms; rounded-md p-2 hover:bg-[#ff4401]">
            <IoHeadsetSharp />
          </li>
          <li className="mic transition ease-in-out delay-150ms; rounded-md p-2 hover:bg-[#ff4401]">
            <FaMicrophone />
          </li>
        </ul>
      </nav>
      {/* Navbar End */}
      {/* Search Bar Start */}
      <div className="search-bar flex items-center bg-color-[#2c353d]">
        <input
          className="bg-[#2c353d] text-[#757e98] py-2 px-4 w-[100%] active:outline-none focus:outline-none rounded-l-lg"
          type="text"
          placeholder="Type here to search..."
        />
        <i className="search-icon text-xl flex items-center text-[#858ead] py-[10px] px-2 bg-[#2c353d]  rounded-r-lg">
          <IoSearch />
        </i>
      </div>
      {/* Search Bar End */}
      {/* Right Navbar Start */}
      <div className="right-navBar flex items-center">
        <nav className="navbar-list-two right-navBar">
          <ul className="flex items-center text-white gap-3 text-xl">
            <li className="messages transition ease-in-out delay-150ms; bg-[#2c353d] rounded-md p-2 hover:text-[#2c353d] hover:bg-[#fff]">
              <AiOutlineMessage />
            </li>
            <li className="notifications transition ease-in-out delay-150ms; bg-[#2c353d] rounded-md p-2 hover:text-[#2c353d] hover:bg-[#fff]">
              <IoMdNotifications />
            </li>
          </ul>
        </nav>
      </div>
      {/* Right Navbar End */}
      {/* Profile Start */}
      <div className="relative flex items-center">
        <div className="profile flex items-center text-white" onClick={toggleDropdown}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="profile-pic" className="w-10 h-10 rounded-full" />
          <p className="username ml-2 hidden lg:flex">User Name</p>
          <i className="dropdown-icon ml-1 hidden lg:flex"><FaSortDown /></i>
        </div>
        {isDropdownOpen && (
          <div className="absolute z-10 bg-white rounded-md shadow-lg py-2 w-36 right-0 lg:left-auto lg:right-auto mt-48">
            <ul>
                <li><a href="/" className="block px-4 py-2 text-gray-800 hover:bg-[#2c353d] hover:text-white">Profil</a></li>
                <li><a href="/" className="block px-4 py-2 text-gray-800 hover:bg-[#2c353d] hover:text-white">Ayarlar</a></li>
                <li><a href="/" className="block px-4 py-2 text-gray-800 hover:bg-[#2c353d] hover:text-white">Çıkış Yap</a></li>
            </ul>
          </div>
        )}
      </div>
      {/* Profile End */}
    </header>
  );
};
