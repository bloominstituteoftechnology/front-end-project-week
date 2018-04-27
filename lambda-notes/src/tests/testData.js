import faker from 'faker';

let content;

const markDownExample = `
#### My Todo List
- [ ] todo item 1
- [ ] todo item 2
- [x] todo item 3
- [x] todo item 4
`;

export const testNotes = Array(5).fill().map((_, i) => {
  content = i === 0 ? markDownExample : faker.random.words(10);
  return {
    id: i,
    title: `Card title #${i}`,
    content: content,
    tags: faker.random.words() 
  }
});
