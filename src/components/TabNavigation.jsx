import './TabNavigation.css';

const tabs = [
    { id: 'brain-map', label: 'Beyin Haritası', icon: '🧠' },
    { id: 'brain-age', label: 'Beyin-Yaş Bağlantısı', icon: '🔗' },
    { id: 'quiz', label: 'Quiz Modu', icon: '📝' },
    { id: 'comparison', label: 'Karşılaştırma', icon: '⚖️' },
    { id: 'timeline', label: 'Timeline', icon: '📊' },
    { id: 'identity', label: 'Kimlik ve Benzersizlik', icon: '🌟' },
];

export default function TabNavigation({ activeTab, onTabChange }) {
    return (
        <nav className="tab-navigation">
            <div className="tab-list">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => onTabChange(tab.id)}
                        aria-selected={activeTab === tab.id}
                    >
                        <span className="tab-icon">{tab.icon}</span>
                        <span className="tab-label">{tab.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
}

export { tabs };
