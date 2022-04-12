import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' />
      </Routes>
    </Router>
  );
};

export default App;
