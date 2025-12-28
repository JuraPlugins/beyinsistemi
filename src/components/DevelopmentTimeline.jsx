import { useState } from 'react';
import { developmentStages } from '../data/developmentStages';
import './DevelopmentTimeline.css';

export default function DevelopmentTimeline() {
    const [selectedStage, setSelectedStage] = useState(null);
    const [hoveredStage, setHoveredStage] = useState(null);

    const handleStageClick = (stage) => {
        setSelectedStage(selectedStage?.id === stage.id ? null : stage);
    };

    return (
        <div className="timeline-container">
            <h1 className="page-title">
                <span className="title-icon">📊</span>
                Gelişim Çizelgesi
            </h1>
            <p className="page-subtitle">
                İnsan yaşam döngüsünü keşfedin
            </p>

            {/* Timeline */}
            <div className="timeline-wrapper">
                <div className="timeline-line"></div>

                <div className="timeline-stages">
                    {developmentStages.map((stage, index) => (
                        <div
                            key={stage.id}
                            className={`timeline-stage ${selectedStage?.id === stage.id ? 'selected' : ''} ${hoveredStage?.id === stage.id ? 'hovered' : ''}`}
                            style={{ '--stage-color': stage.color }}
                            onClick={() => handleStageClick(stage)}
                            onMouseEnter={() => setHoveredStage(stage)}
                            onMouseLeave={() => setHoveredStage(null)}
                        >
                            <div className="stage-marker">
                                <span className="marker-icon">{stage.icon}</span>
                            </div>
                            <div className="stage-info">
                                <span className="stage-age">{stage.ageRange}</span>
                                <span className="stage-name">{stage.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Selected Stage Details */}
            {selectedStage && (
                <div className="stage-details" style={{ '--detail-color': selectedStage.color }}>
                    <button className="close-details" onClick={() => setSelectedStage(null)}>×</button>

                    <div className="details-header">
                        <span className="details-icon">{selectedStage.icon}</span>
                        <div>
                            <h2>{selectedStage.name}</h2>
                            <span className="details-age">{selectedStage.ageRange}</span>
                        </div>
                    </div>

                    <p className="details-description">{selectedStage.description}</p>

                    <div className="details-grid">
                        <div className="details-section">
                            <h3>🧠 Psikolojik Gelişim</h3>
                            <ul>
                                {selectedStage.psychologicalDevelopment.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="details-section">
                            <h3>🎯 Dönüm Noktaları</h3>
                            <div className="milestones-grid">
                                {selectedStage.keyMilestones.map((milestone, idx) => (
                                    <div key={idx} className="milestone-item">
                                        <span className="milestone-number">{idx + 1}</span>
                                        <span>{milestone}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Overview Cards */}
            <div className="overview-section">
                <h3>Genel Bakış</h3>
                <div className="overview-cards">
                    {developmentStages.map((stage) => (
                        <div
                            key={stage.id}
                            className={`overview-card ${selectedStage?.id === stage.id ? 'active' : ''}`}
                            style={{ '--card-color': stage.color }}
                            onClick={() => handleStageClick(stage)}
                        >
                            <span className="card-icon">{stage.icon}</span>
                            <div className="card-content">
                                <span className="card-name">{stage.name}</span>
                                <span className="card-age">{stage.ageRange}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fun Facts */}
            <div className="facts-section">
                <h3>💡 İlginç Bilgiler</h3>
                <div className="facts-grid">
                    <div className="fact-card">
                        <span className="fact-number">25</span>
                        <p>Prefrontal korteksin tam olgunlaşma yaşı</p>
                    </div>
                    <div className="fact-card">
                        <span className="fact-number">9</span>
                        <p>Erikson'un psikososyal gelişim evresi sayısı</p>
                    </div>
                    <div className="fact-card">
                        <span className="fact-number">2</span>
                        <p>Bebeklikte güvenli bağlanmanın kritik yılları</p>
                    </div>
                    <div className="fact-card">
                        <span className="fact-number">∞</span>
                        <p>Beynin öğrenme kapasitesi (nöroplastisite)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
