import React from "react";

import "./SecondBlock.scss";

import leftArrow from "../../../assets/img/left_arrow.png";
import rightArrow from "../../../assets/img/right_arrow.png";

export default () => {
  return (
    <div className="block2">
      <div className="tittle">Второк блок</div>
      <div className="content">
        <div className="left">
          <div className="rect--top"></div>
          <div className="rect--side"></div>
          <div className="rect--bottom"></div>
        </div>
        <div className="center"></div>
        <div className="right">
          <div className="rect--top"></div>
          <div className="rect--side"></div>
          <div className="rect--bottom"></div>
        </div>
      </div>
      <div className="pager">
        <div className="left"><img src={leftArrow} alt="left-arr"/></div>
        <div className="center"><span>1 из 5</span></div>
        <div className="right"><img src={rightArrow} alt="right-arr"/></div>
      </div>
    </div>
  );
};
