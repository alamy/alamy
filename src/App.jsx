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

function App() {
  return (
    <Router>
    <MenuComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abolt" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
