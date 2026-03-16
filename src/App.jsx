import { Routes, Route } from 'react-router-dom';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
