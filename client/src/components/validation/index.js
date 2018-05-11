export const required = value => value ? undefined : '* Required Field'

export const validate = values => {
  const errors = {}

  if (!values.title)
    errors.firstname = 'Note title is required!'

  if (!values.body)
    errors.firstname = 'Note body is required!'

  return errors
}
