import React, { FC } from "react";
import "./IconMessage.css";

import BEMHelper from "react-bem-helper";
import { MaterialIcon } from "../../types/MaterialIcon";

const classes = new BEMHelper("icon-message");

interface Props {
  Icon: MaterialIcon;
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
