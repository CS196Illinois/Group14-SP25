import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import About from './pages/About'; // ← NEW
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/about" element={<About />} /> {/* ← NEW */}
      </Routes>
    </Router>
  );
}

export default App;