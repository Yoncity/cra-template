import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <div id="loader_container">
      <div id="loader">
        <span className="circle" id="c_1"></span>
        <div id="inner">
          <span className="circle" id="c_2"></span>
          <span className="circle" id="c_3"></span>
        </div>
        <span className="circle" id="c_1"></span>
      </div>
    </div>
  );
};

export default Loader;
