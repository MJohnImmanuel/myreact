import React from 'react'
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import GroupIcon from '@mui/icons-material/Group';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import image1 from './Assets/Allcars/Hyundai/1.jpeg';
import image2 from './Assets/Allcars/Hyundai/2.jpeg';
import image3 from './Assets/Allcars/Hyundai/3.jpeg';
import image4 from './Assets/Allcars/Hyundai/4.jpeg';
import image5 from './Assets/Allcars/Hyundai/5.jpeg';
import image6 from './Assets/Allcars/Hyundai/6.jpeg';
import image7 from './Assets/Allcars/Hyundai/7.jpeg';
import image8 from './Assets/Allcars/Hyundai/8.jpeg';
import image9 from './Assets/Allcars/Hyundai/9.jpeg';
import image10 from './Assets/Allcars/Hyundai/10.jpeg';
import image11 from './Assets/Allcars/Hyundai/11.jpeg';
import image12 from './Assets/Allcars/Hyundai/12.jpeg';
import LogoutIcon from '@mui/icons-material/Logout';

function Hyundai() {
  return (
    <div>
      <div>
        <Row>
        <Col sm={2} className='dash2'>
        <div className='take'>
            <h5>CAR TAKE </h5>
            </div>
                <Link to="/dashboard" style={{textDecoration:'none', color:'white'}}><h5><TrendingUpIcon style={{color:'#9d9faa'}} /> Dashboard </h5></Link>
                <Link to="/Carservices" style={{textDecoration:'none', color:'white'}}><h5><MiscellaneousServicesIcon  style={{color:'#9d9faa'}} /> Services</h5></Link>
                <Link to="/Allcars" style={{textDecoration:'none',color:'white'}}><h5> <DirectionsCarIcon style={{color:'#9d9faa'}}/> Car </h5></Link>
                <h5><InsertChartIcon  style={{color:'#9d9faa'}}/> Insurance</h5>
                <h5> <GroupIcon style={{color:'#9d9faa'}} /> Costumer </h5>
                <Link to="/" style={{textDecoration:'none', color:'white',}} ><h5><LogoutIcon style={{color:'#9d9faa'}} />Logout </h5></Link>
            </Col>

            <Col sm={10}>
            <div className='cars'>
         <h1>Select Models </h1>
    <div className="car-gallery">
        <div class="car-model">
           <img src= {image1} alt='' ></img>
            <h3>i10 </h3>
        </div>
        <div className="car-model">
        <img src= {image2} alt='' ></img>
            <h3>120</h3>
        </div>
        <div className="car-model">
        <img src= {image3} alt='' ></img>
            <h3>Grand i10 </h3>
        </div>
        <div className="car-model">
        <img src= {image4} alt='' ></img>
            <h3>Santro Xing </h3>
        </div>
        <div className="car-model">
        <img src= {image5} alt='' ></img>
            <h3>Eon </h3>
        </div>
        <div className="car-model">
        <img src= {image6} alt='' ></img>
            <h3>Xcent </h3>
        </div>
        <div className="car-model">
        <img src= {image7} alt='' ></img>
            <h3>Elite i20</h3>
        </div>
        <div className="car-model">
        <img src= {image8} alt='' ></img>
            <h3>Creta </h3>
        </div>
        <div className="car-model">
        <img src= {image9} alt='' ></img>
            <h3>Alcazar</h3>
        </div>
        <div className="car-model">
        <img src= {image10} alt='' ></img>
            <h3>Verna Fluidic </h3>
        </div>
        <div className="car-model">
        <img src= {image11} alt='' ></img>
            <h3>Verna </h3>
        </div>
        <div className="car-model">
        <img src= {image12} alt='' ></img>
            <h3>Accent </h3>
        </div>
        </div>
        </div>
            </Col>
        </Row>
      </div>
    </div>
  )
}

export default Hyundai
