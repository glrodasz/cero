import React from 'react'
import Dropdown from '../../molecules/Dropdown'

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
}

export const Default = () => (
  <Dropdown
    onChange={() => {}}
    options={[
      {
        text: '8:00 AM',
        value: 800,
      },
      {
        text: '10:00 AM',
        value: 1000,
      },
      {
        text: '1:00 PM',
        value: 1300,
      },
      {
        text: '3:00 PM',
        value: 1500,
      },
    ]}
  />
)
