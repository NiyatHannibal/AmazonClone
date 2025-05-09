import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Home from './Pages/home/Home';
import CheckOut from './Components/checkout/CheckOut';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
      <Navbar />
      <Home />
    </>} />
        <Route path="/checkout" element={<> <Navbar />
        <CheckOut/> </>} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </Router>
   
  )
}

export default App
