import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </Router>
   
  )
}

export default App
