import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Trophy, RotateCcw, CheckCircle, XCircle, Leaf } from 'lucide-react';
import { Question, topics } from '@/data/questions';

interface QuizAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  topic: string;
}

interface ResultsScreenProps {
  answers: QuizAnswer[];
  questions: Question[];
  onRestart: () => void;
}

export const ResultsScreen = ({ answers, questions, onRestart }: ResultsScreenProps) => {
  const totalQuestions = answers.length;
  const correctAnswers = answers.filter(a => a.isCorrect).length;
  const score = Math.round((correctAnswers / totalQuestions) * 100);

  // Calculate topic breakdown
  const topicStats = topics.map(topic => {
    const topicAnswers = answers.filter(a => a.topic === topic);
    const topicCorrect = topicAnswers.filter(a => a.isCorrect).length;
    const topicTotal = topicAnswers.length;
    const topicPercentage = topicTotal > 0 ? Math.round((topicCorrect / topicTotal) * 100) : 0;
    
    return {
      topic,
      correct: topicCorrect,
      total: topicTotal,
      percentage: topicPercentage
    };
  }).filter(stat => stat.total > 0); // Only show topics that had questions

  const getScoreMessage = () => {
    if (score >= 90) return "Outstanding! You've mastered ecology concepts!";
    if (score >= 80) return "Excellent work! You have a strong understanding!";
    if (score >= 70) return "Good job! You're on the right track!";
    if (score >= 60) return "Not bad! Review the concepts and try again!";
    return "Keep studying! Practice makes perfect!";
  };

  const getScoreColor = () => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-quiz-highlight";
    return "text-error";
  };

  return (
    <div className="min-h-screen bg-gradient-background p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-gradient-primary">
              <Trophy className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2 text-foreground">Quiz Complete!</h1>
          <p className="text-muted-foreground">Here's how you did on Chris's Ecology Challenge</p>
        </div>

        {/* Overall Score */}
        <Card className="p-6 mb-6 shadow-strong bg-card border-border text-center">
          <div className="mb-4">
            <div className={`text-5xl font-bold mb-2 ${getScoreColor()}`}>
              {score}%
            </div>
            <div className="text-lg text-muted-foreground">
              {correctAnswers} out of {totalQuestions} correct
            </div>
          </div>
          
          <Progress 
            value={score} 
            className="h-3 mb-4 bg-muted"
          />
          
          <p className="text-foreground font-medium">{getScoreMessage()}</p>
        </Card>

        {/* Topic Breakdown */}
        <Card className="p-6 mb-6 shadow-strong bg-card border-border">
          <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
            <Leaf className="w-5 h-5 text-primary" />
            Performance by Topic
          </h3>
          
          <div className="space-y-4">
            {topicStats.map((stat) => (
              <div key={stat.topic} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">{stat.topic}</span>
                  <span className="text-sm text-muted-foreground">
                    {stat.correct}/{stat.total} ({stat.percentage}%)
                  </span>
                </div>
                <Progress 
                  value={stat.percentage} 
                  className="h-2 bg-muted"
                />
              </div>
            ))}
          </div>
        </Card>

        {/* Question Review */}
        <Card className="p-6 mb-6 shadow-strong bg-card border-border">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Question Review</h3>
          
          <div className="space-y-3">
            {answers.map((answer, index) => {
              const question = questions.find(q => q.id === answer.questionId);
              if (!question) return null;
              
              return (
                <div 
                  key={answer.questionId} 
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {answer.isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-success" />
                    ) : (
                      <XCircle className="w-5 h-5 text-error" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-foreground">
                        Question {index + 1}
                      </span>
                      <span className="text-xs px-2 py-0.5 bg-accent text-accent-foreground rounded-full">
                        {question.topic}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {question.question}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Actions */}
        <div className="flex justify-center">
          <Button
            onClick={onRestart}
            className="bg-gradient-primary hover:bg-primary-glow text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-smooth shadow-soft"
            size="lg"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Take Another Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};