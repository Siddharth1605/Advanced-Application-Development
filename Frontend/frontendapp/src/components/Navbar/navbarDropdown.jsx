import { Link } from "react-router-dom";
export default function NavbarDropdown({ isOpen }) {
  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } pt-[75.55px] md:hidden bg-tertiary-300 absolute top-0 left-0 w-full h-screen text-center transition-all duration-500 ease-in-out p-5 z-10`}
    >
      <div className="flex flex-col gap-16 mt-16">
        <div className="flex flex-col gap-8 items-center text-black-200">
         
          <Link to="/" className="w-fit">
            <p className="navlink active-navlink">Home</p>
          </Link>
          <Link to="/userdash" className="w-fit">
            <p className="navlink active-navlink">Services</p>
          </Link>
          <Link to="/login" className="w-fit">
              <p className="navlink active-navlink">Login</p>
            </Link>
        </div>
        <div className="flex flex-col gap-8">
          <a href="#">
            <p className="underline text-black-100 py-3.5 border border-black-100">
              Login
            </p>
          </a>
          <a href="#">
            <button className="py-3.5 border border-primary-100 w-full text-white bg-primary-100 font-medium">
              Start Free
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
