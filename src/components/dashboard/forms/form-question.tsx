'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Trash2, GripVertical } from 'lucide-react';
import { Input } from '@/components/ui/input';

type QuestionType =
  | 'short'
  | 'paragraph'
  | 'multiple'
  | 'checkbox'
  | 'dropdown'
  | 'file'
  | 'date'
  | 'time'
  | 'linear'
  | 'grid';

interface Question {
  id: string;
  type: QuestionType;
  title: string;
  required: boolean;
  options?: string[];
}

interface FormQuestionProps {
  question: Question;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (updates: Partial<Question>) => void;
  onDelete: () => void;
}

export function FormQuestion({ question, isSelected, onSelect, onChange, onDelete }: FormQuestionProps) {
  const renderQuestionInput = () => {
    switch (question.type) {
      case 'short':
        return <Input disabled placeholder="Short answer text" />;
      case 'paragraph':
        return (
          <textarea
            disabled
            className="w-full p-2 border rounded-md bg-gray-50"
            placeholder="Long answer text"
            rows={3}
          />
        );
      case 'multiple':
      case 'checkbox':
      case 'dropdown':
        return (
          <div className="space-y-2">
            {question.options?.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                {question.type === 'multiple' && <input type="radio" disabled />}
                {question.type === 'checkbox' && <input type="checkbox" disabled />}
                <Input
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...(question.options || [])];
                    newOptions[index] = e.target.value;
                    onChange({ options: newOptions });
                  }}
                  placeholder={`Option ${index + 1}`}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    const newOptions = question.options?.filter((_, i) => i !== index);
                    onChange({ options: newOptions });
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              onClick={() => {
                const newOptions = [...(question.options || []), `Option ${(question.options?.length || 0) + 1}`];
                onChange({ options: newOptions });
              }}
            >
              Add Option
            </Button>
          </div>
        );
      default:
        return <div>Question type not implemented yet</div>;
    }
  };

  return (
    <Card className={`p-4 ${isSelected ? 'ring-2 ring-primary' : ''}`} onClick={onSelect}>
      <div className="flex items-start gap-4">
        <button className="mt-2 cursor-grab">
          <GripVertical className="h-5 w-5 text-gray-400" />
        </button>
        <div className="flex-1">
          <Input
            value={question.title}
            onChange={(e) => onChange({ title: e.target.value })}
            placeholder="Question"
            className="text-lg font-medium mb-4"
          />
          {renderQuestionInput()}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">Required</span>
            <Switch checked={question.required} onCheckedChange={(checked) => onChange({ required: checked })} />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}