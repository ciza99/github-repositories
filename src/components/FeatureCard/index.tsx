import React, { FC } from "react";
import "./FeatureCard.css";

import BEMHelper from "react-bem-helper";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap, withStyles } from "@material-ui/core";

const classes = new BEMHelper("feature-card");

const makePrimaryColor = withStyles({
  root: {
    color: "var(--clr-primary)",
    fontSize: "3rem",
  },
});

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  text: string;
}

const FeatureCard: FC<Props> = ({ Icon, title, text }) => {
  const PrimaryIcon = makePrimaryColor(Icon);

  return (
    <div {...classes()}>
      <PrimaryIcon />
      <p {...classes("title")}>{title}</p>
      <p {...classes("text")}>{text}</p>
    </div>
  );
};

export default FeatureCard;
