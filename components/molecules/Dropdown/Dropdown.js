import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../atoms/Icon'

import styles from './Dropdown.module.css'

const Dropdown = ({ options, value, onChange }) => (
  <div className={styles.dropdown}>
    <Icon type="angleDown" hasBackground />
    <select
      className={styles['dropdown-select']}
      onChange={onChange}
      value={value}
    >
      {options.map(({ text, value }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  </div>
)

Dropdown.defaultProps = {
  value: '',
}

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
}

export default Dropdown
