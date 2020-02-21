import React from "react";

import "./FirstBlock.scss";

import col1row1 from "../../../assets/img/col1row1.png";
import col1row2 from "../../../assets/img/col1row2.png";
import col1row3 from "../../../assets/img/col1row3.png";
import col1row4 from "../../../assets/img/col1row4.png";

import col2row1 from "../../../assets/img/col2row1.png";
import col2row2 from "../../../assets/img/col2row2.png";
import col2row4 from "../../../assets/img/col2row4.png";

export default () => {
  return (
    <div className="block1">
      <div className="title">lorem ipsum dolor sit amet</div>
      <div className="subtitle">
        <span>lorem</span> ipsum dolor sit amet
      </div>
      <div className="table">
        <div className="col col1">
          <div className="row row1">
            <img src={col1row1} alt="col1row1" />
          </div>
          <div className="row row2">
            <img src={col1row2} alt="col1row2" />
          </div>
          <div className="row row3">
            <img src={col1row3} alt="col1row3" />
          </div>
          <div className="row row4">
            <img src={col1row4} alt="col1row4" />
          </div>
        </div>
        <div className="col col2">
          <div className="row row1">
            <img src={col2row1} alt="col2row1" />
          </div>
          <div className="row row2">
            <img src={col2row2} alt="col2row2" />
          </div>
          <div className="row row3">
            <img src={col2row2} alt="col2row3" />
          </div>
          <div className="row row4">
            <img src={col2row4} alt="col2row4" />
          </div>
        </div>
        <div className="col col3">
          <div className="row row1">
            <span className="span">Lorem ipsum dol</span>
          </div>
          <div className="row row2">lorem ipsum</div>
          <div className="row row3">lorem ipsum dolor sit amet</div>
          <div className="row row4">lorem ipsum</div>
        </div>
      </div>
      <div className="button">lorem ipsum dolor</div>
    </div>
  );
};
