import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Navbar , Button} from 'react-bootstrap';
import LogoImg from './assets/logo.png'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';


import Home from './components/Home';
import Hospital from './components/Hospital';

function App() {

  const navigate = useNavigate('')

  return (
    <div>
        <Navbar className="bg-body-tertiary" style={{display: 'flex', justifyContent: 'space-between', padding:"20px 50px"}}>
          <Navbar.Brand onClick={() => navigate('/')} style={{fontStyle:"italic", fontWeight:"bold", fontSize:"35px", marginLeft:"2rem"}}>
            <img
              alt=""
              src={LogoImg}
              width="45"
              height="45"
              className="d-inline-block align-top"
            />{' '}
            MedStart
          </Navbar.Brand>
          
      </Navbar>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/hospital/:osm_id' element={<Hospital />}/>
      </Routes>
    </div>
  )
}

export default App
