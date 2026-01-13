import React from 'react';

const Contact = () => {
    return (
        <div style={{ padding: '20px', lineHeight: '1.8', color: 'var(--color-text-secondary)', textAlign: 'center' }}>
            <h1 className="text-center" style={{ marginBottom: '30px', color: 'var(--color-text-primary)' }}>Contact</h1>

            <p>
                If you have questions, feedback, or suggestions about this website, you can reach us at:
            </p>

            <h3 style={{ margin: '20px 0', color: 'var(--color-accent)' }}>
                glycemicloadcalculator@gmail.com
            </h3>

            <p>
                We aim to respond within a reasonable timeframe.
            </p>
        </div>
    );
};

export default Contact;
