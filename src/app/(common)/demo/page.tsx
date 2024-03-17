'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Callout, Theme } from '@radix-ui/themes';
import CustomSelect from '@/components/formfields/select/CustomSelect';
import CustomText from '@/components/formfields/text/CustomText';
import CustomRadio from '@/components/formfields/radio/CustomRadio'; // Import the CustomRadio component
import CustomTextArea from '@/components/formfields/textarea/CustomTextArea';

interface FormData {
  title: string;
  fruit: string;
  football: string;
  manus: string;
  age: string;
}

const IssueForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      setSubmitting(true);
      console.log('Submitted data:', data);
    } catch (error) {
      setSubmitting(false);
      setError('An unexpected error occurred.');
    }
  };

  const selectOptions = ['Apple', 'Orange', 'Banana', 'Grape'];
  const footballOptions = ['Football', 'Basketball', 'Baseball', 'Soccer'];

  // Define radio options
  const radioOptions = [
    { value: '20', label: '20 years old' },
    { value: '30', label: '30 years old' },
    { value: '40', label: '40 years old' },
  ];

  return (
    <div className=' mx-auto h-screen max-w-xl   '>
      {error && (
        <Callout.Root color='red' className='mb-5'>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className='space-y-3' onSubmit={handleSubmit(onSubmit)}>
        <CustomText
          className='w-full border-2'
          placeholder='Manush'
          name='manus'
          required={false}
          register={register}
        />
        <CustomTextArea
          className='w-full border-2'
          placeholder='Manush2'
          name='manus2'
          required={false}
          register={register}
        />
        {errors?.manus && (
          <p className='text-red-500'>{errors.manus.message}</p>
        )}

        {/* Render the CustomSelect components */}
        <Theme
          accentColor='red'
          panelBackground='solid'
          radius='small'
          scaling='100%'
        >
          <CustomSelect
            options={selectOptions}
            register={register}
            name='fruit'
            placeholder='Select an item'
            required='importany'
            className='w-full'
            onChange={(value) => setValue('fruit', value)}
          />
        </Theme>
        {errors?.fruit && (
          <p className='text-red-500'>{errors.fruit.message}</p>
        )}
        <CustomSelect
          options={footballOptions}
          register={register}
          name='football'
          placeholder='Select an item'
          required='importan'
          className='w-full'
          onChange={(value) => setValue('football', value)}
        />
        {errors?.football && (
          <p className='text-red-500'>{errors.football.message}</p>
        )}

        {/* Render the CustomRadio */}
        <CustomRadio
          options={radioOptions}
          defaultValue='20'
          name='age'
          register={register}
          label='Age'
        />

        <Button
          type='submit'
          className='w-full'
          color='blue'
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
