import React, { useState } from 'react';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import About from './about/about';
import './App.css';
import MenuComponent from './component/menuComponent';
import Home from './home/home';
import Skill from './skill/skill';
import Contact from './contact';
import ErrorBoundary from './ErrorBoundary';

function App() {
    const [isHighContrast, setIsHighContrast] = useState(false);

    const toggleContrast = () => {
        setIsHighContrast(!isHighContrast);
        document.body.classList.toggle('high-contrast', !isHighContrast);
    };

    return (
        <div className={isHighContrast ? 'high-contrast' : ''}>
            <button onClick={toggleContrast} className="btn btn-contrast">
                Toggle High Contrast
            </button>
            <Router>
                <MenuComponent />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/abolt" element={<About />} />
                    <Route path="/skill" element={<Skill />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
