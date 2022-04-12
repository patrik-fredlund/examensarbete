import './App.css';
import { Navbar } from './components/Navbar';

import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

const App = () => {
  return (
    (
      <div className='App'>
        <Navbar />
        <h1>Examensarbete</h1>
      </div>
    ),
    (
      <Routes>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Routes>
    )
  );
};

export default App;
