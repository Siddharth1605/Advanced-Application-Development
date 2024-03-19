import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Appoinment from '../Appoinment/Appoinment'
import { UserCard } from './Usercard'
import './Userdash.css'; // Import CSS for styling
import img1 from '../../assets/service1.jpg'

export default function Userdash() {
  const services = [
    {
      img : 'https://images.pexels.com/photos/7551674/pexels-photo-7551674.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading:'Skilled nursing',
      para : 'Much like countless enterprises today, our skilled nursing for home care senior service undergoes a transformative journey. Formerly reliant on conventional care models, our evolution reflects just a fraction of the narrative.'
    },
    {
      img : 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      heading:'Personal Care',
      para : 'Similar to numerous entities today, our personal care for home-bound seniors undergoes a significant shift. Once rooted in conventional caregiving methods, our transition embodies only a portion of the unfolding narrative.'
    },
    {
      img : 'https://images.pexels.com/photos/4492065/pexels-photo-4492065.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading:'Medication management',
      para : 
      "Echoing the trajectory of many entities, our medication management service for home-based seniors undergoes a notable evolution. Formerly centered on traditional practices, our transformation captures just a segment of the unfolding narrative."
    },
    {
      img : 'https://images.pexels.com/photos/5794024/pexels-photo-5794024.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading:'Physical therapy',
      para : 
      "Reflecting the journey of numerous organizations, our physical therapy service for seniors receiving home care embarks on a significant transition. Formerly grounded in conventional approaches, our adaptation represents merely a portion of the broader narrative."
    },
    {
      img : 'https://img.freepik.com/free-photo/female-doctor-using-stethoscope-check-old-woman-heart-nursing-home_482257-22868.jpg?t=st=1710825882~exp=1710829482~hmac=e5f81ac64261a657cd8e64ee1bf6f8ee289007f1787cc8e4fe7ad2f42252c32c&w=996',
      heading:'Emergency Home Care',
      para : 'In sync with the evolution of countless organizations, our emergency home care service for seniors experiences a transformative shift. Once reliant on traditional models, our adaptation marks only a fraction of the unfolding narrative.'
    },
    {
      img : 'https://img.freepik.com/free-photo/daughter-granddaughter-spends-time-with-grandfather-senior-man-family-fathers-day-positive-emotions-happieness-lifestyle-portrait-home-girl-taking-care-about-dad_155003-23578.jpg?t=st=1710825934~exp=1710829534~hmac=b05d08fcaf55d8a22f39b00022570f6fcfa944893cd4119c02b41be2a0067eaf&w=996',
      heading:'Companionship',
      para : 'Mirroring the journey of many organizations, our companionship service for seniors in home care undergoes a significant transformation. Previously anchored in conventional practices, our evolution represents just a slice of the unfolding narrative.'
    },

  ]
  return (
    <>
        <div className="user-card-container">
        {services.map((service, index) => (
          <UserCard key={index} img={service.img} heading={service.heading} para={service.para} />
        ))}
      </div>
        <Appoinment />
    </>
  )
}
