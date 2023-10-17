import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route index element={<Home />} />
        <Route path='/Product' element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

