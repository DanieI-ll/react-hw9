import { useForm } from 'react-hook-form';
import { useId } from 'react';

import { defaultValues } from './fields';

import styles from './DynamicForm.module.css';

const DynamicForm = () => {

    const firstFieldId = useId();
    const secondFieldId = useId();

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({ defaultValues });

    const onSubmit = (values) => {
        console.log(values);
        reset();
    }

    const isNameFill = watch('firstField');

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.myForm}>
                    <div className={styles.fields}>
                        <label htmlFor={firstFieldId} className={styles.label}>First Field</label>
                        <input {...register('firstField', {
                            required: 'This field is required',
                            minLength: { value: 5, message: 'More Than 5 Symbols'}
                        })}
                            type="text" id={firstFieldId} className={styles.textField} />
                        {errors.firstField && <p className={styles.error}>{errors.firstField.message}</p>}
                    </div>

                    {isNameFill && <div className={styles.fields}>
                        <label htmlFor={secondFieldId} className={styles.label}>Second Field</label>
                        <input {...register('secondField', { required: 'This field is required' })}
                            type="text" id={secondFieldId} className={styles.textField} />
                        {errors.secondField && <p className={styles.error}>{errors.secondField.message}</p>}
                    </div>}

                    <button className={styles.btn}>Submit</button>
                </form>
            </div>
        </div>
    )
};

export default DynamicForm;