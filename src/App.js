import React from 'react'
import Login from './components/Login';
import Signup from './components/Signup';
import Dummy from './components/Dummy';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Charts from './components/Charts';
import Services from './components/Services';
import PeriodicServices from './components/PeriodicServices';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route ,BrowserRouter as Router,Routes} from 'react-router-dom';
import Carservices from './components/Carservices';
import BarCharts from './components/Barcharts';
import Allcars from './components/Allcars';
import Maruti from './components/Maruti';
import Hyundai from './components/Hyundai';
import Honda from './components/Honda';
import Tata from './components/Tata';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element= {<Login />} />
          <Route path='/Signup' element= {<Signup />} />
          <Route path='/dummy' element= {<Dummy />} />
          <Route path='/navbar' element= {<Navbar />} />
          <Route path='/dashboard' element= {<Dashboard />} />
          <Route path='/charts' element= {<Charts />} />
          <Route path='/services' element= {<Services />} />
          <Route path='/PeriodicServices' element= {<PeriodicServices/>} />
          <Route path='/Carservices' element= {<Carservices/>} />
          <Route path='/Barcharts' element= {<BarCharts/>} />
          <Route path='/Allcars' element= {<Allcars/>} />
          <Route path='/Maruti' element= {<Maruti/>} />
          <Route path='/Hyundai' element= {<Hyundai/>} />
          <Route path='/Honda' element= {<Honda/>} />
          <Route path='/Tata' element= {<Tata/>} />
        </Routes>
      </Router>
    </div>
  
  )
}

export default App
