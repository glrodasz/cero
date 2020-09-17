import React from 'react'
import Button from '../../atoms/Button'

export default {
  title: 'Atoms/Button',
  component: Button,
}

const Template = (props) => <Button {...props} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default Button',
}

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  children: 'Primary Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
  children: 'Secondary Button',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  type: 'tertiary',
  children: 'Tertiary Button',
}
