import React from 'react'
import Cards from './Cards'

function ExpertsDetails() {
  return (
    <section className="expertsDetails">
      <div className="heading">
        <h1>Featured Experts</h1>
        <select name="matches" className='selector'>
          <option value="bestMatch">Best Match</option>
          <option value="d1">Dummy Value</option>
          <option value="d2">Dummy Value</option>
        </select>
      </div>
      <div className=''>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
    </section>
  );
}

export default ExpertsDetails
