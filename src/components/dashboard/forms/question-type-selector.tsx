'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

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

interface QuestionTypeSelectorProps {
  onSelect: (type: QuestionType) => void;
}

const questionTypes = [
  { type: 'short', label: 'Short answer' },
  { type: 'paragraph', label: 'Paragraph' },
  { type: 'multiple', label: 'Multiple choice' },
  { type: 'checkbox', label: 'Checkboxes' },
  { type: 'dropdown', label: 'Dropdown' },
  { type: 'file', label: 'File upload' },
  { type: 'date', label: 'Date' },
  { type: 'time', label: 'Time' },
  { type: 'linear', label: 'Linear scale' },
  { type: 'grid', label: 'Multiple choice grid' },
] as const;

export function QuestionTypeSelector({ onSelect }: QuestionTypeSelectorProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2 hover:bg-primary/10 hover:text-primary">
          <Plus className="h-4 w-4" />
          Add Question
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {questionTypes.map(({ type, label }) => (
          <DropdownMenuItem
            key={type}
            onClick={() => onSelect(type)}
            className="hover:bg-primary/10 hover:text-primary cursor-pointer"
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
