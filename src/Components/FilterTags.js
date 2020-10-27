import React from 'react'

function FilterTags({className,value}) {
  return (
    <span className={className}>
      <small>{value}</small>
      <i class="bx bx-x"></i>
    </span>
  );
}

export default FilterTags
