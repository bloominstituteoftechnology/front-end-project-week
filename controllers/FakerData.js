const faker = require("faker")

const fakerData = () => {
    return {
    id: faker.random.uuid(),
    title: faker.lorem.words(5).toUpperCase(),
    body: faker.lorem.sentences(10)
    }
}

module.exports = fakerData;