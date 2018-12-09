import Papa from 'papaparse';

/*
  Helper function to parse notes into CSV string and download it
*/
export const downloadCSV = (input, filename='notes.csv') => {
  let csv = Papa.unparse(input);
  if (csv == null) return;

  if (!csv.match(/^data:text\/csv/i)) {
    csv = "data:text/csv;charset=utf-8," + csv;
  }

  const link = document.createElement("a");
  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", filename);
  link.click();
};

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