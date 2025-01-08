import { useState } from 'react';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Edit2, Trash2 } from 'lucide-react';
import { QAPair } from '@/types/qa';

interface QAItemProps {
  qa: QAPair;
  onEdit: (id: string, question: string, answer: string) => void;
  onDelete: (id: string) => void;
}

export function QAItem({ qa, onEdit, onDelete }: QAItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editQuestion, setEditQuestion] = useState(qa.question);
  const [editAnswer, setEditAnswer] = useState(qa.answer);

  const handleSave = () => {
    onEdit(qa.id, editQuestion, editAnswer);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <AccordionItem
        value={qa.id}
        className="bg-white/5 backdrop-blur-lg rounded-lg shadow-lg"
      >
        <div className="p-4 space-y-4">
          <Input
            value={editQuestion}
            onChange={(e) => setEditQuestion(e.target.value)}
            className="mb-2"
          />
          <Textarea
            value={editAnswer}
            onChange={(e) => setEditAnswer(e.target.value)}
            className="min-h-[100px]"
          />
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        </div>
      </AccordionItem>
    );
  }

  return (
    <AccordionItem
      value={qa.id}
      className="bg-white/5 backdrop-blur-lg rounded-lg shadow-lg"
    >
      <div className="flex items-center justify-between px-4">
        <AccordionTrigger className="flex-1 text-sm sm:text-base">
          {qa.question}
        </AccordionTrigger>
        <div className="flex space-x-2 ml-4">
          {/* Desktop buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-500 hover:text-blue-700 hidden sm:flex"
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
          >
            <Edit2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-red-500 hover:text-red-700 hidden sm:flex"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(qa.id);
            }}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          {/* Mobile buttons */}
          <Button
            variant="ghost"
            size="sm"
            className="text-blue-500 hover:text-blue-700 sm:hidden"
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
          >
            Edit
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-red-500 hover:text-red-700 sm:hidden"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(qa.id);
            }}
          >
            Delete
          </Button>
        </div>
      </div>
      <AccordionContent className="px-4 pb-4">
        <div className="mt-2 text-sm sm:text-base text-muted-foreground">
          {qa.answer}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
