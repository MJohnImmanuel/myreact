import React from "react";
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import GroupIcon from '@mui/icons-material/Group';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import image1 from './Assets/carservices/1.jpg';
import image2 from './Assets/carservices/2.jpg';
import image3 from './Assets/carservices/3.jpg';
import image4 from './Assets/carservices/4.jpg';
import image5 from './Assets/carservices/5.jpg';
import image6 from './Assets/carservices/6.jpg';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LogoutIcon from '@mui/icons-material/Logout';



function Carservices(){

    return(

        <div>
            <div>
                <Row className="g-0">
                <Col sm={2} className='dash1'>
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
                <div className="carservices" >
                      <h1>Periodic Services</h1>        

                <div class="service-container">
                    <div class="service-card">
                    <img className="image" src={image1} alt=""></img>
                        <div className="service-info1">
                            <h3>Basic Service</h3>
                        <div class="service-info">
                            <ul>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>1000 Kms or 1 Month Warranty</li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Wiper Fluid Replacement</li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Car Wash</li>  
                            </ul>
                            <ul className="mx-5">     
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Engine Oil Replacement</li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Battery Water Top Up</li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Interior Vacuuming (Carpet & Seats)</li>
                            </ul>
                            <div className="mt-5">
                            <Link to={"/Allcars"}><button className=" select-car mt-5 ">Select Car</button></Link>
                            </div>
                            </div>
                        </div>
                        <div class="time-taken"><AccessTimeIcon  style={{fontSize:'20px'}}/>4 Hrs Taken</div>
                    </div>
                </div>    

                <div class="service-container mt-5">
                    <div class="service-card">
                    <img className="image" src={image2} alt=""></img>
                        <div className="service-info1">
                            <h3>Standard Service </h3>
                        <div class="service-info">
                            <ul>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Car Scanning </li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Wiper Fluid Replacement</li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Car Wash</li>  
                            </ul>
                            <ul className="mx-5">     
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Interior Vacuuming (Carpet & Seats )</li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Battery Water Top Up</li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Front Brake Pads Serviced </li>
                            </ul>
                            <div className="mt-5">
                            <Link to={"/Allcars"}><button className=" select-car mt-5 ">Select Car</button></Link>
                            </div>
                            </div>
                        </div>
                        <div class="time-taken"><AccessTimeIcon  style={{fontSize:'20px'}}/>6 Hrs Taken</div>
                    </div>
                </div>

                <div class="service-container mt-5">
                    <div class="service-card">
                    <img className="image" src={image3} alt=""></img>
                        <div className="service-info1">
                            <h3>Comprehensive Service </h3>
                        <div class="service-info">
                            <ul>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>AC Filter REplacement </li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Wiper Fluid Replacement</li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Car Wash</li>  
                            </ul>
                            <ul className="mx-5">     
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Fuel Filter Checking </li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Battery Water Top Up</li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Interior Vacuuming (Carpet & Seats)</li>
                            </ul>
                            <div className="mt-5">
                            <Link to={"/Allcars"}><button className=" select-car mt-5 ">Select Car</button></Link>
                            </div>
                            </div>
                        </div>
                        <div class="time-taken"><AccessTimeIcon  style={{fontSize:'20px'}}/>4 Hrs Taken</div>
                    </div>
                </div>
                </div>

                <div className="carservices" >
                      <h1>AC Service & Repair</h1>        

                <div class="service-container">
                    <div class="service-card">
                    <img className="image" src={image4} alt=""></img>
                        <div className="service-info1">
                            <h3>Regular AC Service </h3>
                        <div class="service-info">
                            <ul>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>500 Kms or 1 Month Warranty</li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>AC Vent Cleaning </li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>AC Inspection</li>  
                            </ul>
                            <ul className="mx-5">     
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>AC Gas (upto 400 gms)</li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Condenser Cleaning</li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>AC Filter Cleaning</li>
                            </ul>
                            <div className="mt-5">
                            <Link to={"/Allcars"}><button className=" select-car mt-5 ">Select Car</button></Link>
                            </div>
                            </div>
                        </div>
                        <div class="time-taken"><AccessTimeIcon  style={{fontSize:'20px'}}/>4 Hrs Taken</div>
                    </div>
                </div>

                <div class="service-container mt-5">
                    <div class="service-card">
                    <img className="image" src={image5} alt=""></img>
                        <div className="service-info1">
                            <h3>High Performance AC Service</h3>
                        <div class="service-info">
                            <ul>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>1000 Kms or 1 Month Warranty</li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>AC Vent Cleaning</li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>AC Leak Test</li>  
                            </ul>
                            <ul className="mx-5">     
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Dashboard Removing Refitting</li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Dashboard Cleaning </li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>AC Gas (upto 600 gms)</li>
                            </ul>
                            <div className="mt-5">
                            <Link to={"/Allcars"}><button className=" select-car mt-5 ">Select Car</button></Link>
                            </div>
                            </div>
                        </div>
                        <div class="time-taken"><AccessTimeIcon  style={{fontSize:'20px'}}/>4 Hrs Taken</div>
                    </div>
                </div>

                <div class="service-container mt-5">
                    <div class="service-card">
                    <img className="image" src={image6} alt=""></img>
                        <div className="service-info1">
                            <h3>Cooling Coil Replacement </h3>
                        <div class="service-info">
                            <ul>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>3 Months Warranty</li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Cooling Coil Replacement (OES)</li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Spare Part Cost Only </li>  
                            </ul>
                            <ul className="mx-5">     
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>AC Pipe, Value, Sensors Cost Additional </li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>AC Gas </li>
                                <li><CheckIcon  style={{fontSize:'13px', color:'green', backgroundColor:'#d2efe0', borderRadius:'5px'}}/>Free Pickup & Drop </li>
                            </ul>
                            <div className="mt-5">
                            <Link to={"/Allcars"}><button className=" select-car mt-5 ">Select Car</button></Link>
                            </div>
                            </div>
                        </div>
                        <div class="time-taken"><AccessTimeIcon  style={{fontSize:'20px'}}/>4 Hrs Taken</div>
                    </div>
                </div>
                </div>
                </Col>
                </Row>
            </div>
        </div>
    )
}
export default Carservices