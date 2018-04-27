import faker from 'faker';

export const testNotes = Array(5).fill().map((_, i) => {
  return {
    id: i,
    title: `Card title #${i}`,
    content: faker.random.words(10),
    tags: faker.random.words() 
  }
});
