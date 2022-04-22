import '../src/styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import { Wrapper } from './styles/GlobalStyles';
import BackgroundImage from './Images/bg.png';

//components
import { Navbar } from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

//pages
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Project1 } from './pages/Project1';
import { Work2 } from './pages/Work2';
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
            <Route path='Work' element={<Work />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='FreshkeeperProject' element={<FreshkeeperProject />} />
            {/* <Route path='Project1' element={<Project1 />} /> */}
            {/* lägg in alla dina raoutes här */}
          </Routes>
        </Router>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default App;
