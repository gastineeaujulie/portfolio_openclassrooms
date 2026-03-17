import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import Project from './pages/Project.jsx';
import Contact from './sections/Contact.jsx';
import About from './sections/About.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
