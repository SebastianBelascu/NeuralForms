'use client';

import { createContext, useContext, useState, useEffect } from 'react';

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

interface Form {
  id?: string;
  title: string;
  description: string;
  questions: Question[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface FormContextType {
  form: Form;
  selectedQuestionId: string | null;
  setSelectedQuestionId: (id: string | null) => void;
  updateForm: (updates: Partial<Form>) => void;
  addQuestion: (type: QuestionType) => void;
  updateQuestion: (id: string, updates: Partial<Question>) => void;
  deleteQuestion: (id: string) => void;
  reorderQuestions: (startIndex: number, endIndex: number) => void;
  saveForm: () => Promise<void>;
}

const defaultForm: Form = {
  title: '',
  description: '',
  questions: [],
};

export const FormContext = createContext<FormContextType | null>(null);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [form, setForm] = useState<Form>(defaultForm);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);

  // Autosave functionality with loading state
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    if (!form.id && !form.title && !form.description && form.questions.length === 0) {
      return; // Don't save empty forms
    }

    const saveTimeout = setTimeout(async () => {
      if (isSaving) return; // Prevent parallel saves

      setIsSaving(true);
      setSaveError(null);

      try {
        await saveForm();
      } catch (error) {
        setSaveError(error instanceof Error ? error.message : 'Failed to save form');
      } finally {
        setIsSaving(false);
      }
    }, 2000);

    return () => clearTimeout(saveTimeout);
  }, [form, isSaving]);

  const updateForm = (updates: Partial<Form>) => {
    setForm((prev) => ({ ...prev, ...updates }));
  };

  const addQuestion = (type: QuestionType) => {
    const newQuestion: Question = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      title: 'Untitled Question',
      required: false,
      options: type === 'multiple' || type === 'checkbox' || type === 'dropdown' ? ['Option 1'] : undefined,
    };

    setForm((prev) => ({
      ...prev,
      questions: [...prev.questions, newQuestion],
    }));
    setSelectedQuestionId(newQuestion.id);
  };

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    setForm((prev) => ({
      ...prev,
      questions: prev.questions.map((q) => (q.id === id ? { ...q, ...updates } : q)),
    }));
  };

  const deleteQuestion = (id: string) => {
    setForm((prev) => ({
      ...prev,
      questions: prev.questions.filter((q) => q.id !== id),
    }));
    if (selectedQuestionId === id) {
      setSelectedQuestionId(null);
    }
  };

  const reorderQuestions = (startIndex: number, endIndex: number) => {
    setForm((prev) => {
      const newQuestions = [...prev.questions];
      const [removed] = newQuestions.splice(startIndex, 1);
      newQuestions.splice(endIndex, 0, removed);
      return { ...prev, questions: newQuestions };
    });
  };

  const saveForm = async () => {
    const response = await fetch('/api/forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error('Failed to save form');
    }

    const savedForm = await response.json();
    setForm(savedForm);
  };

  return (
    <FormContext.Provider
      value={{
        form,
        selectedQuestionId,
        setSelectedQuestionId,
        updateForm,
        addQuestion,
        updateQuestion,
        deleteQuestion,
        reorderQuestions,
        saveForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
}
