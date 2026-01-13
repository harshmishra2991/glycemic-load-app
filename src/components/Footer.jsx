import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            marginTop: '60px',
            paddingTop: '20px',
            borderTop: '1px solid #334155',
            textAlign: 'center',
            paddingBottom: '40px'
        }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <a href="/" style={linkStyle}>Calculator</a>
                <a href="/about" style={linkStyle}>About</a>
                <a href="/disclaimer" style={linkStyle}>Disclaimer</a>
                <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a>
                <a href="/contact" style={linkStyle}>Contact</a>
            </div>
            <p className="text-muted text-sm" style={{ opacity: 0.5 }}>
                &copy; {new Date().getFullYear()} Glycemic Load App. All rights reserved.
            </p>
        </footer>
    );
};

const linkStyle = {
    color: 'var(--color-text-secondary)',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.2s'
};

export default Footer;
