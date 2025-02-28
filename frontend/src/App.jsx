 
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import PlaceOrder from "./pages/PlaceOrder"
import Order from "./pages/Orders"
import Navbar from "./components/Navbar"
function App() {
 
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">


<Navbar/>
<Routes>

<Route element={<Home />} path="/" />
<Route element={<Collection />} path="/collection" />
<Route element={<About />} path="/about" />
<Route element={<Contact />} path="/contact" />
<Route element={<Product />} path="/product/:productId" />
<Route element={<Cart />} path="/cart" />
<Route element={<Login />} path="/login" />
<Route element={<PlaceOrder />} path="/placeOrder" />
<Route element={<Order />} path="/orders" />


</Routes>


     </div>
  )
}

export default App
