import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle } from 'lucide-react';

interface QAFormProps {
  question: string;
  answer: string;
  onQuestionChange: (value: string) => void;
  onAnswerChange: (value: string) => void;
  onSubmit: () => void;
}

export function QAForm({
  question,
  answer,
  onQuestionChange,
  onAnswerChange,
  onSubmit,
}: QAFormProps) {
  return (
    <div className="mb-8 bg-white/5 backdrop-blur-lg rounded-lg p-4 sm:p-6 shadow-lg">
      <h2 className="text-xl text-white sm:text-2xl font-bold mb-4 text-primary">Add New Q&A</h2>
      <div className="space-y-4">
        <div>
          <Input
            placeholder="Enter your question..."
            value={question}
            onChange={(e) => onQuestionChange(e.target.value)}
            className="mb-2"
          />
          <Textarea
            placeholder="Enter your answer..."
            value={answer}
            onChange={(e) => onAnswerChange(e.target.value)}
            className="min-h-[100px]"
          />
        </div>
        <Button onClick={onSubmit} className="w-full">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Question & Answer
        </Button>
      </div>
    </div>
  );
}