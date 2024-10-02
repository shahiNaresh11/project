import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Dashboard from './page/Dashboard';

import Card from './components/Card';



import Profile from './page/Profile';
import Family from './page/family/Family';
import Change from './page/Change';
import CreateFamily from './page/family/CreateFamily';
import EditFamily from './page/family/EditFamily';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/family' element={<Family />} />
        <Route path='/card/:id' element={<Card />} />
        <Route path='/create-family' element={< CreateFamily />} />
        <Route path='/family-edit/:id' element={<EditFamily />} />
        <Route path='/change/:id' element={<Change />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;

