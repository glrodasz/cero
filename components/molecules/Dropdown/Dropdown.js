import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../../atoms/Icon'

import styles from './Dropdown.module.css'

const Dropdown = ({ id, className, options, value, onChange }) => (
  <div id={id} className={classNames(className, styles.dropdown)}>
    <Icon className={styles['dropdown-icon']} type="angleDown" hasBackground />
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

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  value: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
}

Dropdown.defaultProps = {
  value: '',
}

export default Dropdown
