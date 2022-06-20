import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import menu from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-close.svg";

function Header() {
  const [toggler, setToggler] = useState(false);

  const handleToggler = () => setToggler(!toggler);

  const closeMenu = () => setToggler(false);
  return (
    <>
      <nav className="flex justify-around items-center p-5 border-b-2 border-light-grayish-blue">
        <button
          onClick={handleToggler}
          className="md:hidden cursor-pointer border-none z-20  "
        >
          {toggler ? (
            <img
              src={close}
              alt="closeicon"
              onClick={closeMenu}
              className="stroke-pink-500 h-4 w-4"
            />
          ) : (
            <img
              src={menu}
              alt="menu"
              onClick={closeMenu}
              className="stroke-pink-500 h-4 w-4"
            />
          )}
        </button>
        <div className="flex gap-12 justify-between ">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="logo" />
          </Link>
          <ul
            className={`flex flex-col justify-center md:px-0 items-center md:flex-row top-0 md:h-auto h-screen fixed md:static gap-6 md:gap-1 inset-0 ${
              !toggler ? "right-[-200%]" : "right-0"
            } ${toggler ? "bg-orange-400" : "null"}`}
          >
            <li className="text-sm text-dark-grayish-blue hover:border-b-2 hover:border-orange-400">
              <Link to="/collections" onClick={closeMenu}>
                Collections
              </Link>
            </li>
            <li className="text-sm text-dark-grayish-blue  hover:border-b-2 hover:border-orange-400">
              <Link to="/men" onClick={closeMenu}>
                Men
              </Link>
            </li>
            <li className="text-sm text-dark-grayish-blue  hover:border-b-2 hover:border-orange-400">
              <Link to="/women onClick={closeMenu}">Women</Link>
            </li>
            <li className="text-sm text-dark-grayish-blue  hover:border-b-2 hover:border-orange-400">
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="text-sm text-dark-grayish-blue hover:border-b-2 hover:border-orange-400">
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-between gap-7 items-center">
          <img src={cart} alt="cart" className="w-3 h-3 cursor-pointer" />
          <img
            src={avatar}
            alt="avatar"
            className="
          w-7 h-7 border-2 hover:border-orange-400 cursor-pointer rounded-full"
          />
        </div>
      </nav>
    </>
  );
}

export default Header;
