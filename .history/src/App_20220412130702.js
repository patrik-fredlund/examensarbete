import './App.css';
import { Navbar } from './components/Navbar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Router>
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
