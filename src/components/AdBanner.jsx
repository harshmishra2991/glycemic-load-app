import React from 'react';

const AdBanner = ({ slotId, format = 'auto' }) => {
    return (
        <div className="card text-center" style={{ padding: '20px', borderStyle: 'dashed', borderColor: '#334155' }}>
            <p className="text-sm text-muted">Advertisement Space</p>
            {/* 
        This is a placeholder for Google AdSense or similar ad networks.
        In production, you would place the <ins> tag here using the slotId.
      */}
            <div style={{
                background: '#1e293b',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '10px 0',
                borderRadius: 'var(--radius-md)'
            }}>
                <span style={{ opacity: 0.3 }}>Ads by Google</span>
            </div>
        </div>
    );
};

export default AdBanner;
