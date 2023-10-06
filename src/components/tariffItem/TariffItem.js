import React from "react";
import "./style.css";
import Button from "../button/Button";

const TariffItem = ({ title, description, price }) => {
  return (
    <div className="tariff-item">
      <div className="tariff-item__title">{title}</div>
      <div className="tariff-item__description">{description}</div>
      <Button text={`Купить за: ${price} руб`} color={"blue"} />
    </div>
  );
};

export default TariffItem;
