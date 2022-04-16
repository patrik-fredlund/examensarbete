import '../src/styles/App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { CV } from './pages/CV';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { Work } from './pages/Work';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import BackgroundImage from './Images/bg.png';

 { PageContainer } from './styles/GlobalStyles ';

const App = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <PageContainer>

  
    <div className='PageContainer'>
      <div className='ContentWrap'>
        <Router>
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path='Work/*' element={<Work />} />
            <Route path='CV' element={<CV />} />
          </Routes>
        </Router>
        {/*     <>
          {
            <img
              src={BackgroundImage}
              className='background'
              alt='Patrik profile'
            />
          }
        </> */}
        <div>
          <Footer />
        </div>
      </div>
    </div>
    </PageContainer>
  );
};

export default App;
