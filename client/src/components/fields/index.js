import React from 'react'

const styles = {
  color: 'indianred',
  fontSize: '14px',
  fontStyle: 'italic',
  marginLeft: '5px',
}

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
        <div style={styles}>{meta.error}</div>
      )}
    </div>
  )
}