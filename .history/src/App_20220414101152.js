import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { CV } from './pages/CV';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import Sidebar from './Sidebar/Sidebar';

import { Work } from './pages/Work';

const App = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <Router>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
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
