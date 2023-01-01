import React from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Manage from './components/manage';
import Insights from './components/insights';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import Home from './components/home';
function App() {
  return (
    <div>  
        <Router>
          <Header/>
          <Routes>
              <Route path='' exact element={<Home/>}/>
              <Route path='manage' exact element={<Manage/>}/>
              <Route path='insights' exact element={<Insights/>}/>
              
          </Routes>
          <Footer/>
        </Router>
        
        
    </div>
  );
}

export default App;
