import React, { useState, useEffect } from 'react'
import RadioProps from './Radio.types'
import './Radio.scss'

import ExtendedButton from './Helpers/ExtendedButton'

const Radio = ({
  name,
  onRadioChange,
  size = 'medium',
  color = 'primary',
  labelPlacement = 'right',
  disabled = false,
  horizontal = false,
  children,
}: RadioProps) => {
  const [checked, setChecked] = useState<string | number>(null)

  useEffect(() => {
    if (!disabled) onRadioChange(checked)
  }, [checked])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value)
  }

  return (
    <div
      data-testid="radio-wrapper"
      className={`
        radio-nm disabled-${disabled} 
        horizontal-${horizontal} 
        vertical-label-${labelPlacement === 'bottom' || labelPlacement === 'top'}
      `}>
      <div className="form-label">{name}</div>

      {React.Children.map(children, child =>
        React.isValidElement(child) ? (
          <ExtendedButton
            {...child.props}
            checked={child.props.value === checked}
            onChange={onChange}
            name={name}
            size={size}
            color={color}
            labelPlacement={labelPlacement}
            disabled={disabled ? true : child.props.disabled}
          />
        ) : null
      )}
    </div>
  )
}

export default Radio
