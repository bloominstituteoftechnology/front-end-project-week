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

/*
  Helper function to extract new Lines
*/
export const textWithNewLine = (text) => {
  return text.split(String.fromCharCode(10));
}

/*
  Helper function to sort notes
*/
export const sortNotes = (notes, sortTerm) => {
  switch(sortTerm) {
    case 'newest':
      return [...notes].reverse();
    case 'az':
      return [...notes].sort( 
        (note1, note2) => (
          note1.title.toLowerCase() < note2.title.toLowerCase() ?
          -1 : 0
        ));
    case 'za':
      return [...notes].sort( 
        (note1, note2) => (
          note1.title.toLowerCase() > note2.title.toLowerCase() ?
          -1: 0
        ));
    default:
      return [...notes];
  }
}