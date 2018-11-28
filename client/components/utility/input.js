import React from 'react'

const Input = props => {
  const { type, value, label, placeholder, name, requiredError } = props
  return (
    <div className="field">
      <label>
        {label} {requiredError && <span>*</span>}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        className={requiredError && requiredError.cssClass}
      />

      {requiredError && requiredError.inputNames.includes(name) && (
        <span className="required-message">{`${label} is a required field`}</span>
      )}
    </div>
  )
}

export default Input
