import React from 'react';

const Disclaimer = () => {
    return (
        <div style={{
            backgroundColor: 'rgba(251, 191, 36, 0.1)',
            border: '1px solid var(--color-warning)',
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            marginTop: '24px'
        }}>
            <h3 style={{ color: 'var(--color-warning)', fontSize: '16px', marginBottom: '8px' }}>
                ⚠️ Important Disclaimer
            </h3>
            <p className="text-sm text-muted" style={{ margin: 0 }}>
                The Glycemic Load (GL) values provided by this application are <strong>estimated ranges</strong> based on common food data.
                Actual values may vary depending on cooking method, ripeness, brand, and portion size.
                This tool is for informational purposes only and is <strong>not medical advice</strong>.
                Please consult a healthcare professional for dietary decisions.
            </p>
        </div>
    );
};

export default Disclaimer;
