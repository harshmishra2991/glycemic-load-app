import React, { useState, useEffect } from 'react';
import { foodData } from '../data/foodData';

const FoodInput = ({ onCalculate }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('g');
    const [selectedFood, setSelectedFood] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (searchTerm.length > 1 && !selectedFood) {
            const filtered = foodData.filter(f =>
                f.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    }, [searchTerm, selectedFood]);

    const handleSelectFood = (food) => {
        setSelectedFood(food);
        setSearchTerm(food.name);
        setSuggestions([]);
    };

    const handleCalculate = () => {
        if (selectedFood && quantity > 0) {
            onCalculate(selectedFood, Number(quantity), unit);
        }
    };

    const clearSelection = () => {
        setSelectedFood(null);
        setSearchTerm('');
        setSuggestions([]);
    };

    return (
        <div className="card">
            <h2 className="mb-2">🥞 Food Details</h2>

            {/* Search Input */}
            <div>
                <label>Food Item <span>*</span></label>
                <div style={{ position: 'relative' }}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            if (selectedFood) setSelectedFood(null);
                        }}
                        placeholder="Search e.g. Roti, Rice, Pizza..."
                    />
                    {selectedFood && (
                        <button
                            onClick={clearSelection}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '18px',
                                background: 'transparent',
                                border: 'none',
                                color: '#aaa',
                                cursor: 'pointer'
                            }}
                        >✕</button>
                    )}

                    {suggestions.length > 0 && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            background: '#1e293b',
                            border: '1px solid #334155',
                            borderRadius: '8px',
                            zIndex: 10,
                            maxHeight: '200px',
                            overflowY: 'auto',
                            marginTop: '-10px'
                        }}>
                            {suggestions.map((food, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSelectFood(food)}
                                    style={{
                                        padding: '12px',
                                        cursor: 'pointer',
                                        borderBottom: '1px solid #33415540'
                                    }}
                                    onMouseOver={(e) => e.target.style.background = '#334155'}
                                    onMouseOut={(e) => e.target.style.background = 'transparent'}
                                >
                                    <span style={{ fontWeight: 'bold' }}>{food.name}</span>
                                    <span style={{ float: 'right', fontSize: '12px', opacity: 0.7 }}>
                                        {food.cuisine} | {food.state}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Quantity Section */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                    <label>Unit <span style={{ color: 'var(--color-danger)' }}>*</span></label>
                    <select
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                        style={{ marginBottom: '16px', height: '45px' }}
                    >
                        <option value="g">Grams (g)</option>
                        <option value="ml">Millilitres (ml)</option>
                        <option value="cup">Cup</option>
                        <option value="bowl">Bowl / Katori</option>
                        <option value="piece">Piece / Count</option>
                    </select>
                </div>

                <div style={{ flex: 1 }}>
                    <label>Quantity <span style={{ color: 'var(--color-danger)' }}>*</span></label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="e.g. 1.5"
                        step="0.1"
                        min="0"
                        style={{ height: '45px' }}
                    />
                </div>
            </div>

            <button className="primary-btn" onClick={handleCalculate} disabled={!selectedFood || !quantity}>
                Calculate Glycemic Load
            </button>

        </div>
    );
};

export default FoodInput;
