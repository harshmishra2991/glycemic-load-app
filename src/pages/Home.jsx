import React, { useState } from 'react';
import FoodInput from '../components/FoodInput';
import ResultCard from '../components/ResultCard';
import Disclaimer from '../components/Disclaimer';

import GLReference from '../components/GLReference';

const Home = () => {
    const [calculationResult, setCalculationResult] = useState(null);
    const [currentFoodName, setCurrentFoodName] = useState('');

    const calculateGL = (food, quantity, unit) => {
        let weightInGrams = quantity;
        let assumptionNote = '';

        // Conversion Logic
        switch (unit) {
            case 'g':
            case 'ml':
                weightInGrams = quantity;
                break;
            case 'cup':
                weightInGrams = quantity * 150;
                assumptionNote = `Assumed 1 Cup ≈ 150g`;
                break;
            case 'bowl':
                weightInGrams = quantity * 150;
                assumptionNote = `Assumed 1 Bowl/Katori ≈ 150g`;
                break;
            case 'piece':
                if (food.name.toLowerCase().includes('roti')) { weightInGrams = quantity * 40; assumptionNote = `Assumed 1 Roti ≈ 40g`; }
                else if (food.name.toLowerCase().includes('bread')) { weightInGrams = quantity * 30; assumptionNote = `Assumed 1 Slice ≈ 30g`; }
                else if (food.name.toLowerCase().includes('egg')) { weightInGrams = quantity * 50; assumptionNote = `Assumed 1 Egg ≈ 50g`; }
                else if (food.name.toLowerCase().includes('apple')) { weightInGrams = quantity * 150; assumptionNote = `Assumed 1 Apple ≈ 150g`; }
                else if (food.name.toLowerCase().includes('banana')) { weightInGrams = quantity * 120; assumptionNote = `Assumed 1 Banana ≈ 120g`; }
                else if (food.name.toLowerCase().includes('idli')) { weightInGrams = quantity * 60; assumptionNote = `Assumed 1 Idli ≈ 60g`; }
                else if (food.name.toLowerCase().includes('dosa')) { weightInGrams = quantity * 80; assumptionNote = `Assumed 1 Dosa ≈ 80g`; }
                else {
                    weightInGrams = quantity * 50;
                    assumptionNote = `Assumed 1 Piece ≈ 50g`;
                }
                break;
            default:
                weightInGrams = quantity;
        }

        const totalCarbs = (food.carbsPer100g / 100) * weightInGrams;
        const gl = (food.gi * totalCarbs) / 100;

        let severity = 'low';
        if (gl >= 11 && gl <= 19) severity = 'medium';
        if (gl >= 20) severity = 'high';

        setCalculationResult({ gl, severity, assumptionNote });
        setCurrentFoodName(food.name);
    };

    return (
        <div>


            <FoodInput onCalculate={calculateGL} />

            <ResultCard result={calculationResult} foodName={currentFoodName} />

            <GLReference />

            <Disclaimer />

            {/* Calculator SEO Content */}
            <div style={{ marginTop: '60px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                <h2 style={sectionHeader}>What Is Glycemic Load?</h2>
                <p className="text-sm">
                    Glycemic load (GL) measures how much a serving of food is likely to raise blood sugar levels.
                    Unlike glycemic index, glycemic load considers both the quality and quantity of carbohydrates in a serving.
                </p>

                <h2 style={sectionHeader}>How This Glycemic Load Calculator Works</h2>
                <p className="text-sm">
                    This calculator estimates glycemic load based on the food entered, the quantity provided, and
                    standard glycemic index values from published nutrition databases. Results are presented as a range
                    to reflect real-world variability.
                </p>

                <h2 style={sectionHeader}>Important Note on Accuracy</h2>
                <p className="text-sm">
                    Actual blood sugar response varies by cooking method, ingredients, portion size, and individual metabolism.
                    This tool is intended for educational use and decision support, not medical diagnosis.
                </p>
            </div>
        </div>
    );
};

const sectionHeader = {
    fontSize: '18px',
    color: 'var(--color-text-primary)',
    marginBottom: '10px',
    marginTop: '30px',
    fontWeight: '600'
};

export default Home;
