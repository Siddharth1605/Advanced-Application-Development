import React from 'react'
import img1 from '../assets/SeniorCitizen.jpg'
import img2 from '../assets/Citizen2.jpg'
import Header from './Header/Header'
export default function Homepage() {
  return (
    <>
    <div className='container' style={{marginLeft:'10%',width:'1000px', marginTop:'6%',height:"400px", backgroundColor:'#0B60B0'}}>
        <div className="pl-3 flex flex-col">
          <h1 className="text-6xl font-bold">Engage</h1>
          <h1 className="text-6xl font-bold">Empower</h1>
          <h1 className="text-6xl font-bold">Enhance</h1>
        </div>
        <p className='pl-4 mt-5 text-lg font-base' style={{width:'30%'}}>Because those who made us, deserve to age magnificently from the comfort of their own homes.</p>
        <img src={img2} style={{marginLeft:'45%', marginTop:'-27%', width:'40%', height:'80%', borderRadius:'10px'}}/>
      </div>
    </>
  )
}
