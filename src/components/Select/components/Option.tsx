import React, { useRef } from 'react'
import './Option.scss'

import { ReactComponent as CheckMarkIcon } from '../../../assets/Checkmark.svg'
import OptionProps from './Option.types'

const Option: React.FC<OptionProps> = ({
  value,
  selected,
  leftIcon,
  rightIcon,
  disabled = false,
  ...props
}) => {
  const ref = useRef<HTMLLIElement>(null)

  const left = typeof leftIcon === 'string' ? <img src={leftIcon} /> : leftIcon
  const right = typeof rightIcon === 'string' ? <img src={rightIcon} /> : rightIcon

  return (
    <li
      ref={ref}
      role="option"
      aria-disabled={disabled}
      className="option"
      value={value}
      {...props}
    >
      <div className="label">
        {leftIcon && left}
        {props.children}
        {rightIcon && right}
      </div>
      {selected && <CheckMarkIcon className="check-icon" />}
    </li>
  )
}

export default Option
