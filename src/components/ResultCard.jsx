import React from 'react';

const ResultCard = ({ result, foodName }) => {
    if (!result) return null;

    const { gl, severity } = result;

    let color = 'var(--color-success)';
    let label = 'Low';

    if (severity === 'medium') {
        color = 'var(--color-warning)';
        label = 'Medium';
    } else if (severity === 'high') {
        color = 'var(--color-danger)';
        label = 'High';
    }

    return (
        <div className="card" style={{ textAlign: 'center', borderTop: `4px solid ${color}` }}>
            <h3 className="text-muted">Estimated Glycemic Load</h3>
            <div style={{ fontSize: '48px', fontWeight: '800', margin: '16px 0', color: color }}>
                {Math.round(gl)}
            </div>
            <div style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '20px',
                backgroundColor: color,
                color: '#000',
                fontWeight: 'bold',
                fontSize: '14px'
            }}>
                {label} Impact
            </div>
            <p className="text-sm text-muted mt-4">
                For {foodName}
            </p>
            {result.assumptionNote && (
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)', fontStyle: 'italic', marginTop: '8px' }}>
                    ({result.assumptionNote})
                </p>
            )}
        </div>
    );
};

export default ResultCard;
