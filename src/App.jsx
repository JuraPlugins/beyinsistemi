import { useState } from 'react'
import Brain from './components/Brain'
import TabNavigation from './components/TabNavigation'
import BrainAgeConnection from './components/BrainAgeConnection'
import QuizMode from './components/QuizMode'
import AgeComparison from './components/AgeComparison'
import DevelopmentTimeline from './components/DevelopmentTimeline'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('brain-map')

  const renderContent = () => {
    switch (activeTab) {
      case 'brain-map':
        return <Brain />
      case 'brain-age':
        return <BrainAgeConnection />
      case 'quiz':
        return <QuizMode />
      case 'comparison':
        return <AgeComparison />
      case 'timeline':
        return <DevelopmentTimeline />
      default:
        return <Brain />
    }
  }

  return (
    <div className="app">
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="app-content">
        {renderContent()}
      </main>
    </div>
  )
}

export default App
