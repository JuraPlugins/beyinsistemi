import { useState, useMemo } from 'react';
import { developmentStages, getStageByAge } from '../data/developmentStages';
import './AgeComparison.css';

export default function AgeComparison() {
    const [age1, setAge1] = useState(5);
    const [age2, setAge2] = useState(15);

    const stage1 = useMemo(() => getStageByAge(age1), [age1]);
    const stage2 = useMemo(() => getStageByAge(age2), [age2]);

    const renderAgePanel = (age, setAge, stage, panelId) => (
        <div className="age-panel" style={{ '--panel-color': stage.color }}>
            <div className="panel-header">
                <span className="panel-icon">{stage.icon}</span>
                <div className="panel-age">
                    <input
                        type="number"
                        min="0"
                        max="80"
                        value={age}
                        onChange={(e) => setAge(Math.min(80, Math.max(0, parseInt(e.target.value) || 0)))}
                        className="age-input"
                    />
                    <span className="age-label">yaş</span>
                </div>
            </div>

            <input
                type="range"
                min="0"
                max="80"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value))}
                className="panel-slider"
            />

            <div className="stage-badge" style={{ backgroundColor: stage.color }}>
                {stage.name}
            </div>
            <p className="stage-range">{stage.ageRange}</p>

            <p className="panel-description">{stage.description}</p>

            <div className="panel-section">
                <h4>🧠 Psikolojik Gelişim</h4>
                <ul>
                    {stage.psychologicalDevelopment.slice(0, 3).map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="panel-section">
                <h4>🎯 Dönüm Noktaları</h4>
                <div className="milestones-wrap">
                    {stage.keyMilestones.map((milestone, idx) => (
                        <span key={idx} className="milestone-chip">{milestone}</span>
                    ))}
                </div>
            </div>
        </div>
    );

    // Find differences and similarities
    const getDifferences = () => {
        if (stage1.id === stage2.id) {
            return null;
        }

        return {
            stage1Only: stage1.keyMilestones,
            stage2Only: stage2.keyMilestones,
        };
    };

    const differences = getDifferences();

    return (
        <div className="comparison-container">
            <h1 className="page-title">
                <span className="title-icon">⚖️</span>
                Yaş Karşılaştırma
            </h1>
            <p className="page-subtitle">
                İki farklı yaşın psikolojik özelliklerini karşılaştırın
            </p>

            <div className="comparison-content">
                {renderAgePanel(age1, setAge1, stage1, 1)}

                <div className="comparison-divider">
                    <div className="vs-badge">VS</div>
                    {stage1.id !== stage2.id ? (
                        <div className="difference-indicator">
                            <span className="diff-years">
                                {Math.abs(age2 - age1)} yıl fark
                            </span>
                        </div>
                    ) : (
                        <div className="same-stage-badge">
                            Aynı Dönem
                        </div>
                    )}
                </div>

                {renderAgePanel(age2, setAge2, stage2, 2)}
            </div>

            {/* Quick Select */}
            <div className="quick-select-section">
                <h3>Hızlı Karşılaştırmalar</h3>
                <div className="quick-buttons">
                    <button onClick={() => { setAge1(2); setAge2(15); }}>
                        Bebeklik vs Ergenlik
                    </button>
                    <button onClick={() => { setAge1(15); setAge2(35); }}>
                        Ergenlik vs Yetişkinlik
                    </button>
                    <button onClick={() => { setAge1(25); setAge2(60); }}>
                        Genç vs Orta Yaş
                    </button>
                    <button onClick={() => { setAge1(5); setAge2(70); }}>
                        Çocukluk vs Yaşlılık
                    </button>
                </div>
            </div>
        </div>
    );
}
