import React from 'react';
import {
  SubmitHandler, useFieldArray, useForm,
} from 'react-hook-form';
import { Technology, Level } from '@models/quiz';

interface Dropdown {
  label: string;
  value: Technology | Level;
}

const technologies : Dropdown[] = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'React', value: 'react' },
  { label: 'Css', value: 'css' },
  { label: 'HTML', value: 'html' },
  { label: 'Angular', value: 'angular' },
];

const levels: Dropdown[] = [
  { label: 'Junior', value: 'junior' },
  { label: 'Regular', value: 'regular' },
  { label: 'Senior', value: 'senior' },
];

const Questionnaire = ({ handleFormSubmit } :{handleFormSubmit: SubmitHandler<any>}) => {
  const { register, control, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });
  const isMaximumFields = fields.length >= 5;
  const isMinimumFields = fields.length < 1;

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {fields.map(({
        id, tech, level,
      }, index) => (
        <div key={id}>
          <select
            ref={register()}
            name={`items[${index}].tech`}
            defaultValue={tech}
          >
            {technologies.map((dropdownTechnology) => <option value={dropdownTechnology.value}>{dropdownTechnology.label}</option>)}
          </select>
          <select
            ref={register()}
            name={`items[${index}].level`}
            defaultValue={level}
          >
            {levels.map((dropdownLevel) => <option value={dropdownLevel.value}>{dropdownLevel.label}</option>)}
          </select>
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={() => append({})} disabled={isMaximumFields}>
        Append
      </button>
      <input type="submit" disabled={isMinimumFields} />
    </form>
  );
};
export default Questionnaire;
