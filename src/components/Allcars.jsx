import React from 'react'
import img1 from './Assets/Allcars/1.jpeg';
import img2 from './Assets/Allcars/2.jpeg';
import img3 from './Assets/Allcars/3.jpeg';
import img4 from './Assets/Allcars/4.jpeg';
import img5 from './Assets/Allcars/5.jpeg';
import img6 from './Assets/Allcars/6.jpeg';
import img7 from './Assets/Allcars/7.jpeg';
import img8 from './Assets/Allcars/8.jpeg';
import img9 from './Assets/Allcars/9.jpeg';
import img10 from './Assets/Allcars/10.jpeg';
import img11 from './Assets/Allcars/11.jpeg';
import img12 from './Assets/Allcars/12.jpeg';
import img13 from './Assets/Allcars/13.jpeg';
import img14 from './Assets/Allcars/14.jpeg';
import img15 from './Assets/Allcars/15.jpeg';
import img16 from './Assets/Allcars/16.jpeg';
import img17 from './Assets/Allcars/17.jpeg';
import img18 from './Assets/Allcars/18.jpeg';
import img19 from './Assets/Allcars/19.jpeg';
import img20 from './Assets/Allcars/20.jpeg';
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import GroupIcon from '@mui/icons-material/Group';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import LogoutIcon from '@mui/icons-material/Logout';

function Allcars() {
  return (
    <div>
        <Row className="g-0">
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
         <h1>Select Brands </h1>
    <div className="car-gallery">
        <div class="car-model">
           <Link to="/Maruti" style={{textDecoration:'none', color:'white'}} ><img src= {img1} alt='' ></img>
            <h3>Maruti Suzuki </h3></Link>
        </div>
        <div className="car-model">
        <Link to="/Hyundai" style={{textDecoration:'none', color:'white'}} ><img src= {img2} alt='' ></img>
            <h3>Hyundai </h3></Link>
        </div>
        <div className="car-model">
        <Link to="/Honda" style={{textDecoration:'none', color:'white'}}><img src= {img3} alt='' ></img>
            <h3>Honda </h3></Link>
        </div>
        <div className="car-model">
        <Link to="/Tata" style={{textDecoration:'none', color:'white'}} ><img src= {img4} alt='' ></img>
            <h3>Tata </h3></Link>
        </div>
        <div className="car-model">
        <img src= {img5} alt='' ></img>
            <h3>Ford </h3>
        </div>
        <div className="car-model">
        <img src= {img6} alt='' ></img>
            <h3>Volkswagen </h3>
        </div>
        <div className="car-model">
        <img src= {img7} alt='' ></img>
            <h3>Mahindra </h3>
        </div>
        <div className="car-model">
        <img src= {img8} alt='' ></img>
            <h3>Renault </h3>
        </div>
        <div className="car-model">
        <img src= {img9} alt='' ></img>
            <h3>Chevrolet </h3>
        </div>
        <div className="car-model">
        <img src= {img10} alt='' ></img>  
            <h3>Toyota </h3>
        </div>
        <div className="car-model">
        <img src= {img11} alt='' ></img>
            <h3>Skoda </h3>
        </div>
        <div className="car-model">
        <img src= {img12} alt='' ></img>
            <h3>Nissan </h3>
        </div>
        <div className="car-model">
        <img src= {img13} alt='' ></img>
            <h3>Fiat </h3>
        </div>
        <div className="car-model">
        <img src= {img14} alt='' ></img>
            <h3>Datsun </h3>
        </div>
        <div className="car-model">
        <img src= {img15} alt='' ></img>
            <h3>BMW </h3>
        </div>
        <div className="car-model">
        <img src= {img16} alt='' ></img>
            <h3>Kia </h3>
        </div>
        <div className="car-model">
        <img src= {img17} alt='' ></img>
            <h3>Audi </h3>
        </div>
        <div className="car-model">
        <img src= {img18} alt='' ></img>
            <h3>Mercedes </h3>
        </div>
        <div className="car-model">
        <img src= {img19} alt='' ></img>
            <h3>Jeep</h3>
        </div>
        <div className="car-model">
        <img src= {img20} alt='' ></img>
            <h3>Volvo </h3>
        </div>
    </div>
    </div>
    </Col>  
    </Row>
    </div>
  )
}

export default Allcars
