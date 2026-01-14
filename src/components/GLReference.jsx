import React from 'react';

const GLReference = () => {
    return (
        <div className="card" style={{ marginTop: '30px' }}>
            <h3 style={{ marginBottom: '16px', fontSize: '1.25rem' }}>Understanding Glycemic Load</h3>
            <p className="text-sm text-muted" style={{ marginBottom: '20px' }}>
                Glycemic Load (GL) measures how much a food will raise a person's blood glucose level.
                It accounts for both the quality (GI) and quantity (Carbs) of carbohydrates.
                <br /><br />
                <strong>Formula:</strong> <code>GL = (GI × Carbs in grams) / 100</code>
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', textAlign: 'center' }}>
                {/* Low */}
                <div style={{
                    background: 'rgba(74, 222, 128, 0.1)',
                    border: '1px solid var(--color-success)',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px'
                }}>
                    <div style={{ color: 'var(--color-success)', fontWeight: 'bold', fontSize: '18px' }}>0 - 10</div>
                    <div style={{ fontWeight: '600', marginTop: '4px' }}>Low</div>
                    <div className="text-sm text-muted">Good for daily intake</div>
                </div>

                {/* Medium */}
                <div style={{
                    background: 'rgba(251, 191, 36, 0.1)',
                    border: '1px solid var(--color-warning)',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px'
                }}>
                    <div style={{ color: 'var(--color-warning)', fontWeight: 'bold', fontSize: '18px' }}>11 - 20</div>
                    <div style={{ fontWeight: '600', marginTop: '4px' }}>Medium</div>
                    <div className="text-sm text-muted">Consume in moderation</div>
                </div>

                {/* High */}
                <div style={{
                    background: 'rgba(248, 113, 113, 0.1)',
                    border: '1px solid var(--color-danger)',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px'
                }}>
                    <div style={{ color: 'var(--color-danger)', fontWeight: 'bold', fontSize: '18px' }}>&gt; 20</div>
                    <div style={{ fontWeight: '600', marginTop: '4px' }}>High</div>
                    <div className="text-sm text-muted">Limit or avoid</div>
                </div>
            </div>
        </div>
    );
};

export default GLReference;
