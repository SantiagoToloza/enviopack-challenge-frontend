import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalogo from './pages/Catalago';
import Carrito from './pages/Carrito';
import Sucess from './pages/Sucess';
import Error from './pages/Error';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/cart" element={<Carrito />} />
        <Route path="/success" element={<Sucess />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
}