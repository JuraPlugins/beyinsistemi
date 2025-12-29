import { useState } from 'react';
import { identityTypes, uniquenessMessage } from '../data/identityData';
import './IdentityUniqueness.css';

export default function IdentityUniqueness() {
    const [selectedType, setSelectedType] = useState(null);

    return (
        <div className="identity-container">
            {/* Hero Section */}
            <div className="identity-hero">
                <h1 className="hero-title">
                    <span className="hero-icon">🌟</span>
                    Kimlik ve Benzersizlik
                </h1>
                <p className="hero-subtitle">
                    Beyin, deneyim ve kimlik nasıl bir araya gelir?
                </p>
            </div>

            {/* Identity Types */}
            <section className="identity-types-section">
                <h2 className="section-title">Kimlik Katmanları</h2>
                <p className="section-desc">Her katman, sizi "siz" yapan bulmacının bir parçasıdır</p>

                <div className="identity-cards">
                    {identityTypes.map((type) => (
                        <div
                            key={type.id}
                            className={`identity-card ${selectedType?.id === type.id ? 'expanded' : ''}`}
                            style={{ '--card-color': type.color }}
                            onClick={() => setSelectedType(selectedType?.id === type.id ? null : type)}
                        >
                            <div className="card-header">
                                <span className="card-icon">{type.icon}</span>
                                <h3>{type.name}</h3>
                            </div>
                            <p className="card-description">{type.description}</p>

                            {selectedType?.id === type.id && (
                                <div className="card-expanded">
                                    <div className="brain-connections">
                                        <h4>🧠 Beyin Bağlantıları</h4>
                                        {type.brainConnections.map((conn, idx) => (
                                            <div key={idx} className="connection-item">
                                                <span className="connection-region">{conn.region}</span>
                                                <span className="connection-role">{conn.role}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="factors-list">
                                        <h4>📋 Belirleyici Faktörler</h4>
                                        <ul>
                                            {type.factors.map((factor, idx) => (
                                                <li key={idx}>{factor}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="uniqueness-note">
                                        💡 {type.uniquenessNote}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* The Main Message */}
            <section className="uniqueness-section">
                <div className="uniqueness-hero">
                    <h2 className="uniqueness-title">{uniquenessMessage.title}</h2>
                    <p className="uniqueness-subtitle">{uniquenessMessage.subtitle}</p>
                </div>

                <div className="explanation-box">
                    <p>{uniquenessMessage.explanation}</p>
                </div>

                <div className="key-points">
                    {uniquenessMessage.keyPoints.map((point, idx) => (
                        <div key={idx} className="key-point">
                            <span className="point-icon">{point.icon}</span>
                            <div className="point-content">
                                <h4>{point.title}</h4>
                                <p>{point.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <blockquote className="uniqueness-quote">
                    {uniquenessMessage.quote}
                </blockquote>

                <div className="final-message">
                    <div className="final-message-content">
                        <span className="final-emoji">✨</span>
                        <p>{uniquenessMessage.finalMessage}</p>
                    </div>
                </div>
            </section>

            {/* Visual Diagram */}
            <section className="diagram-section">
                <h3>Kimlik Oluşumu</h3>
                <div className="identity-diagram">
                    <div className="diagram-layer" style={{ '--layer-color': '#FF6B6B' }}>
                        <span className="layer-icon">🧬</span>
                        <span className="layer-name">Biyoloji</span>
                        <span className="layer-desc">Temel</span>
                    </div>
                    <div className="diagram-arrow">↓</div>
                    <div className="diagram-layer" style={{ '--layer-color': '#4ECDC4' }}>
                        <span className="layer-icon">🧠</span>
                        <span className="layer-name">Psikoloji</span>
                        <span className="layer-desc">Şekillendirme</span>
                    </div>
                    <div className="diagram-arrow">↓</div>
                    <div className="diagram-layer" style={{ '--layer-color': '#45B7D1' }}>
                        <span className="layer-icon">👥</span>
                        <span className="layer-name">Sosyal</span>
                        <span className="layer-desc">Deneyim</span>
                    </div>
                    <div className="diagram-arrow">↓</div>
                    <div className="diagram-layer final" style={{ '--layer-color': '#FFD93D' }}>
                        <span className="layer-icon">⭐</span>
                        <span className="layer-name">SİZ</span>
                        <span className="layer-desc">Benzersiz</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
