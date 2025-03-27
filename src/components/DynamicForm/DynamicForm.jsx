import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './DynamicForm.module.css';

const DynamicForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  const firstInputValue = watch('firstInput', '');
  const isSecondInputVisible = firstInputValue.length >= 5;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <label>First Input (min 5 chars):</label>
      <input {...register('firstInput', { required: true, minLength: 5 })} className={styles.inputField} />
      {errors.firstInput && <p className={styles.error}>Minimum 5 characters required.</p>}

      {isSecondInputVisible && (
        <>
          <label>Second Input:</label>
          <input {...register('secondInput')} className={styles.inputField} />
        </>
      )}

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
