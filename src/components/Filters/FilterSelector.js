import React, { useState, useEffect } from "react";
import defaultFilters from "../../defaultFilters";

const FilterSelector = props => {

    const [filters, setFilters] = useState({filters: []});

    function getFiltersFromStorage() {
      let filters = localStorage.getItem("userFilters");
      if (filters === null) {
        localStorage.setItem("userFilters", `{"filters": []}`);
      }
      return filters === null ? {filters: []} : JSON.parse(filters);
    }

    useEffect(() => {
        setFilters(getFiltersFromStorage());
      }, []);
    
      function FilterItem(filterProps) {
        const onApplyClicked = () => {
          props.setXml(filterProps.filter.xml);
        }

        return (
            <div class="card mb-2">
            <header class="card-header">
                <p class="card-header-title">
                {filterProps.filter.name}
                </p>
                <div class="card-header-icon" aria-label="more options">
                <button class="button is-success" onClick={onApplyClicked}>
                    <span>Apply</span>
                        <span class="icon is-small">
                        <i class="fas fa-wand-magic-sparkles"></i>
                        </span>
                    </button>
                </div>
            </header>
            </div>
        );
      }

  return (
    <>
    <div className="content">
        <h1>Built-In Filters</h1>
    </div>
        {defaultFilters.filters.map(e => 
                    <FilterItem filter={e}/>
                  )}
                  
    
        
    </>
  );
};

export default FilterSelector;