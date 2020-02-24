import React from "react";

import "./SecondBlock.scss";

import leftArrow from "../../../assets/img/left_arrow.png";
import rightArrow from "../../../assets/img/right_arrow.png";
import ellipse from "../../../assets/img/ellipse.png";

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
        <div className="center">
          <div className="center-l">
            <div className="center-l-tittle">
              <span className="spec spec1">Лоремова</span>
              <span className="spec spec2">Ипсума Анатольевна</span>
              <span className="spec spec3">lorem ipsum dolor</span>
            </div>
            <div className="center-l-hidden">Скрыть</div>
            <ul>
              <li>
                <div className="circle">
                  <div></div>
                </div>
                <span>lorem ipsum dolor lorem</span>
              </li>
              <li>
                <div className="circle">
                  <div></div>
                </div>
                <span>lorem ipsum dolor lorem</span>
              </li>
              <li>
                <div className="circle">
                  <div></div>
                </div>
                <span>lorem ipsum dolor lorem</span>
              </li>
              <li>
                <div className="circle">
                  <div></div>
                </div>
                <span>lorem ipsum dolor lorem</span>
              </li>
              <li>
                <div className="circle">
                  <div></div>
                </div>
                <span>lorem ipsum dolor lorem</span>
              </li>
              <li>
                <div className="circle">
                  <div></div>
                </div>
                <span>lorem ipsum dolor lorem</span>
              </li>
            </ul>
            <div className="center-l-subtitle">
              <span className="head">lorem ipsum </span>
              <span className="desc">
                lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
                dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem
                ipsum dolorlorem ipsum dolorlorem ipsum dolor
              </span>
              <span className="head">lorem ipsum </span>
              <span className="desc">
                lorem ipsum dolorlorem ipsum dolorloremr
              </span>
            </div>
          </div>
          <div className="center-r">
            <img src={ellipse} alt="ellipse-1" />
          </div>
        </div>
        <div className="right">
          <div className="rect--top"></div>
          <div className="rect--side"></div>
          <div className="rect--bottom"></div>
        </div>
      </div>
      <div className="pager">
        <div className="left">
          <img src={leftArrow} alt="left-arr" />
        </div>
        <div className="center">
          <span>1 из 5</span>
        </div>
        <div className="right">
          <img src={rightArrow} alt="right-arr" />
        </div>
      </div>
    </div>
  );
};
