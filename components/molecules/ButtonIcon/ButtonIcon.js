import React from "react";
import PropTypes from "prop-types";

import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";

const ButtonIcon = ({ children, type, icon }) => (
  <Button type={type} isBlock={false}>
    <span style={{ marginRight: 10 }}>{children}</span>{" "}
    {/* FIXME: Add vertical spacer component*/}
    <Icon type={icon} />
  </Button>
);

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  type: PropTypes.oneOf[("primary", "secondary", "tertiary")],
};

ButtonIcon.defaultProps = {
  type: "secondary",
};

export default ButtonIcon;
