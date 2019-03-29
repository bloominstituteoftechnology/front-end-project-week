const faker = require("faker")

const Notes = [];

const Note = {
    
}

const fakerData = () => {
    for(i = 0; i < 100; i++) {
        Notes.push({title: faker.lorem.words(5).toUpperCase(),
        body: faker.lorem.sentences(10)});
    }
    return Notes;
}

module.exports = fakerData;