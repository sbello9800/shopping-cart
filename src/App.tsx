import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import './styles/style.css'


function App() {

  return (
    <ShoppingCartProvider>
    <Navbar/>
    <div className="container-fluid" id="prContainer">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Store" element={<Store/>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes>
    </div>
    </ShoppingCartProvider>
  )
}

export default App
