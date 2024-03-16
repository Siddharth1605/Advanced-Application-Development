import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="head-bg">
            <nav className="navbar flex justify-between items-center py-4">
                <div className="container-head">
                    <Link to="/home">
                        Home
                    </Link>
                    <button className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/home" className='list-item text-decoration-none'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className='list-item text-decoration-none'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/service" className='list-item text-decoration-none'>Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dentist" className='list-item text-decoration-none'>Dentist</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className='list-item text-decoration-none'>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="btn btn-danger">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
