import React from 'react';

const About = () => {
    return (
        <div style={{ padding: '20px', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
            <h1 className="text-center" style={{ marginBottom: '30px', color: 'var(--color-text-primary)' }}>About This Website</h1>

            <p>
                This website was created to help people make more informed food choices by understanding glycemic load in a practical, real-world way.
            </p>

            <p>
                Most nutrition tools either oversimplify blood sugar impact or rely on rigid databases that do not reflect
                how people actually eat. This tool focuses on realistic portions, common foods, and transparent assumptions.
            </p>

            <p>
                The glycemic load estimates provided here are based on published glycemic index data, standard food composition
                tables, and widely accepted nutrition formulas. Wherever assumptions are made, they are clearly disclosed.
            </p>

            <p>
                This website is designed for educational purposes only. It does not replace professional medical advice, diagnosis, or treatment.
            </p>

            <p>
                If you are managing diabetes, prediabetes, or other metabolic conditions, consult a qualified healthcare professional
                for personalized guidance.
            </p>
        </div>
    );
};

export default About;
