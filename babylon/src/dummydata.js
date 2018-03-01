const dummyData = [
  {
    id: 1,
    title: 'Example One',
    body: 'This is an example of a note that does not overflow the box, requiring truncation.',
    created: 1519932544303,
  },

  {
    id: 2,
    title: 'Example Two',
    body: 'This is an example of a note that would overflow the box. A body longer than 120 characters, including spaces, will be truncated automatically, and rendered as the opening text and ending with three consecutive periods.',
    created: 1519932544203,
  },

  {
    id: 3,
    title: 'Example Three',
    body: 'This is an example that a continuous string will be interrupted at the box edge... aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    created: 1519932544103,
  },
];

export default dummyData;
