import React from "react";

function FilterCheckboxes({ type, values }) {
  return (
    <div className='checkbox__filters'>
      <strong className='filter__name'>{type}</strong>
      {values.map((el,index) => (
        <div key={index}>
          <input type="checkbox" name='filter' id='checkbox' className='input-field' />
          <label className='label'>{el}</label>
        </div>
      ))}
    </div>
  );
}

export default FilterCheckboxes;
