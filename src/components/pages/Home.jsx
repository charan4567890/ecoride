import React from 'react'
import vector from '../images/Vector.svg';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';

const Home = () => {
  return (
    <div className='home'>
      <div className='text'>
        <h2>TIME IS RUNNING OUT</h2>
        <h3>Select an electric vehicle of <br/>
        your preference for rental</h3>
        <h5>
        "Save $10 on your first electric rental!"
        </h5>
        <div className='btn1'>
        <button className='btn'>RENT NOW</button>
        </div>
      </div>
      <div className='images'>
           <img src={vector} alt="Electric Vehicle" className='image-vector'/>
           <img src={image1} alt="Electric Vehicle" className='image-1'/>
      </div>
      <div className='img'> 
      <img src={image2} alt="Electric Vehicle" className='image-2'/>
      </div>
    </div>

  )
}

export default Home;
