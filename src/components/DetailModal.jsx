import './DetailModal.css';

export default function DetailModal({ region, onClose }) {
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content" style={{ '--accent-color': region.color }}>
                <button className="modal-close" onClick={onClose}>
                    ✕
                </button>

                <div className="modal-header">
                    <span className="modal-icon">{region.icon}</span>
                    <div className="modal-titles">
                        <h2 className="modal-title">{region.name}</h2>
                        <p className="modal-latin">{region.latinName}</p>
                    </div>
                </div>

                <div className="modal-section">
                    <h3>
                        <span className="section-icon">⚡</span>
                        Temel İşlev
                    </h3>
                    <p>{region.function}</p>
                </div>

                <div className="modal-section highlight">
                    <h3>
                        <span className="section-icon">🎯</span>
                        Benlik Algısındaki Rolü
                    </h3>
                    <p>{region.selfPerceptionRole}</p>
                </div>

                <div className="modal-section">
                    <h3>
                        <span className="section-icon">💡</span>
                        Günlük Yaşamdan Örnekler
                    </h3>
                    <ul className="examples-list">
                        {region.examples.map((example, index) => (
                            <li key={index}>
                                <span className="example-bullet">→</span>
                                {example}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hasar Alırsa Bölümü */}
                {region.damageEffects && (
                    <div className="modal-section damage-section">
                        <h3>
                            <span className="section-icon">⚠️</span>
                            Hasar Alırsa?
                        </h3>
                        <ul className="damage-symptoms">
                            {region.damageEffects.symptoms.map((symptom, index) => (
                                <li key={index}>
                                    <span className="symptom-bullet">•</span>
                                    {symptom}
                                </li>
                            ))}
                        </ul>

                        {/* Ünlü Vaka Çalışmaları */}
                        {region.damageEffects.famousCases && region.damageEffects.famousCases.length > 0 && (
                            <div className="case-studies">
                                <h4>
                                    <span className="case-icon">📖</span>
                                    Tarihi Vaka Çalışmaları
                                </h4>
                                {region.damageEffects.famousCases.map((caseStudy, index) => (
                                    <div key={index} className="case-card">
                                        <div className="case-header">
                                            <span className="case-name">{caseStudy.name}</span>
                                        </div>
                                        <p className="case-description">{caseStudy.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
