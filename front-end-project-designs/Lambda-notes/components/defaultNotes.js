export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          title: "Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ...",
          id: 1,
        },
        {
          title: "Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ...",
          id: 2,
        },
        {
          title: "Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ...",
          id: 3,
        },
        {
          title: "Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ...",
          id: 4,
        },
        {
          title: "Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ...",
          id: 5,
        },
        {
          title: "Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ...",
          id: 6,
        },
        {
          title: "Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ...",
          id: 7,
        },
        {
          title: "Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ...",
          id: 8,
        },
        {
          title: "Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ...",
          id: 9,
        },
      ]
    }

    export const getNotes = () => notes;
  }
}