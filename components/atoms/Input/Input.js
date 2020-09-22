import React from 'react'
import PropTypes from 'prop-types'

import styles from './Input.module.css'

const Input = ({ type, value, onChange, placeholder }) => (
  <input
    className={styles.input}
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  ></input>
)

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text']),
  value: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Input
