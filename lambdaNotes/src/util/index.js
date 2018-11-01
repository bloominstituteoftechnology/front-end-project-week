export const searchFunc = (query, notes) =>{
  
    return notes.filter( note => 
        (note.title.includes(query) || note.textBody.includes(query)));
}


export const downloadNotesToCSV = (notes) =>{
  console.log("down function start!")
    let filename, link, csv, keys, columnDelimiter, lineDelimiter;

    // data = data || null;
    // if (data == null || !data.length) {
    //     return null;
    // }

    columnDelimiter = ',';
    lineDelimiter =  '\n';
    filename = 'export.csv';

    keys = Object.keys(notes[0]);

    csv = '';
    csv += keys.join(columnDelimiter);
    csv += lineDelimiter;

    notes.forEach(function(item) {
       let ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) csv += columnDelimiter;

            csv += item[key];
            ctr++;
        });
        csv += lineDelimiter;
    });

    if (csv == null) return;

    csv = 'data:text/csv;charset=utf-8,' + csv;

    link = document.createElement('a');
    link.setAttribute('href', encodeURI(csv));
    link.setAttribute('download', filename);
    link.click();
}


