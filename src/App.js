
// import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Second from './components/Second';
import Section from './components/Section';
import Testimonials from './components/Testimonials';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Repository from './components/Repository';


function App() {
  return (
  

    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<Section />} />
        <Route path="/about" element={<Testimonials />} />
        <Route path="/skills" element={<Second />} />
        <Route path="/project" element={<Repository />} />

      </Routes>

    </BrowserRouter>


  );
}

export default App;
