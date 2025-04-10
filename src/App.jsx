import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Inventory from './components/Inventory/Inventory';
import HumanResource from './components/HumanResource/HumanResource.jsx';

function App() {

  return( 
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/humanResource" element={<HumanResource />} />
      </Routes>
  );
}

export default App;