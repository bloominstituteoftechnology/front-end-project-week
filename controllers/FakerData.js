const faker = require("faker")

const fakerData = () => {
    return {
    title: faker.lorem.words(5).toUpperCase(),
    body: faker.lorem.sentences(10)
    }
}

module.exports = fakerData;