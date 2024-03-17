import React from 'react';
import { Select } from '@radix-ui/themes';

interface SelectFieldProps {
  options: string[];
  register: any;
  name: string;
  className: string;
  placeholder: string;
  required: string;
  onChange: (value: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
  options,
  register,
  name,
  className,
  placeholder,
  required,
  onChange,
}) => {
  return (
    <Select.Root
      size='2'
      className='w-full'
      {...register(name, { required: required })}
      onValueChange={(value) => onChange(value)}
    >
      <Select.Trigger placeholder={placeholder} className={className} />
      <Select.Content>
        {options.map((option) => (
          <Select.Item key={option.toLowerCase()} value={option.toLowerCase()}>
            {option}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default SelectField;
