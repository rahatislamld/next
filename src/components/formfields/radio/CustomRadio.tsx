import React from 'react';
import { Text } from '@radix-ui/themes';
import * as RadioGroup from '@radix-ui/react-radio-group';
interface Option {
  value: string;
  label: string;
}

interface CustomRadioProps {
  options: Option[];
  defaultValue: string;
  name: string;
  register: any;
  label: any;
}

const CustomRadio: React.FC<CustomRadioProps> = ({
  options,
  defaultValue,
  name,
  register,
  label,
}) => (
  <>
    <Text as='div' weight='bold' size='2' mb='1'>
      {label}
    </Text>
    <RadioGroup.Root defaultValue={defaultValue}>
      <RadioGroup.Root
        className='flex flex-col gap-2.5'
        defaultValue='default'
        aria-label='View density'
      >
        {options.map((option) => (
          <div key={option.value} className='flex '>
            <RadioGroup.Item
              className='focus:shadow-blue h-[25px] w-[25px] cursor-default rounded-full bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px]'
              value={option.value}
              {...register(name)}
              id={`r${option.value}`}
            >
              <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[11px] after:w-[11px] after:rounded-[50%] after:bg-violet11 after:content-['']" />
            </RadioGroup.Item>
            <label
              className='text-blue pl-[15px] text-[15px] leading-none'
              htmlFor={`r${option.value}`}
            >
              {option.label}
            </label>
          </div>
        ))}
      </RadioGroup.Root>
    </RadioGroup.Root>
  </>
);

export default CustomRadio;
