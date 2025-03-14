'use client';

import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useForm, FormProvider } from './form-context';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CreateFormModal } from '@/components/dashboard/forms/create-form-modal';
import { QuestionTypeSelector } from '@/components/dashboard/forms/question-type-selector';
import { FormQuestion } from './form-question';

export function FormBuilder() {
  const {
    form,
    selectedQuestionId,
    setSelectedQuestionId,
    updateForm,
    addQuestion,
    updateQuestion,
    deleteQuestion,
    reorderQuestions,
    saveForm,
  } = useForm();

  const handleFormTypeSelect = (type: 'scratch' | 'template' | 'ai') => {
    if (type === 'scratch') {
      updateForm({
        title: '',
        description: '',
        questions: [],
      });
      setSelectedQuestionId(null);
    }
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    reorderQuestions(result.source.index, result.destination.index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Forms
        </h1>
        <CreateFormModal onSelect={handleFormTypeSelect} />
      </div>

      <div className="space-y-6">
        <Card className="p-6 shadow-lg">
          <input
            type="text"
            value={form.title}
            onChange={(e) => updateForm({ title: e.target.value })}
            placeholder="Form Title"
            className="text-2xl font-semibold w-full border-none focus:outline-none bg-transparent focus:ring-2 focus:ring-primary/20 rounded-md px-2 py-1 transition-all"
          />
          <input
            type="text"
            value={form.description}
            onChange={(e) => updateForm({ description: e.target.value })}
            placeholder="Form Description"
            className="w-full border-none focus:outline-none bg-transparent mt-4 focus:ring-2 focus:ring-primary/20 rounded-md px-2 py-1 transition-all"
          />
        </Card>

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="questions">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                {form.questions.map((question, index) => (
                  <Draggable key={question.id} draggableId={question.id} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <FormQuestion
                          question={question}
                          isSelected={selectedQuestionId === question.id}
                          onSelect={() => setSelectedQuestionId(question.id)}
                          onChange={(updates) => updateQuestion(question.id, updates)}
                          onDelete={() => deleteQuestion(question.id)}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <div className="sticky bottom-6 flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-lg p-4 border shadow-lg">
          <QuestionTypeSelector onSelect={addQuestion} />
          <div className="flex gap-4">
            <Button variant="outline" className="w-24">
              Preview
            </Button>
            <Button className="w-24" onClick={saveForm}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
