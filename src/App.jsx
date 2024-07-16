import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
// import About from './pages/About';
import MainLayout from './layouts/MainLayout/MainLayout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
