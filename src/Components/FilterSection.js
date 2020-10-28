import React from "react";
import FilterTags from "./FilterTags";
import FilterCheckBoxes from "./FilterCheckboxes";
import RatingCheckboxes from "./RatingCheckboxes";

function FilterSection() {
  return (
    <section className="filters">
      <h1>Filters</h1>
      <div className="filters__attributes">
        <div className="expertise">
          <strong className="filter__name">EXPERTISE</strong>
          <div className="search-box">
            <FilterTags className="filter-tags dark" value="Branding" />
            <i className="bx bx-search"></i>
          </div>
          <div className="other-filter-tags">
            <FilterTags className="filter-tags light" value="Strategy" />
          </div>
        </div>

        <div className="focus-area">
          <strong className="filter__name">FOCUS AREA</strong>
          <div className="search-box">
            <div>
              <FilterTags className="filter-tags dark" value="Focus Area" />
              <FilterTags className="filter-tags dark" value="Focus Area" />
            </div>
            <i className="bx bx-search"></i>
          </div>
          <div className="other-filter-tags">
            <FilterTags className="filter-tags light" value="Focus Area" />
            <FilterTags className="filter-tags dark" value="Focus Area" />
          </div>
        </div>
        <div className="rating">
          <strong className="filter__name">Ratings</strong>
          <div className="rating__filter">
            <div>
              <RatingCheckboxes value={[1, 1, 1, 1]} />
              <RatingCheckboxes value={[1, 1, 1]} />
            </div>
            <div>
              <RatingCheckboxes value={[1, 1, 1]} />
              <RatingCheckboxes value={[1, 1]} />
            </div>
          </div>
        </div>
        <FilterCheckBoxes
          type="Price"
          values={["Free", "Less Than $25", "$25-$50", "More than $50"]}
        />
        <FilterCheckBoxes
          type="Session availability"
          values={["30 min", "60 min", "25 min"]}
        />
        <FilterCheckBoxes
          type="Price"
          values={[
            "English",
            "French",
            "German",
            "Arabic",
            "Hindi",
            "Mandarian Chinese",
          ]}
        />
        <div className="more__filters">
          <strong>more..</strong>
        </div>
      </div>
    </section>
  );
}

export default FilterSection;
