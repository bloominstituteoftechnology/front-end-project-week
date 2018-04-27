function downloadCSV(csv, filename) {
  var csvFile;
  var downloadLink;

  // CSV file
  csvFile = new Blob([csv], {type: "text/csv"});
  downloadLink = document.createElement("a");
  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(csvFile);
  downloadLink.click();
}

export function CSVExporter (arr) {
  console.log('export ', arr);
  const csv = [];

  for(let i = 0; i< arr.length; i++){
    csv.push(Object.values(arr[i]));
  }
  const myArr = csv.join(",;");
  console.log(myArr);
    // Download CSV file
    downloadCSV(csv.join("\n"), 'notes.csv');
};