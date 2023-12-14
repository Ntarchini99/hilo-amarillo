import React from "react";
import imgTB from "../../assets/img/Talles/tallesB.png";
import imgTN from "../../assets/img/Talles/tallesN.png";
import imgTA from "../../assets/img/Talles/tallesA.png";

import "./cardsTalles.css";

const cardsTalles = () => {
  return (
    <>
      <div className="containerTalles">
        <h1 className="titleTalle">Talles</h1>
        <div className="contentTalles">
          <div className="cartTalle">
            <img src={imgTA} alt="" />
          </div>
          <div className="cartTalle middle-card">
            <img src={imgTN} alt="" />
          </div>
          <div className="cartTalle">
            <img src={imgTB} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default cardsTalles;