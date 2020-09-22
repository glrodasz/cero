import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { getSize } from './helpers'

import styles from './Spacer.module.css'

const Vertical = ({ size, maxHeight, isVisible }) => (
  <div
    className={classNames(styles.spacer, {
      [styles['is-visible']]: isVisible,
    })}
    style={{
      display: 'block',
      height: '100vh',
      maxHeight,
      width: getSize(size),
    }}
  />
)

Vertical.defaultProps = {
  size: 'none',
  maxHeight: '100%',
}

Vertical.propTypes = {
  size: PropTypes.string,
  isVisible: PropTypes.bool,
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Vertical
