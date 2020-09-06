import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

const Questionnaire = () => {
  const { register, control, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      {fields.map(({
        id, type,
      }, index) => (
        <div key={id}>
          <select
            ref={register()}
            name={`items[${index}].type`}
            defaultValue={type}
          >
            <option value="">Select</option>
            <option value="10">ItemA</option>
            <option value="20">ItemB</option>
          </select>
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}

      <input type="submit" />
      <button type="button" onClick={() => append({})}>
        Append
      </button>
    </form>
  );
};
export default Questionnaire;
