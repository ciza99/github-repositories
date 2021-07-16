import React, { FC } from "react";
import "./InfoItem.css";

import BEMHelper from "react-bem-helper";
import { MaterialIcon } from "../../types/MaterialIcon";

const classes = new BEMHelper("info-item");

interface Props {
  Icon: MaterialIcon;
  text: string;
}

const InfoItem: FC<Props> = ({ Icon, text }) => (
  <div {...classes()}>
    <Icon />
    <p {...classes("text")}>{text}</p>
  </div>
);

export default InfoItem;
