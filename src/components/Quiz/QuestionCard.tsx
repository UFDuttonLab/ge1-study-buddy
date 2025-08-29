import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';
import { Question } from '@/data/questions';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  showFeedback: boolean;
  onAnswerSelect: (index: number) => void;
}

export const QuestionCard = ({ 
  question, 
  selectedAnswer, 
  showFeedback, 
  onAnswerSelect 
}: QuestionCardProps) => {
  const getAnswerButtonVariant = (index: number) => {
    if (!showFeedback) {
      return selectedAnswer === index ? 'default' : 'outline';
    }
    
    // Show feedback
    if (index === question.correctAnswer) {
      return 'default'; // This will be styled as correct
    }
    if (selectedAnswer === index && index !== question.correctAnswer) {
      return 'destructive'; // This will be styled as incorrect
    }
    return 'outline';
  };

  const getAnswerButtonClasses = (index: number) => {
    if (!showFeedback) {
      if (selectedAnswer === index) {
        return 'bg-gradient-primary text-primary-foreground shadow-soft scale-105';
      }
      return 'hover:bg-secondary hover:shadow-soft transition-smooth';
    }
    
    // Show feedback styling
    if (index === question.correctAnswer) {
      return 'bg-gradient-success text-success-foreground shadow-soft';
    }
    if (selectedAnswer === index && index !== question.correctAnswer) {
      return 'bg-error text-error-foreground shadow-soft';
    }
    return 'opacity-60';
  };

  return (
    <Card className="p-6 shadow-strong bg-card border-border">
      {/* Topic Badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
          {question.topic}
        </span>
      </div>

      {/* Question */}
      <h2 className="text-xl font-semibold mb-6 text-foreground leading-relaxed">
        {question.question}
      </h2>

      {/* Answer Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant={getAnswerButtonVariant(index)}
            onClick={() => onAnswerSelect(index)}
            disabled={showFeedback}
            className={cn(
              'w-full text-left justify-start p-4 h-auto min-h-12 transition-smooth whitespace-normal',
              getAnswerButtonClasses(index)
            )}
          >
            <div className="flex items-center gap-3 w-full">
              <span className="flex-shrink-0 w-6 h-6 rounded-full border border-current flex items-center justify-center text-sm font-medium">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1 text-sm leading-relaxed">{option}</span>
              {showFeedback && index === question.correctAnswer && (
                <CheckCircle className="w-5 h-5 text-success" />
              )}
              {showFeedback && selectedAnswer === index && index !== question.correctAnswer && (
                <XCircle className="w-5 h-5 text-error" />
              )}
            </div>
          </Button>
        ))}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className="p-4 rounded-lg bg-muted border border-border">
          <div className="flex items-start gap-3">
            {selectedAnswer === question.correctAnswer ? (
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-medium text-sm mb-1 text-foreground">
                {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect'}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {question.explanation}
              </p>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};