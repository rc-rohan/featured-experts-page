import React from "react";
import FilterTags from "./FilterTags";
import FilterCheckBoxes from "./FilterCheckboxes";
import RatingCheckBoxes from "./RatingCheckboxes";

function FilterSection() {
  return (
    <section className="filters">
      <h1>Filters</h1>
      <div className="filters__attributes">
        <div className="expertise">
          <strong className="filter__name">EXPERTISE</strong>
          <div className="search-box">
            <FilterTags className="filter-tags dark" value="Branding" />
            <i class="bx bx-search"></i>
          </div>
          <FilterTags className="filter-tags light" value="Strategy" />
        </div>

        <div className="focus-area">
          <strong className="filter__name">FOCUS AREA</strong>
          <div className="search-box">
            <div>
              <FilterTags className="filter-tags dark" value="Focus Area" />
              <FilterTags className="filter-tags dark" value="Focus Area" />
            </div>
            <i class="bx bx-search"></i>
          </div>
          <FilterTags className="filter-tags light" value="Focus Area" />
          <FilterTags className="filter-tags dark" value="Focus Area" />
        </div>
        <div className="rating">
          <RatingCheckBoxes value={4} />
          <RatingCheckBoxes value={3} />
          <RatingCheckBoxes value={3} />
          <RatingCheckBoxes value={2} />
        </div>
        <FilterCheckBoxes
          type="Price"
          values={["Free", "Less Than $25", "$25-$50", "More than $50"]}
        />
        <FilterCheckBoxes
          type="session availability"
          values={["30 min", "60 min", "25 min"]}
        />
        <FilterCheckBoxes
          type="Price"
          values={["English", "French", "German", "Arabic", "Hindi", "Mandarian Chinese"]}
        />
      </div>
    </section>
  );
}

export default FilterSection;
