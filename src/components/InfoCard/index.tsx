import React, { FC } from "react";
import "./InfoCard.css";

import BEMHelper from "react-bem-helper";

const classes = new BEMHelper("info-card");

interface Props {
  title: string;
}

const InfoCard: FC<Props> = ({ title, children }) => (
  <div {...classes()}>
    <p {...classes("title")}>{title}</p>
    {children}
  </div>
);

export default InfoCard;
