import React from "react";

import "./Footer.scss";

import footer from "../../assets/img/footer.png";

export default () => {
  return (
    <footer>
      <span>© Копирайт 2019</span>
      <div className="icon">
        <img src={footer} alt="footer-1" />
      </div>
    </footer>
  );
};
