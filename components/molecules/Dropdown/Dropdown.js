import React from 'react'
// import PropTypes from 'prop-types'
import Icon from '../../atoms/Icon'

import './Dropdown.css'

const Dropdown = () => (
  <div className="dropdown">
    <Icon type="angleDown" hasBackground />
    <select className="dropdown-select">
      <option>8:00 AM</option>
      <option>9:00 AM</option>
    </select>
  </div>
)

// Dropdown.propTypes = {
//   value: PropTypes.string
// }

export default Dropdown
