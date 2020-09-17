import React from 'react'
import Heading from '../../atoms/Heading'

export default {
  title: 'Atoms/Heading',
  component: Heading,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
}

export const Default = () => <Heading>Default Heading</Heading>

export const Colors = () => (
  <>
    <Heading color="default">Default Color</Heading>
    <Heading color="primary">Primary Color</Heading>
  </>
)

export const Sizes = () => (
  <>
    <Heading size="xs">Extra Small Size</Heading>
    <Heading size="xs">Small Size</Heading>
    <Heading size="md">Medium Size</Heading>
    <Heading size="lg">Large Size</Heading>
    <Heading size="xl">Extra Large Size</Heading>
    <Heading size="2xl">Double Extra Large Size</Heading>
  </>
)
