export const searchFunc = (query, notes) =>{
    let searchedNotes = [];
    console.log("SearFunc input = ", query)    ;
    searchedNotes = notes.filter( note => 
        (note.title.includes(query) || note.textBody.includes(query)));

    console.log("SearFunc result = ", searchedNotes)    ;
    return searchedNotes;
}