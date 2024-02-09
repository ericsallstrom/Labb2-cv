import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CV from './components/CV';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cv" element={<CV />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
