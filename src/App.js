import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CV from './pages/CV';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navigation from './components/nav/Navigation';
import Footer from './components/footer/Footer';
import ModalPopup from './components/popups/ModalPopup';
import './App.css';

function App() {
    const defaultBgColor = '#e2d4ba';
    const [newBgColor, setNewBgColor] = useState(defaultBgColor);

    return (
        <Router>
            <div className="site-wrapper" style={{ backgroundColor: newBgColor }}>
                <header>
                    <Navigation onBgColorChange={setNewBgColor} />
                </header>
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/cv" element={<CV />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                    {<ModalPopup />}
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </Router>
    );
}

export default App;
