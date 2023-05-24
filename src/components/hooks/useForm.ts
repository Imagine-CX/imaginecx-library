import { useEffect, useState } from 'react';

export const useForm = <T>(initialForm: T) => {
  const [formState, setFormState] = useState<T>(initialForm);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const onInputChange = ({ target }: { target: EventTarget }) => {
    const { name, value } = target as HTMLInputElement;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onCheckChange = ({ target }: { target: EventTarget }) => {
    const { name, checked } = target as HTMLInputElement;
    setFormState({
      ...formState,
      [name]: checked,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onCheckChange,
    onResetForm,
  };
};
