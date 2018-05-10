import React from 'react'

export const CustomInput = ({
  input,
  type,
  placeholder,
  meta,
}) => {
  return (
    <div className="CustomInput">
      {type === "textarea"
        ? (
          <textarea
            {...input}
            placeholder={placeholder}
            type={type}
          />
        ) : (
          <input
            {...input}
            placeholder={placeholder}
            type={type}
          />
        )
      }
      {meta.error && meta.touched && (
        <div style={{ color: 'indianred' }}>{meta.error}</div>
      )}
    </div>
  )
}