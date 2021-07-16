import React, { FC } from "react";
import "./IconMessage.css";

import BEMHelper from "react-bem-helper";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core";

const classes = new BEMHelper("icon-message");

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const IconMessage: FC<Props> = ({ Icon, children }) => (
  <div {...classes()}>
    <div {...classes("icon-wrapper")}>
      <Icon fontSize="large" />
    </div>
    {children}
  </div>
);

export default IconMessage;
