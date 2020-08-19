import React from "react";
import Button from "../../atomic/atoms/Button";

export default {
  title: "Atoms/Buttons",
  component: Button,
};

export const Primary = () => <Button type="primary">Primary</Button>
export const Secondary = () => <Button type="secondary">Secondary</Button>
