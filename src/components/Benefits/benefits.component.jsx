import "./benefits.styles.css"

import React, { useState } from "react";

const Benefits = (props) => {

 
    const [active, setActive] = useState(false);
    const handleClick = () => {
      setActive(!active);
    }

    return (
      <button
        className="benefits__container"
        onClick={handleClick}
        style={{ backgroundColor: active ? "#ffeed8" : "" }}
      >
        <img className="benefits__container-img" src={props.img} alt="benefits" />
        <h3 className="benefits__container-header">{props.header}</h3>
        <p className="benefits__container-paragraph">{props.para}</p>
      </button>
    );
  }

  export default Benefits;