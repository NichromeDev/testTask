import React from "react";

import "./ThirdBlock.scss";

import facebook from "../../../assets/img/facebook.png";
import amazon from "../../../assets/img/amazon.png";
import sony from "../../../assets/img/sony.png";
import AandE from "../../../assets/img/AandE.png";

export default () => {
  return (
    <div className="block3">
      <div className="tittle">Третий блок</div>
      <div className="block3-mob-menu">
        <span className="block3-mob-menu-item active">2019</span>
        <span className="block3-mob-menu-item">2018</span>
        <span className="block3-mob-menu-item">2017</span>
        <span className="block3-mob-menu-item">2016</span>
        <span className="block3-mob-menu-item">2015</span>
        <span className="block3-mob-menu-item">2014</span>
        <span className="block3-mob-menu-item">2013</span>
        <span className="block3-mob-menu-item">2012</span>
        <span className="block3-mob-menu-item">2011</span>
      </div>
      <div className="content">
        <div className="content-card">
          <img src={facebook} alt="facebook" />
          <h2>gdvgatwdawdg awhbdg</h2>
          <span>
            dadiwa jhhadbadwhwb awbdhab hdb wdadb hadba abwd adadwhawdh adwd
          </span>
        </div>
        <div className="content-card">
          <img src={amazon} alt="amazon" />
          <h2>gdvgatwdawdg awhbdg</h2>
          <span>
            dadiwa jhhadbadwhwb awbdhab hdb wdadb hadba abwd adadwhawdh adwd
          </span>
        </div>
        <div className="content-card">
          <img src={sony} alt="sony" />
          <h2>gdvgatwdawdg awhbdg</h2>
          <span>
            dadiwa jhhadbadwhwb awbdhab hdb wdadb hadba abwd adadwhawdh adwd
          </span>
        </div>
        <div className="content-card">
          <img src={AandE} alt="AandE" />
          <h2>gdvgatwdawdg awhbdg</h2>
          <span>
            dadiwa jhhadbadwhwb awbdhab hdb wdadb hadba abwd adadwhawdh adwd
          </span>
        </div>
        <div className="content-card">
          <img src={facebook} alt="facebook" />
          <h2>gdvgatwdawdg awhbdg</h2>
          <span>
            dadiwa jhhadbadwhwb awbdhab hdb wdadb hadba abwd adadwhawdh adwd
          </span>
        </div>
        <div className="content-card">
          <img src={amazon} alt="amazon" />
          <h2>gdvgatwdawdg awhbdg</h2>
          <span>
            dadiwa jhhadbadwhwb awbdhab hdb wdadb hadba abwd adadwhawdh adwd
          </span>
        </div>
        <div className="content-card">
          <img src={sony} alt="sony" />
          <h2>gdvgatwdawdg awhbdg</h2>
          <span>
            dadiwa jhhadbadwhwb awbdhab hdb wdadb hadba abwd adadwhawdh adwd
          </span>
        </div>
        <div className="content-card">
          <img src={AandE} alt="AandE" />
          <h2>gdvgatwdawdg awhbdg</h2>
          <span>
            dadiwa jhhadbadwhwb awbdhab hdb wdadb hadba abwd adadwhawdh adwd
          </span>
        </div>
      </div>
    </div>
  );
};
