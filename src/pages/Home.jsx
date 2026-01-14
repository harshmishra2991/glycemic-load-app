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
                else if (food.name.toLowerCase().includes('dosa')) { weightInGrams = quantity * 120; assumptionNote = `Assumed 1 Medium Dosa ≈ 120g`; }
                else if (food.name.toLowerCase().includes('samosa')) { weightInGrams = quantity * 80; assumptionNote = `Assumed 1 Samosa ≈ 80g`; }
                else if (food.name.toLowerCase().includes('kachori')) { weightInGrams = quantity * 75; assumptionNote = `Assumed 1 Kachori ≈ 75g`; }
                else if (food.name.toLowerCase().includes('vada')) { weightInGrams = quantity * 60; assumptionNote = `Assumed 1 Vada ≈ 60g`; }
                else if (food.name.toLowerCase().includes('pakora')) { weightInGrams = quantity * 30; assumptionNote = `Assumed 1 Pakora ≈ 30g`; }
                else if (food.name.toLowerCase().includes('vada pav')) { weightInGrams = quantity * 120; assumptionNote = `Assumed 1 Vada Pav ≈ 120g`; }
                else if (food.name.toLowerCase().includes('momo')) { weightInGrams = quantity * 30; assumptionNote = `Assumed 1 Momo ≈ 30g`; }
                else if (food.name.toLowerCase().includes('gulab jamun')) { weightInGrams = quantity * 40; assumptionNote = `Assumed 1 Gulab Jamun ≈ 40g`; }
                else if (food.name.toLowerCase().includes('rasgulla')) { weightInGrams = quantity * 50; assumptionNote = `Assumed 1 Rasgulla ≈ 50g`; }
                else if (food.name.toLowerCase().includes('laddu')) { weightInGrams = quantity * 40; assumptionNote = `Assumed 1 Laddu ≈ 40g`; }
                else if (food.name.toLowerCase().includes('barfi')) { weightInGrams = quantity * 30; assumptionNote = `Assumed 1 Barfi ≈ 30g`; }
                else if (food.name.toLowerCase().includes('jalebi')) { weightInGrams = quantity * 30; assumptionNote = `Assumed 1 Jalebi ≈ 30g`; }
                else if (food.name.toLowerCase().includes('bhatura')) { weightInGrams = quantity * 80; assumptionNote = `Assumed 1 Bhatura ≈ 80g`; }
                else if (food.name.toLowerCase().includes('poori')) { weightInGrams = quantity * 30; assumptionNote = `Assumed 1 Poori ≈ 30g`; }
                else if (food.name.toLowerCase().includes('panipuri')) { weightInGrams = quantity * 15; assumptionNote = `Assumed 1 Panipuri ≈ 15g`; }
                else if (food.name.toLowerCase().includes('cookie')) { weightInGrams = quantity * 20; assumptionNote = `Assumed 1 Cookie ≈ 20g`; }
                else if (food.name.toLowerCase().includes('burger')) { weightInGrams = quantity * 200; assumptionNote = `Assumed 1 Burger ≈ 200g`; }
                else if (food.name.toLowerCase().includes('pizza')) { weightInGrams = quantity * 100; assumptionNote = `Assumed 1 Slice ≈ 100g`; }
                else if (food.name.toLowerCase().includes('donut')) { weightInGrams = quantity * 70; assumptionNote = `Assumed 1 Donut ≈ 70g`; }
                else if (food.name.toLowerCase().includes('spring roll')) { weightInGrams = quantity * 60; assumptionNote = `Assumed 1 Spring Roll ≈ 60g`; }
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
        if (gl > 10 && gl <= 20) severity = 'medium';
        if (gl > 20) severity = 'high';

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
