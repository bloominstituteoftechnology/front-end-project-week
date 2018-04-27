export const testNotes = Array(5).fill().map((_, i) => {
  return {
    id: i,
    title: `Card title #${i}`,
    content: `Some quick example text for card #${i} to build on the card title and make up the bulk of the card's content.`,
    tags: ''
  }
});
