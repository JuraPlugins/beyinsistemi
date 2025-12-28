import { useState, useMemo, useCallback } from 'react';
import { getRandomQuestions } from '../data/quizQuestions';
import './QuizMode.css';

export default function QuizMode() {
    const [gameState, setGameState] = useState('start'); // start, playing, finished
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);

    const startQuiz = useCallback(() => {
        setQuestions(getRandomQuestions(5));
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setScore(0);
        setAnswers([]);
        setGameState('playing');
    }, []);

    const currentQuestion = questions[currentIndex];

    const handleAnswerSelect = (optionId) => {
        if (showExplanation) return;
        setSelectedAnswer(optionId);
    };

    const handleSubmit = () => {
        if (!selectedAnswer) return;

        const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
        if (isCorrect) {
            setScore(prev => prev + 1);
        }

        setAnswers(prev => [...prev, {
            question: currentQuestion.question,
            selected: selectedAnswer,
            correct: currentQuestion.correctAnswer,
            isCorrect
        }]);

        setShowExplanation(true);
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            setGameState('finished');
        }
    };

    const getScoreMessage = () => {
        const percentage = (score / questions.length) * 100;
        if (percentage === 100) return { emoji: '🏆', message: 'Mükemmel! Tam puan!' };
        if (percentage >= 80) return { emoji: '🌟', message: 'Harika! Neredeyse mükemmel!' };
        if (percentage >= 60) return { emoji: '👍', message: 'İyi! Biraz daha pratik yapabilirsiniz.' };
        if (percentage >= 40) return { emoji: '📚', message: 'Fena değil! Konuları tekrar gözden geçirin.' };
        return { emoji: '💪', message: 'Pes etmeyin! Tekrar deneyin.' };
    };

    if (gameState === 'start') {
        return (
            <div className="quiz-container">
                <div className="quiz-start-screen">
                    <span className="quiz-icon">📝</span>
                    <h1>Quiz Modu</h1>
                    <p>Beyin bölgeleri ve gelişim dönemleri hakkında bilgilerinizi test edin!</p>

                    <div className="quiz-info">
                        <div className="info-item">
                            <span className="info-icon">❓</span>
                            <span>5 Soru</span>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">🧠</span>
                            <span>Beyin Bölgeleri</span>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">📊</span>
                            <span>Gelişim Dönemleri</span>
                        </div>
                    </div>

                    <button className="start-button" onClick={startQuiz}>
                        Quiz'e Başla
                    </button>
                </div>
            </div>
        );
    }

    if (gameState === 'finished') {
        const { emoji, message } = getScoreMessage();
        return (
            <div className="quiz-container">
                <div className="quiz-result-screen">
                    <span className="result-emoji">{emoji}</span>
                    <h1>Quiz Tamamlandı!</h1>

                    <div className="score-display">
                        <span className="score-number">{score}</span>
                        <span className="score-divider">/</span>
                        <span className="score-total">{questions.length}</span>
                    </div>

                    <p className="score-message">{message}</p>

                    <div className="answers-summary">
                        <h3>Cevaplarınız</h3>
                        {answers.map((ans, idx) => (
                            <div key={idx} className={`answer-item ${ans.isCorrect ? 'correct' : 'wrong'}`}>
                                <span className="answer-status">
                                    {ans.isCorrect ? '✓' : '✗'}
                                </span>
                                <span className="answer-text">Soru {idx + 1}</span>
                            </div>
                        ))}
                    </div>

                    <button className="start-button" onClick={startQuiz}>
                        Tekrar Dene
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <div className="quiz-playing-screen">
                {/* Progress */}
                <div className="quiz-progress">
                    <div className="progress-text">
                        Soru {currentIndex + 1} / {questions.length}
                    </div>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                        />
                    </div>
                    <div className="score-text">Skor: {score}</div>
                </div>

                {/* Question */}
                <div className="question-card">
                    <div className="question-category">
                        {currentQuestion.category === 'brain' ? '🧠 Beyin Bölgeleri' : '📊 Gelişim Dönemleri'}
                    </div>
                    <h2 className="question-text">{currentQuestion.question}</h2>
                </div>

                {/* Options */}
                <div className="options-grid">
                    {currentQuestion.options.map((option) => {
                        let optionClass = 'option-button';
                        if (showExplanation) {
                            if (option.id === currentQuestion.correctAnswer) {
                                optionClass += ' correct';
                            } else if (option.id === selectedAnswer) {
                                optionClass += ' wrong';
                            }
                        } else if (selectedAnswer === option.id) {
                            optionClass += ' selected';
                        }

                        return (
                            <button
                                key={option.id}
                                className={optionClass}
                                onClick={() => handleAnswerSelect(option.id)}
                                disabled={showExplanation}
                            >
                                <span className="option-letter">{option.id.toUpperCase()}</span>
                                <span className="option-text">{option.text}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Explanation */}
                {showExplanation && (
                    <div className={`explanation-card ${selectedAnswer === currentQuestion.correctAnswer ? 'correct' : 'wrong'}`}>
                        <div className="explanation-header">
                            {selectedAnswer === currentQuestion.correctAnswer ? (
                                <>✓ Doğru!</>
                            ) : (
                                <>✗ Yanlış!</>
                            )}
                        </div>
                        <p>{currentQuestion.explanation}</p>
                    </div>
                )}

                {/* Action Button */}
                <div className="quiz-actions">
                    {!showExplanation ? (
                        <button
                            className="submit-button"
                            onClick={handleSubmit}
                            disabled={!selectedAnswer}
                        >
                            Cevabı Kontrol Et
                        </button>
                    ) : (
                        <button className="next-button" onClick={handleNext}>
                            {currentIndex < questions.length - 1 ? 'Sonraki Soru →' : 'Sonuçları Gör'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
