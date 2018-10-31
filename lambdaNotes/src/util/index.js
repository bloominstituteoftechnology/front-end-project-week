export const searchFunc = (query, notes) =>{
    let searchedNotes = [];
    console.log("SearFunc input query= ", query)    ;
    console.log("SearFunc input notes= ", notes)    ;
    searchedNotes = notes.filter( note => 
        (note.title.includes(query) || note.textBody.includes(query)));

    console.log("SearFunc result = ", searchedNotes)    ;
    return searchedNotes;
}