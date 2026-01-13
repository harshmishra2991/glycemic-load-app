import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // We might need to extract Header
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import DisclaimerPage from './pages/DisclaimerPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: '40px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
