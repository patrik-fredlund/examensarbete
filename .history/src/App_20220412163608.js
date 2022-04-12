import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { Work } from './pages/Work';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Work' element={<Work />} />
        <Route path='Contact' element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
