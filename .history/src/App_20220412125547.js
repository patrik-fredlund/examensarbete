import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
        </Switch>
      </Router>
    )
  );
};

export default App;
