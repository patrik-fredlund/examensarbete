import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

//styles
import { Wrapper } from './styles/GlobalStyles';
import '../src/styles/App.css';

//components
import { Navbar } from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

//pages
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { FreshkeeperProject } from './pages/FreshkeeperProject';

const App = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <div>
      <Wrapper>
        <Router>
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Routes>
            <Route path='/*' element={<Home />} />
            <Route path='About/*' element={<About />} />
            <Route path='Work' element={<Home />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='FreshkeeperProject' element={<FreshkeeperProject />} />
          </Routes>
        </Router>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default App;
