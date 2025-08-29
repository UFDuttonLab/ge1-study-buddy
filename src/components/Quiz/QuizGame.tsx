import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Trophy, RotateCcw, Leaf } from 'lucide-react';
import { Question, getRandomQuestions } from '@/data/questions';
import { QuestionCard } from './QuestionCard';
import { ResultsScreen } from './ResultsScreen';

interface QuizAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  topic: string;
}

export const QuizGame = () => {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'feedback' | 'results'>('start');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const startGame = () => {
    const newQuestions = getRandomQuestions(8);
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setGameState('playing');
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(answerIndex);
  };

  const submitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const newAnswer: QuizAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
      topic: currentQuestion.topic
    };

    setAnswers(prev => [...prev, newAnswer]);
    setShowFeedback(true);
    setGameState('feedback');
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setGameState('playing');
    } else {
      setGameState('results');
    }
  };

  const restartGame = () => {
    setGameState('start');
  };

  if (gameState === 'start') {
    return (
      <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 text-center shadow-strong bg-card border-border">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-primary">
              <Leaf className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-2 text-foreground">
            Chris's Ecology Challenge 1!
          </h1>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Test your knowledge of ecology basics, life history, and population dynamics! 
            Answer 8 random questions and see how well you understand the material.
          </p>
          
          <Button 
            onClick={startGame}
            className="w-full bg-gradient-primary hover:bg-primary-glow text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-smooth shadow-soft"
            size="lg"
          >
            Start Quiz Challenge
          </Button>
        </Card>
      </div>
    );
  }

  if (gameState === 'results') {
    return <ResultsScreen answers={answers} questions={questions} onRestart={restartGame} />;
  }

  return (
    <div className="min-h-screen bg-gradient-background p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-primary" />
              <h1 className="text-xl font-bold text-foreground">Ecology Challenge</h1>
            </div>
            <div className="text-sm text-muted-foreground">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
          </div>
          
          <Progress value={progress} className="h-2 bg-muted" />
        </div>

        {/* Question Card */}
        <QuestionCard
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          showFeedback={showFeedback}
          onAnswerSelect={handleAnswerSelect}
        />

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center">
          {!showFeedback ? (
            <Button
              onClick={submitAnswer}
              disabled={selectedAnswer === null}
              className="bg-gradient-primary hover:bg-primary-glow text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-smooth shadow-soft disabled:opacity-50 disabled:cursor-not-allowed"
              size="lg"
            >
              Submit Answer
            </Button>
          ) : (
            <Button
              onClick={nextQuestion}
              className="bg-gradient-primary hover:bg-primary-glow text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-smooth shadow-soft"
              size="lg"
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'View Results'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};