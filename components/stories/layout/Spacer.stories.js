import React from 'react'
import Spacer from '../../layout/Spacer'

export default {
  title: 'Layout/Spacer',
  component: Spacer,
}

export const Default = () => <Spacer size={8} isVisible />
export const Horizontal = () => <Spacer.Horizontal size={8} isVisible />
export const Vertical = () => (
  <Spacer.Vertical size={12} isVisible maxHeight={200} />
)
