import React from 'react';
import { TextField } from '@radix-ui/themes';

interface SelectFieldProps {
  register: any;
  className: string;
  placeholder: string;
  required: boolean;
  name: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  register,
  className,
  placeholder,
  required,
  name,
}) => {
  return (
    <TextField.Root className={className}>
      <TextField.Input
        placeholder={placeholder}
        {...register(name, { required: { required } })}
      />
    </TextField.Root>
  );
};

export default SelectField;
