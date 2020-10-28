import React from 'react'

function RatingCheckboxes({value}) {
  return (
    <div>
      <input type="checkbox" className="input-field" />
      {value.map((el,index)=>(
        <i key={index} className="icons bx bxs-star"></i>
      ))}
    </div>
  );
}

export default RatingCheckboxes
