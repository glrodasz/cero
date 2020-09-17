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
    <Heading size="xs">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Heading>
    <Heading size="md">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Heading>
    <Heading size="lg">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Heading>
    <Heading size="xl">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Heading>
    <Heading size="2xl">
      El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña toca el
      saxofón detrás del palenque de paja.
    </Heading>
  </>
)
