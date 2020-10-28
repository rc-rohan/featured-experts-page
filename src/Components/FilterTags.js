import React from 'react'

function FilterTags({className,value}) {
  return (
    <span className={className}>
      <small>{value}</small>
      <i className="tag-icons bx bx-x"></i>
    </span>
  );
}

export default FilterTags
