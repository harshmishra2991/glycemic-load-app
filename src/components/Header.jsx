import React from 'react';

const Header = () => {
    return (
        <header style={{
            textAlign: 'center',
            marginBottom: '40px',
            paddingTop: '20px'
        }}>
            <div style={{
                fontSize: '40px',
                marginBottom: '10px'
            }}>🥗</div>
            <h1 style={{
                background: 'linear-gradient(to right, #38bdf8, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '2.5rem'
            }}>
                Glycemic Load Calc
            </h1>
            <p className="text-muted">Know what you eat.</p>
        </header>
    );
};

export default Header;
