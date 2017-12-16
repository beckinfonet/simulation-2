import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './styles.css'

const Button = props => {
  const Component = () => (
    <div
      className='button-container'
      style={{ backgroundColor: props.backgroundColor }}
      onClick={props.onClick}
    >
      <span className='button-label' style={{ color: props.color }}>
        {props.name}
      </span>
    </div>
  )

  if (props.redirectTo) {
    return (
      <Link to={props.redirectTo} className='link'>
        <Component />
      </Link>
    )
  }
  return <Component />
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  redirectTo: PropTypes.string,
}

export default Button
