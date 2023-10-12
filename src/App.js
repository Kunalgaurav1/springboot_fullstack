import React from 'react';
import './App.css';
import { Button, Container, Row, Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import Addcourse from './components/Addcourse';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />
        <Container>
          <Row className='my-2'>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path='/home' element={<Home />} />
                <Route path="/add-course" element={<Addcourse />} />
                <Route path="/view-course" element={<Allcourses />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App;
