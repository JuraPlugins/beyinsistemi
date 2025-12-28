import { useState, useMemo } from 'react';
import { developmentStages, getStageByAge } from '../data/developmentStages';
import './DevelopmentSlider.css';

export default function DevelopmentSlider() {
    const [currentAge, setCurrentAge] = useState(0);
    const currentStage = useMemo(() => getStageByAge(currentAge), [currentAge]);

    const handleSliderChange = (e) => {
        setCurrentAge(parseInt(e.target.value));
    };

    return (
        <div className="development-slider-container">
            <h3 className="slider-title">
                <span className="slider-title-icon">👤</span>
                İnsan Gelişim Evreleri
            </h3>
            <p className="slider-hint">Yukarı kaydırarak yaşları keşfedin</p>

            <div className="slider-content">
                {/* Vertical slider */}
                <div className="slider-track-container">
                    <input
                        type="range"
                        min="0"
                        max="80"
                        value={currentAge}
                        onChange={handleSliderChange}
                        className="vertical-slider"
                        aria-label="Yaş seçici"
                    />

                    <div className="current-age-display">
                        <span className="age-number">{currentAge}</span>
                        <span className="age-label">yaş</span>
                    </div>
                </div>

                {/* Stage info card */}
                <div
                    className="stage-info-card"
                    style={{ '--stage-color': currentStage.color }}
                >
                    <div className="stage-header">
                        <span className="stage-icon">{currentStage.icon}</span>
                        <div className="stage-title-group">
                            <h4 className="stage-name">{currentStage.name}</h4>
                            <span className="stage-age-range">{currentStage.ageRange}</span>
                        </div>
                    </div>

                    <p className="stage-description">{currentStage.description}</p>

                    <div className="stage-developments">
                        <h5>Psikolojik Gelişim</h5>
                        <ul>
                            {currentStage.psychologicalDevelopment.slice(0, 4).map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="stage-milestones">
                        <h5>Önemli Dönüm Noktaları</h5>
                        <div className="milestone-tags">
                            {currentStage.keyMilestones.map((milestone, index) => (
                                <span key={index} className="milestone-tag">
                                    {milestone}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Stage indicators */}
            <div className="stage-indicators">
                {developmentStages.map((stage) => (
                    <div
                        key={stage.id}
                        className={`stage-indicator ${currentStage.id === stage.id ? 'active' : ''}`}
                        style={{ backgroundColor: stage.color }}
                        title={`${stage.name} (${stage.ageRange})`}
                        onClick={() => setCurrentAge(stage.minAge)}
                    >
                        <span className="indicator-icon">{stage.icon}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
