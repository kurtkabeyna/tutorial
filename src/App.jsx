import React from 'react';
import './components/PeoplaAlsoAsk.css';
import Home from './pages/Home';
import Register from './pages/Register';  // Import the Register component
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
