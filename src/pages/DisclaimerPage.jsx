import React from 'react';

const DisclaimerPage = () => {
    return (
        <div style={{ padding: '20px', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
            <h1 className="text-center" style={{ marginBottom: '30px', color: 'var(--color-text-primary)' }}>Disclaimer</h1>

            <p>
                The information provided on this website is for educational and informational purposes only and is not intended as medical advice.
            </p>

            <p>
                Glycemic load values shown on this site are estimates based on standard nutritional data and assumptions about
                portion size and preparation. Actual blood sugar responses may vary significantly between individuals.
            </p>

            <p>
                This website does not provide medical diagnosis, treatment, or individualized health recommendations.
                Always seek the advice of a qualified healthcare professional regarding any medical condition or dietary changes.
            </p>

            <p>
                Use of this website and its tools is at your own risk.
            </p>
        </div>
    );
};

export default DisclaimerPage;
