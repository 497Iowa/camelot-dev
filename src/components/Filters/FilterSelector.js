import React, { useState, useEffect } from "react";
import defaultFilters from "../../defaultFilters";

function FilterItem(filterProps) {
  const [loading, setLoading] = useState(false);
   
  // useEffect(() => {
  //   if (!filterProps.filterLoading) {
  //     //setLoading(false);
  //     console.log("changing back")
  //   }
  // }, [filterProps.filterLoading])

  const onApplyClicked = () => {
    setLoading(true);
    console.log(loading);
    filterProps.setXml(filterProps.filter.xml, () => {setLoading(false)});
  }

  return (
      <div className="card mb-2">
      <header className="card-header">
          <p className="card-header-title">
          {filterProps.filter.name}
          </p>
          <div className="card-header-icon" aria-label="more options">
          <button className={`button is-success ${loading ? "is-loading" : ""}`} onClick={onApplyClicked}>
              <span>Apply</span>
                  <span className="icon is-small">
                  <i className="fas fa-wand-magic-sparkles"></i>
                  </span>
              </button>
          </div>
      </header>
      </div>
  );
}

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
  

  return (
    <>
    <div className="content">
        <h1>Built-In Filters</h1>
    </div>
        {defaultFilters.filters.map(e => 
                    <FilterItem key={e.name} filter={e}
                      setXml={props.setXml} filterLoading={props.filterLoading}/>
                  )}
    <div className="content mt-5">
        <h1>Custom Filters</h1>
    </div>             
    {filters.filters.map(e => 
                    <FilterItem key={e.name} filter={e}
                    setXml={props.setXml} filterLoading={props.filterLoading}/>
                  )}
        
    </>
  );
};

export default FilterSelector;