import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import Navbar from './components/Navbar';

const App = () => {
  return (
    (
      <div className='App'>
        <h1>Examensarbete</h1>
      </div>
    ),
    (
      <Router>
        <Navbar />
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
      </Router>
    )
  );
};

export default App;
