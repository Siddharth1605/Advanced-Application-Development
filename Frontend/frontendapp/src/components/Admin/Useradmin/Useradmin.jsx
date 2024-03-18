import React from 'react';
import { useState } from 'react';
import './User.css'
import img1 from '../../../assets/Citizen2.jpg'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Useradmin = () => {
  
  const users = [
    {
        name : "Siddharth",
        address:'salem',
        phone: '1222222222',
        email : 'sid@gmail.com',
        service : 'physiotherapy',
        description : 'None',
        charges : '5000',
        timing : '06 pm to 07 pm',
        booking : 'Completed',
        duration : '10 days',
    },
    {
      name : "Siddharth",
      address:'salem',
      phone: '1222222222',
      email : 'sid@gmail.com',
      service : 'physiotherapy',
      description : 'None',
      charges : '5000',
      timing : '06 pm to 07 pm',
      booking : 'Rejected',
      duration : '10 days',
  },
  {
    name : "Siddharth",
    address:'salem',
    phone: '1222222222',
    email : 'sid@gmail.com',
    service : 'physiotherapy',
    description : 'None',
    charges : '5000',
    timing : '06 pm to 07 pm',
    booking : 'Pending',
    duration : '10 days',
},
{
  name : "Siddharth",
  address:'salem',
  phone: '1222222222',
  email : 'sid@gmail.com',
  service : 'physiotherapy',
  description : 'None',
  charges : '5000',
  timing : '06 pm to 07 pm',
  booking : 'Completed',
  duration : '10 days',
},
{
name : "Siddharth",
address:'salem',
phone: '1222222222',
email : 'sid@gmail.com',
service : 'physiotherapy',
description : 'None',
charges : '5000',
timing : '06 pm to 07 pm',
booking : 'Rejected',
duration : '10 days',
},
{
name : "Siddharth",
address:'salem',
phone: '1222222222',
email : 'sid@gmail.com',
service : 'physiotherapy',
description : 'None',
charges : '5000',
timing : '06 pm to 07 pm',
booking : 'Pending',
duration : '10 days',
},
  ]
  const [data, setData] = useState(users)
  const [process, setProcess] = useState('');
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setProcess(selectedValue);
    
    if (selectedValue === "") {
      setData(users);
    } else {
      const filteredData = users.filter((item) => item.booking.toLowerCase().includes(selectedValue.toLowerCase()));
      setData(filteredData);
    }
    console.log(data)
    console.log(process)
  };
  
  return (
    <>
      <div className="user" style={{backgroundColor:'#0B2447'}}>
        <div className="addordel">
        <select className='filter'
        value={process}
        onChange={handleChange}
      >
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
        <option value="Rejected">Rejected</option>
      </select>
          <button  className='add'> Add user</button> 
          <button  className='del'>Delete all users</button> 
        </div>

        <div className="product-container" style={{paddingTop:'100px'}}>
          {data.map((user, index) => (
            <div className="product-card" key={index}>
              <img src={img1} alt={user.naem} className="product-image" />
              <h3 className="product-name">Name: {user.name}</h3>
              <p className="product-price">Address: {user.address}</p>
              <p className="product-price">Phone: {user.phone}</p>
              <p className="product-price">Email: {user.email}</p>
              <p className="product-price">Service: {user.service}</p>
              <p className="product-price">Description: {user.description}</p>
              <div className="product-price">Charges: {user.charges} Rupees</div>
              <div className="product-price">Timing: {user.timing}</div>
              <div className="product-price">Duration: {user.duration}</div>
              <div className="product-price">Booking: {user.booking}</div>
              <button
                className="ask-query-button"
                style={{marginTop: '10px'}}
              >
               user delete
              </button>

              <button style={{  marginTop: '-40px', marginLeft:'50%', marginBottom:'3%' }}>
              <button className="ask-query-button">
                user edit
              </button>
            </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Useradmin;
