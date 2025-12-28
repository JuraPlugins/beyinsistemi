import { useState } from 'react';
import { brainRegions } from '../data/brainRegions';
import DetailModal from './DetailModal';
import DevelopmentSlider from './DevelopmentSlider';
import brainImage from '../assets/brain.png';
import './Brain.css';

export default function Brain() {
    const [hoveredRegion, setHoveredRegion] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState(null);

    const handleRegionClick = (region) => {
        setSelectedRegion(region);
    };

    const closeModal = () => {
        setSelectedRegion(null);
    };

    // Beyin bölgelerinin konumları (yüzde olarak)
    // Görsel: sol taraftan bakış, ön taraf solda
    const regionPositions = {
        prefrontal: { top: '25%', left: '15%', width: '28%', height: '35%' },
        parietal: { top: '12%', left: '40%', width: '25%', height: '30%' },
        temporal: { top: '50%', left: '25%', width: '30%', height: '28%' },
        hippocampus: { top: '55%', left: '45%', width: '15%', height: '15%' },
        amygdala: { top: '52%', left: '35%', width: '12%', height: '12%' },
        insula: { top: '20%', left: '62%', width: '22%', height: '35%' },
    };

    const getRegionById = (id) => brainRegions.find(r => r.id === id);

    return (
        <div className="brain-container">
            <h1 className="main-title">
                <span className="title-icon">🧠</span>
                BENLİK ALGISI ve BEYİN
                <span className="title-icon">✨</span>
            </h1>
            <p className="subtitle">Beyin bölgelerine tıklayarak detayları keşfedin</p>

            <div className="brain-wrapper">
                <div className="brain-image-container">
                    <img src={brainImage} alt="Beyin" className="brain-image" />

                    {/* Interactive overlays for each region */}
                    {Object.entries(regionPositions).map(([id, pos]) => {
                        const region = getRegionById(id);
                        if (!region) return null;

                        return (
                            <div
                                key={id}
                                className={`brain-region-overlay ${hoveredRegion === id ? 'hovered' : ''}`}
                                style={{
                                    top: pos.top,
                                    left: pos.left,
                                    width: pos.width,
                                    height: pos.height,
                                    '--region-color': region.color,
                                }}
                                onMouseEnter={() => setHoveredRegion(id)}
                                onMouseLeave={() => setHoveredRegion(null)}
                                onClick={() => handleRegionClick(region)}
                            >
                                <div className="region-tooltip">
                                    <span className="tooltip-icon">{region.icon}</span>
                                    <span className="tooltip-name">{region.name}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Legend */}
                <div className="legend">
                    <h3>Beyin Bölgeleri</h3>
                    <p className="legend-hint">Tıklayarak detayları görün</p>
                    {brainRegions.map(region => (
                        <div
                            key={region.id}
                            className={`legend-item ${hoveredRegion === region.id ? 'legend-active' : ''}`}
                            onMouseEnter={() => setHoveredRegion(region.id)}
                            onMouseLeave={() => setHoveredRegion(null)}
                            onClick={() => handleRegionClick(region)}
                        >
                            <span
                                className="legend-color"
                                style={{ backgroundColor: region.color }}
                            />
                            <span className="legend-icon">{region.icon}</span>
                            <span className="legend-name">{region.name}</span>
                        </div>
                    ))}
                </div>

                {/* Development Slider */}
                <DevelopmentSlider />
            </div>

            {selectedRegion && (
                <DetailModal region={selectedRegion} onClose={closeModal} />
            )}
        </div>
    );
}
