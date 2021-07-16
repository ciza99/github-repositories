import React, { FC } from "react";
import "./InfoItem.css";

import BEMHelper from "react-bem-helper";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

const classes = new BEMHelper("info-item");

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  text: string;
}

const InfoItem: FC<Props> = ({ Icon, text }) => (
  <div {...classes()}>
    <Icon />
    <p {...classes("text")}>{text}</p>
  </div>
);

export default InfoItem;
