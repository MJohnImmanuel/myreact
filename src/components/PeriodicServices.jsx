import React from 'react'
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import GroupIcon from '@mui/icons-material/Group';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

// import {periodicData} from './Data/periodic';
function PeriodicServices() {

  return (
    <div>
      <div>
      <Row>
      <Col sm={2} className='dash'>
            <Link to="/dashboard" style={{textDecoration:'none', color:'white'}}><h5><TrendingUpIcon style={{color:'#9d9faa'}} /> Dashboard </h5></Link>
            <h5><InsertChartIcon  style={{color:'#9d9faa'}}/> Insurance</h5>
            <h5> <GroupIcon style={{color:'#9d9faa'}} /> Costumer </h5>
            <h5> <DirectionsCarIcon style={{color:'#9d9faa'}}/> Car </h5>
            </Col>

        

        <Col sm={10}>
        <div className='maincard'>
        <h1>New service page</h1>
        </div>
        </Col>
      </Row>
    </div>
    </div>
  )
}

export default PeriodicServices
