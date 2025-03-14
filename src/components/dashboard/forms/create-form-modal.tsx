'use client';

import * as React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { PenLine } from 'lucide-react';

interface CreateFormModalProps {
  onSelect: (type: 'scratch' | 'template' | 'ai') => void;
}

export function CreateFormModal({ onSelect }: CreateFormModalProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <PenLine className="h-4 w-4" />
          Create Form
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new form</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 h-auto p-6 justify-start hover:border-primary hover:text-primary transition-colors"
            onClick={() => {
              onSelect('scratch');
              setOpen(false);
            }}
          >
            <PenLine className="h-6 w-6 text-primary" />
            <div className="text-left">
              <div className="font-semibold text-lg">Make from scratch</div>
              <div className="text-sm text-muted-foreground mt-1">
                Start with a blank canvas and build your perfect form
              </div>
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
