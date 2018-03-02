const dummyData = [
  {
    id: 1,
    title: 'Example One',
    body: 'This is an example of a note that does not overflow the box, requiring truncation.',
    created: 1519932544303,
    stamp: 'Thu Mar 01 2018 14:20',
  },

  {
    id: 2,
    title: 'Example Two',
    body: 'This is an example of a note that would overflow the box. A body longer than 120 characters, including spaces, will be truncated automatically, and rendered as the opening text and ending with three consecutive periods.',
    created: 1519932544203,
    stamp: 'Wed Feb 28 2018 13:37',
  },

  {
    id: 3,
    title: 'Example Three',
    body: 'This is an example that a continuous string will be interrupted at the box edge. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    created: 1519932544103,
    stamp: 'Tue Feb 27 2018 10:24',
  },
];

export default dummyData;
