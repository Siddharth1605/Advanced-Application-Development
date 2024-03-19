import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { VscLayoutSidebarRight } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import './Sidebar.css'
function Sidebar() {
    {/*const handleLogout = () => {
        removeEmail()
        removeToken()
        removeRole()
        window.location.href = "/"
      }*/}
  return (
   <>
    <aside id="sidebar" className={ "sidebar-responsive"} style={{marginTop:'50px'}}>
        

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                    <Link to="/"><p className='text-black-100'><BsGrid1X2Fill className='icon'/> Home</p></Link>
            </li>
            <li className='sidebar-list-item'>
                    <Link to="/admin"><p className='text-black-100'><BsFillGrid3X3GapFill className='icon'/> Dashboard</p></Link>
            </li>
            {/*<li className='sidebar-list-item'>
                    <BsFillGrid3X3GapFill className='icon'/> Doctors
            </li>*/}
            <li className='sidebar-list-item'>
                <Link to="/"><p className='text-black-100'><BsFillGearFill className='icon'/> Log out</p></Link>
            </li>
        </ul>
    </aside>
 
    </>
  )
}

export default Sidebar