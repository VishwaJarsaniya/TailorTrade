import './App.css';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import Theme from './Theme';
import Dashboard from './tailor/Dashboard';
import Reviews from './tailor/Reviews';
import Home from './Home';
import LoginTailor from './tailor/LoginTailor';
import SignUpTailor from './tailor/SignUpTailor';
import LoginUser from './user/LoginUser';
import SignUpUser from './user/SignUpUser';
import AddNewOrder1 from './tailor/AddNewOrder1';
import AddNewOrder2 from './tailor/AddNewOrder2';
import TrackOrders from './tailor/TrackOrders';
import UserPage1 from './user/UserPage1';
import UserPage2 from './user/UserPage2';
import AddNewOrder from './user/AddNewOrder';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Router> 
        <Routes>
          
            <Route path="/" element={<Home/>} />
            <Route path="/tailor/login" element={<LoginTailor/>} />
            <Route path="/tailor/signup" element={<SignUpTailor/>} />
            <Route path="/user/login" element={<LoginUser/>} />
            <Route path="/user/signup" element={<SignUpUser/>} />

            {/*tailor routes*/}
            <Route path="/tailor/Dashboard" element={<Dashboard />} />
            <Route path="/tailor/AddNewOrder1" element={<AddNewOrder1 />} />
            <Route path="/tailor/AddNewOrder2" element={<AddNewOrder2 />} />
            <Route path="/tailor/Reviews" element={<Reviews />} />
            <Route path="/tailor/TrackOrders" element={<TrackOrders />} />

            {/*user routes*/}
            <Route path="/user/UserPage1" element={<UserPage1 />} />
            <Route path="/user/UserPage2" element={<UserPage2 />} />
            <Route path="/user/AddNewOrder" element={<AddNewOrder />} />

          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;