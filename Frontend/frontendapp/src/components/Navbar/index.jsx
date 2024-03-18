import { useEffect, useState } from "react";
import NavbarDropdown from "./navbarDropdown";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY

    if(currentScrollPos > scrollPos) {
      setIsOpen(false)
    } 
    
    setScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos)

    return () => {
      window.removeEventListener("scroll", handleScrollPos)
    }
  }, [scrollPos]);

  return (
    <nav style={{backgroundColor:'#9DB2BF'}}>
      <div className="container mx-auto max-w-[1344px]">
        <div className="h-16 md:h-20 p-5 md:py-6 lg:px-5 flex items-center justify-between z-20relative" style={{backgroundColor:'#9DB2BF'}}>
          {/* Icon */}
            <p
              className="w-[124px] h-9 lg:w-[150px] lg:h-[42px] object-cover z-20 relative font-bold text-2xl">Golden Years</p>
              

          {/* Hamburger */}
          <div
            onClick={handleOpen}
            className={`${
              isOpen ? "open" : ""
            } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
          >
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-black-500 rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center md:gap-4 lg:gap-8 text-black-200 text-sm lg:text-base font-body">
            <Link to="/" className="navlink active-navlink">
              Home
            </Link>
            <Link to="/userdash" className="navlink active-navlink">
              Services
            </Link>
            <Link to="/login" className="navlink active-navlink ">
              Login
            </Link>
            
          </div>

          {/* Button */}
          <div className="hidden md:flex md:gap-4 lg:gap-[25px] items-center text-sm lg:text-base font-head font-medium">
            <Link to="/login">
              <p className="text-black-100  cursor-pointer">Login</p>
            </Link>
            <a href="#">
              <button className="text-white bg-primary-100 md:py-2.5 px-4 py-3.5 px-[25px]">
                User Profile
              </button>
            </a>
          </div>
        </div>

        {/* Navbar Menu (Mobile) */}
        <NavbarDropdown isOpen={isOpen} />
      </div>
    </nav>
  );
}