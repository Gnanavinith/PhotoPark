
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Shop from "./Pages/Shop";
import Frames from "./Pages/Frames";
import Customize from "./Pages/Customize";
import About from "./Pages/About";
import Contact from './Pages/Contact'
import Collection from "./Pages/Shop";
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Orders from './Pages/Orders'
import Navbar from './Components/Navbar'
import Acrylic from './Pages/ShopPages/Acrylic';
import Canvas from './Pages/ShopPages/Canvas';
import WoodenCutOuts from './Pages/ShopPages/WoodenCutOuts';
import BacklightFrames from './Pages/ShopPages/BacklightFrames';
import Order from './Pages/Order';






function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/customize" element={<Customize />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/frames" element={<Frames />} />            
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/orders" element={<Orders />} />

            {/* {ShopPage routes} */}

            <Route path="/acrylic" element={<Acrylic/>} />
            <Route path="/canvas" element={<Canvas/>} />
            <Route path="/woodenCutouts" element={<WoodenCutOuts/>} />
            <Route path="/backlight" element={<BacklightFrames/>} />

            {/* {Order Route} */}
            <Route path="/order" element={<Order/>} />


          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
