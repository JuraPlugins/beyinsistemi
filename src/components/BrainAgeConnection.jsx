import { useState, useMemo } from 'react';
import { brainAgeData, getBrainDataByAge, regionNames } from '../data/brainAgeData';
import brainImage from '../assets/brain.png';
import './BrainAgeConnection.css';

export default function BrainAgeConnection() {
    const [currentAge, setCurrentAge] = useState(0);
    const currentData = useMemo(() => getBrainDataByAge(currentAge), [currentAge]);

    // Beyin bölgelerinin konumları
    const regionPositions = {
        prefrontal: { top: '25%', left: '15%', width: '28%', height: '35%' },
        parietal: { top: '12%', left: '40%', width: '25%', height: '30%' },
        temporal: { top: '50%', left: '25%', width: '30%', height: '28%' },
        hippocampus: { top: '55%', left: '45%', width: '15%', height: '15%' },
        amygdala: { top: '52%', left: '35%', width: '12%', height: '12%' },
        insula: { top: '20%', left: '62%', width: '22%', height: '35%' },
    };

    const regionColors = {
        prefrontal: '#FF6B6B',
        parietal: '#FFEAA7',
        temporal: '#96CEB4',
        hippocampus: '#45B7D1',
        amygdala: '#4ECDC4',
        insula: '#DDA0DD'
    };

    const isRegionActive = (regionId) => currentData.activeRegions.includes(regionId);

    return (
        <div className="brain-age-container">
            <h1 className="page-title">
                <span className="title-icon">🔗</span>
                Beyin-Yaş Bağlantısı
            </h1>
            <p className="page-subtitle">
                Her yaşta hangi beyin bölgelerinin aktif olarak geliştiğini keşfedin
            </p>

            <div className="brain-age-content">
                {/* Age Slider */}
                <div className="age-control-panel">
                    <div className="age-display-large">
                        <span className="age-value">{currentAge}</span>
                        <span className="age-unit">yaş</span>
                    </div>

                    <input
                        type="range"
                        min="0"
                        max="80"
                        value={currentAge}
                        onChange={(e) => setCurrentAge(parseInt(e.target.value))}
                        className="horizontal-age-slider"
                    />

                    <div className="stage-badge" style={{ backgroundColor: currentData.color }}>
                        {currentData.stageName}
                    </div>

                    <p className="stage-description">{currentData.description}</p>
                </div>

                {/* Brain Visual */}
                <div className="brain-visual-section">
                    <div className="brain-image-wrapper">
                        <img src={brainImage} alt="Beyin" className="brain-age-image" />

                        {Object.entries(regionPositions).map(([id, pos]) => (
                            <div
                                key={id}
                                className={`brain-region-highlight ${isRegionActive(id) ? 'active pulse' : ''}`}
                                style={{
                                    top: pos.top,
                                    left: pos.left,
                                    width: pos.width,
                                    height: pos.height,
                                    '--region-color': regionColors[id],
                                }}
                            >
                                {isRegionActive(id) && (
                                    <div className="region-label">
                                        {regionNames[id]}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Regions Info */}
                <div className="active-regions-panel">
                    <h3>Aktif Gelişen Bölgeler</h3>
                    <div className="regions-list">
                        {currentData.activeRegions.map((regionId) => (
                            <div
                                key={regionId}
                                className="region-card"
                                style={{ '--card-color': regionColors[regionId] }}
                            >
                                <div className="region-card-header">
                                    <span
                                        className="region-dot"
                                        style={{ backgroundColor: regionColors[regionId] }}
                                    ></span>
                                    <h4>{regionNames[regionId]}</h4>
                                </div>
                                <p>{currentData.details[regionId]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Age Period Indicators */}
            <div className="period-indicators">
                {brainAgeData.map((period) => (
                    <button
                        key={period.ageRange}
                        className={`period-button ${currentData.ageRange === period.ageRange ? 'active' : ''}`}
                        style={{ '--period-color': period.color }}
                        onClick={() => setCurrentAge(parseInt(period.ageRange.split('-')[0]) || 65)}
                    >
                        <span className="period-range">{period.ageRange}</span>
                        <span className="period-name">{period.stageName}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
