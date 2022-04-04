import React, { useState, useEffect } from "react";
import defaultFilters from "./defaultFilters";

const FilterNavigator = props => {

  const [dropdown, setDropdown] = useState(false);

  const [filterInput, setFilterInput] = useState("");

  const [filters, setFilters] = useState({filters: []});

  function getFiltersFromStorage() {
    let filters = localStorage.getItem("userFilters");
    if (filters === null) {
      localStorage.setItem("userFilters", `{"filters": []}`);
    }
    return filters === null ? {filters: []} : JSON.parse(filters);
  }

  function updateFiltersInStorage(newFilters) {
    localStorage.setItem("userFilters", JSON.stringify(newFilters));
  }

  function isFilterInStorage(name) {
    if (filters === null) return false;
    return filters.filters.find(elt => elt.name === name) !== undefined;
  }

  function isFilterDefault(name) {
    return defaultFilters.filters.find(elt => elt.name === name) !== undefined;
  }

  useEffect(() => {
    setFilters(getFiltersFromStorage());
  }, []);

  const onSaveClicked = () => {
    console.log(filterInput);
    
    if (isFilterInStorage(filterInput)) {
      // update in local storage
      let newFilters = filters.filters;
      newFilters = newFilters.map((e) => {
        if (e.name === filterInput) {
          e.time = Date.now();
          e.xml = props.xml;
        }
        return e;
      });
      props.setXml(props.xml);
      setFilters({ ...filters, filters: newFilters });
      updateFiltersInStorage({ ...filters, filters: newFilters });
    } else {
      let newFilters = filters.filters;
      newFilters.push({name: filterInput, time: Date.now(), xml: props.xml});
      props.setXml(props.xml);
      setFilters({ ...filters, filters: newFilters });
      updateFiltersInStorage({ ...filters, filters: newFilters });
    }
  }

  function FilterItem(filterProps) {
    const onEditClicked = () => {
      setDropdown(false);
      setFilterInput(filterProps.filter.name);
      console.log(filterProps)
      props.setXml(filterProps.filter.xml);
    }

    const onDeleteClicked = () => {
      setDropdown(false);
      let newFilters = filters.filters;
      newFilters = newFilters.filter((e) => e.name !== filterProps.filter.name);
      setFilters({ ...filters, filters: newFilters });
      updateFiltersInStorage({ ...filters, filters: newFilters });

      if (filterProps.filter.name === filterInput) {
        setFilterInput("");
      }
    }


    const editButton = filterProps.isDefault ? <></> :
      <p className="control">
        <button className="button is-white " onClick={onEditClicked}>
          <span className="icon is-small is-right"><i className="fas fa-pen-to-square"></i></span>
        </button>
      </p>

    const deleteButton = filterProps.isDefault ? <></> :
      <p className="control">
        <button className="button is-white" onClick={onDeleteClicked}>
          <span className="icon is-small is-right"><i className="fas fa-trash"></i></span>
        </button>
      </p>

    const loadButton = !filterProps.isDefault ? <></> :
    <p className="control">
      <button className="button is-white " onClick={onEditClicked}>
        <span className="icon is-small is-right"><i className="fas fa-arrow-down"></i></span>
      </button>
    </p>

    return (
      <div className="dropdown-item level filter-item">
                  <div className="level-left">
                    <div className="level-item">
                      <p>{filterProps.filter.name}</p>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="field is-grouped level-item">
                        {editButton}
                        {deleteButton}
                        {loadButton}
                    </div>
                  </div>
                </div>
    );
  }

  let saveBtnClass = "button save-btn is-outline";
  let saveBtnDisabled = false;
  let showUnsavedMessage = false;
  let showNewFilterMessage = false;
  if (filterInput === "") {
    saveBtnDisabled = true;
  } else if (!isFilterInStorage(filterInput) && !isFilterDefault(filterInput)) {
    saveBtnClass += " is-success";
    showNewFilterMessage = true && !dropdown;
  } else if (props.dirty && !isFilterDefault(filterInput)) {
    saveBtnClass += " is-danger"
    showUnsavedMessage = true && !dropdown;
  } else if (isFilterDefault(filterInput)) {
    saveBtnDisabled = true;
  }

  let unsaved = <></>;
  let newFilter = <></>
  if (showUnsavedMessage) {
    unsaved = <article className="message is-danger unsaved-message">
      <div className="message-body">
      You have unsaved changes.
      </div>
    </article>
  } else if (showNewFilterMessage) {
    newFilter = <article className="message is-success unsaved-message">
      <div className="message-body">
        Press save to save your new filter!
      </div>
    </article>
  }
  filters.filters.sort((a, b) => {
    return a.time > b.time
  });

  const filtersDropdownItems = filters.filters.length === 0 ? <></> :
    <>
    <div className="dropdown-item dropdown-separator">My Filters</div>
    {filters.filters.map(e => 
        <FilterItem filter={e}/>
      )}
      <hr className="dropdown-divider"></hr>
    </>

  return (
    <>
      <div className={`dropdown is-up filter-navigator ${dropdown ? "is-active" : ""}`}>
        <div className="dropdown-trigger">
           {unsaved}
           {newFilter}
            <div className="field has-addons">
                <div className="control">
                    <input className="input" type="text" placeholder="Enter filter name to save!"
                      value={filterInput}
                      onChange={(e) => setFilterInput(e.target.value)}/>
                </div>
                <div className="control">
                  <button className={saveBtnClass} disabled={saveBtnDisabled} onClick={onSaveClicked}>
                    <span className="icon is-small is-right"><i className="fas fa-floppy-disk"></i></span>
                  </button>
                </div>
                <div className="control">
                  <button className="button is-outlined" onClick={() => setDropdown(!dropdown)}>
                    <span className="icon is-small is-right"><i className="fas fa-angle-up"></i></span>
                  </button>
                </div>

            </div>
        </div>
        <div className="dropdown-menu" id="filter-dropdown-menu" role="menu">
            <div className="dropdown-content filter-dropdown-content">
                {filtersDropdownItems}
                <div className="dropdown-item dropdown-separator">Built-in Filters</div>
                {defaultFilters.filters.map(e => 
                    <FilterItem isDefault filter={e}/>
                  )}
            </div>
        </div>
    </div>
    </>
  );
};

export default FilterNavigator;