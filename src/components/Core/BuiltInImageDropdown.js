import React, { useState, useEffect } from "react";

const BuiltInImageDropdown = props => {

  const [dropdown, setDropdown] = useState(false);

  const images = [
    {
      name: "Pasture",
      url: "wp.jpg"
    },
    {
      name: "Des Moines",
      url: "iowa.jpg"
    },

  ]

  let items = [];
  for (var i = 0; i < images.length; i++) {
    let url = images[i].url;
    items.push( <a onClick={() => {setDropdown(false); props.onChange(`../${url}`); }} class="dropdown-item">
      <div className="is-flex">
      <figure class="image is-48x48 mr-1">
        <img className="thumbnail" src={`../${images[i].url}`}/>
      </figure>
      <div class="is-align-items-center is-flex">
      <p className="is-size-6">{images[i].name}</p>
      </div>
      
      </div>

    </a>)
    if (i != images.length - 1) {
      items.push(<hr class="dropdown-divider"/>);
    }
  }

  return (
    <>
      <div className={`dropdown mx-1 ${dropdown ? "is-active" : ""}`}>
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2" onClick={() => setDropdown(!dropdown)}>
            <span>Built-In Images</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu2" role="menu">
          <div class="dropdown-content">
            {items}
          </div>
        </div>
      </div>
    </>
  );
};

export default BuiltInImageDropdown;