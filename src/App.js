import './App.css';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom";
import Stores from './components/Stores';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Veg_Pizza_item from './components/Veg_Pizza_item';
import Non_Veg_Pizza_Item from './components/Non_Veg_Pizza_Item';
import Slice from './components/Slice';
import Beverages from './components/Beverages';
import Snacks from './components/Snack';
import AddOns from './components/AddOns';
import Delivery from './components/Delivery';

function App() {
  return (
    <div className="h-full w-full">
      <NavBar/>
      <Routes>
        <Route path="/menu" element={<Menu/>} />
        <Route path="/store" element={<Stores/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/Veg_Pizza_item" element={<Veg_Pizza_item/>} />
        <Route path="/Non_Veg_Pizza_item" element={<Non_Veg_Pizza_Item/>} />
        <Route path="/Slice" element={<Slice/>} />
        <Route path="/Beverages" element={<Beverages/>} />
        <Route path="/Snack" element={<Snacks/>} />
        <Route path="/Addon" element={<AddOns/>} />
        <Route path="/delivery" element={<Delivery/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
