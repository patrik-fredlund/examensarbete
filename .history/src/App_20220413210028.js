import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { CV } from './pages/CV';
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
        <Route path='CV' element={<CV />} />
      </Routes>
    </Router>
  );
};

export default App;
