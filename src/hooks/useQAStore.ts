import { useState } from 'react';
import { QAPair } from '@/types/qa';

export function useQAStore() {
  const [qaPairs, setQaPairs] = useState<QAPair[]>([]);

  const addQA = (question: string, answer: string) => {
    const newPair: QAPair = {
      id: Date.now().toString(),
      question,
      answer,
    };
    setQaPairs([...qaPairs, newPair]);
  };

  const editQA = (id: string, question: string, answer: string) => {
    setQaPairs(qaPairs.map(qa => 
      qa.id === id 
        ? { ...qa, question, answer }
        : qa
    ));
  };

  const deleteQA = (id: string) => {
    setQaPairs(qaPairs.filter(qa => qa.id !== id));
  };

  return {
    qaPairs,
    addQA,
    editQA,
    deleteQA,
  };
}