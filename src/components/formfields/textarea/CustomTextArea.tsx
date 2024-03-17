import React from 'react';
import { TextArea } from '@radix-ui/themes';

interface CustomTextAreaProps {
  register: any;
  className: string;
  placeholder: string;
  required: boolean;
  name: string;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  register,
  className,
  placeholder,
  required,
  name,
}) => {
  return (
    <TextArea
      className={className}
      placeholder={placeholder}
      {...register(name, { required: { required } })}
    />
  );
};

export default CustomTextArea;
