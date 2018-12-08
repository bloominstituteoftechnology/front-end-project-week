/*
  Helper function to truncate text to a maximum number of characher
  inputs: 
    text: string to truncate
    max: the maximum character
    ext: trailing end char in addition to the maximum chars returned
*/
export const truncate = (text, max=15, ext=' ...') => {

  if (text.length <= max) return text;
  
  const newText = text.slice(0, max);
  return newText.slice(0, newText.lastIndexOf(' ')) + ext;
}