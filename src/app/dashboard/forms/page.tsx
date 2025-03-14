import { FormBuilder } from '@/components/dashboard/forms/form-builder';
import { FormProvider } from '@/components/dashboard/forms/form-context';

export default function FormsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-2xl font-semibold">Form Builder</h1>
      <FormProvider>
        <FormBuilder />
      </FormProvider>
    </div>
  );
}
