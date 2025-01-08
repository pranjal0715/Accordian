import { useState } from 'react';
import { Accordion } from '@/components/ui/accordion';
import { QAForm } from './QAForm';
import { QAItem } from './QAItem';
import { QAPair } from '@/types/qa';
import { useQAStore } from '@/hooks/useQAStore';

export function QAAccordion() {
  const { qaPairs, addQA, editQA, deleteQA } = useQAStore();
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const handleAddQA = () => {
    if (!newQuestion.trim() || !newAnswer.trim()) return;
    addQA(newQuestion, newAnswer);
    setNewQuestion('');
    setNewAnswer('');
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <QAForm
        question={newQuestion}
        answer={newAnswer}
        onQuestionChange={setNewQuestion}
        onAnswerChange={setNewAnswer}
        onSubmit={handleAddQA}
      />

      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-primary">Q&A List</h2>
        <Accordion type="multiple" className="space-y-4">
          {qaPairs.map((qa: QAPair) => (
            <QAItem
              key={qa.id}
              qa={qa}
              onEdit={editQA}
              onDelete={deleteQA}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
}