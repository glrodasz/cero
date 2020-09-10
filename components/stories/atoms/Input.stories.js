import React from 'react'
import Input from '../../atoms/Input'

export default {
  title: 'Atoms/Input',
  component: Input,
}

export const Text = () => (
  <Input onChange={() => {}} type="text" placeholder="Nombres" />
)
