import React from "react";
import {PropTypes} from "prop-types";

export const Card = ({ children,reverse }) => {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
};

Card.defaultProps = {
  reverse:false,
}

Card.protoType = {
  reverse: PropTypes.bool,
  children: PropTypes.node.isRequired,
}