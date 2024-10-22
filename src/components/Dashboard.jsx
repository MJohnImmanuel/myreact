import React from 'react'
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Charts from './Charts';
import BarCharts from './Barcharts';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import GroupIcon from '@mui/icons-material/Group';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import LogoutIcon from '@mui/icons-material/Logout';

function Dashboard() {

  return (
    <div>

      <div >
        <Row className='g-0'>
            <Col sm={2} className='dash'>
            <div className='take'>
            <h5>CAR TAKE </h5>
            </div>
            <Link to="/dashboard" style={{textDecoration:'none', color:'white',}}><h5><TrendingUpIcon style={{color:'#9d9faa',}} /> Dashboard </h5></Link>
            <Link to="/Carservices" style={{textDecoration:'none', color:'white'}}><h5><MiscellaneousServicesIcon  style={{color:'#9d9faa'}} /> Services</h5></Link>
            <Link to="/Allcars" style={{textDecoration:'none',color:'white'}}><h5> <DirectionsCarIcon style={{color:'#9d9faa'}}/> Car </h5></Link>
            <h5><InsertChartIcon  style={{color:'#9d9faa'}}/> Insurance</h5>
            <h5> <GroupIcon style={{color:'#9d9faa'}} /> Costumer </h5>
            <Link to="/" style={{textDecoration:'none', color:'white',}} ><h5><LogoutIcon style={{color:'#9d9faa'}} />Logout </h5></Link>
            </Col>

            <Col sm={10}>
          <div className="container">
            <h1>Dashboard</h1>
            

          <div className='cards'>
            <div className="maincard d-flex px-2">
                  <div className="card1">
                        <p>Revenue</p>
                        <h4>100.750.000</h4>
                        <h6><CallMadeIcon  style={{fontSize:'15px'}}/> 2.5% <span>From last month</span></h6>
                  </div>

                  <div className="card2">
                        <p>Car</p>
                        <h4>350</h4>
                        <h6><CallReceivedIcon style={{fontSize:'15px'}}/>0.5% <span>From last month</span></h6>
                  </div>

                  <div className="card2">
                        <p>Job</p>
                        <h4>300</h4>
                        <h6> <CallReceivedIcon style={{fontSize:'15px'}}/> 0.5% <span>From last month</span></h6>
                  </div>

                  <div className="card2">
                        <p>Panel Average</p>
                        <h4>4.8</h4>
                        <h5> <CallMadeIcon  style={{fontSize:'15px'}}/> 1% <span>From last month</span></h5>
                  </div>
            </div>

            <div className='bars'>
            <Charts/>

            <div>
            <BarCharts/>
            </div>

            </div>
          </div>
          </div>
            </Col>
        </Row>
      </div>

           

    </div>
  )
}

export default Dashboard
