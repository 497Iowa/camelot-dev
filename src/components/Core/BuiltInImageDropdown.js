import React, { useState } from "react";

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
    items.push( <a onClick={() => {setDropdown(false); props.onChange(`../${url}`); }} className="dropdown-item" key={i + "a"}>
      <div className="is-flex">
      <figure className="image is-48x48 mr-1">
        <img className="thumbnail" alt="thumbnail" src={`../${images[i].url}`}/>
      </figure>
      <div className="is-align-items-center is-flex">
      <p className="is-size-6">{images[i].name}</p>
      </div>
      
      </div>

    </a>)
    if (i !== images.length - 1) {
      items.push(<hr className="dropdown-divider" key={i + "hr"}/>);
    }
  }

  return (
    <>
      <div className={`dropdown mx-1 ${dropdown ? "is-active" : ""}`}>
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2" onClick={() => setDropdown(!dropdown)}>
            <span>Built-In Images</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu2" role="menu">
          <div className="dropdown-content">
            {items}
          </div>
        </div>
      </div>
    </>
  );
};

export default BuiltInImageDropdown;