import React, { useState } from "react";

import constants from "../../constants";

import "./Header.scss";

import logo from "../../assets/img/LOGO.png";
import vector from "../../assets/img/pipe.png";
import instagram from "../../assets/img/instagram.png";
import vk from "../../assets/img/vk.png";
import closedLogo from "../../assets/img/LOGO1.png";

const phoneNumber = constants.phoneNumber;

export default () => {
  const [closed, setClosed] = useState(false);
  const close = () => setClosed(!closed);
  return (
    <header className={`${closed && "opened"}`}>
      <div className="logo">
        <img src={closed ? logo : closedLogo} alt="logo-1" />
      </div>
      <div className="others">
        <div className="mobile-button">
          <img src={vector} alt="vector-1" />
        </div>
        <a className={`phone ${closed && "opened"}`} href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </a>
        <div className="instagram social">
          <img src={instagram} alt="instagram-1" />
        </div>
        <div className="vk social">
          <img src={vk} alt="vk-1" />
        </div>
        {closed ? (
          <div className="menu--close" onClick={close}>
            <div className="close-log log1"></div>
            <div className="close-log log2"></div>
          </div>
        ) : (
          <div className="menu--open" onClick={close}>
            <div className="open-log open1"></div>
            <div className="open-log open2"></div>
          </div>
        )}
      </div>
      {closed && (
        <div className="menu">
          <ul>
            <li>Пункт меню 1</li>
            <li>Пункт меню 2</li>
            <li>Пункт меню 3</li>
            <li>Пункт меню 4</li>
            <li>Пункт меню 5</li>
          </ul>
        </div>
      )}
    </header>
  );
};
