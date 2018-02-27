const noteData = [
    {
        title: "Note Title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet libero eget velit interdum sollicitudin. Cras ac lobortis est. Aliquam tincidunt diam nunc, in faucibus sem semper eget. Nam et quam eget risus volutpat elementum in ut felis. Etiam arcu nulla, aliquam sed leo eget, pellentesque imperdiet elit. Nullam id odio vel nunc venenatis dapibus. Nulla facilisi. Nulla euismod venenatis orci, condimentum consequat sem cursus at. Praesent malesuada augue et metus facilisis, id aliquam orci mattis. Integer eleifend mattis sagittis. Pellentesque non nisi viverra, vulputate dui id, scelerisque lorem. Nam ullamcorper quam et nunc pulvinar, nec tristique felis ornare. Nullam sit amet metus suscipit nisi elementum faucibus sed sollicitudin ligula.",
    },
    {
        title: "Note Title",
        text: "Aenean velit lacus, varius ac ex ac, dapibus tempus turpis. Suspendisse sollicitudin vitae felis vitae rutrum. Maecenas in quam cursus, porta tellus id, tempor massa. Vestibulum sed nisl et justo hendrerit iaculis. Etiam congue in urna ac feugiat. Vestibulum eget feugiat eros. Nulla tristique blandit viverra.",
    },
    {
        title: "Note Title",
        text: "Donec ac cursus sem, sit amet elementum felis. In elementum velit purus, nec mattis magna tincidunt eget. Praesent laoreet congue elit, vitae rhoncus ex. Donec augue ipsum, convallis sit amet ipsum non, pretium varius magna. Sed blandit ligula eros, id interdum magna tincidunt in. Fusce sed gravida diam. Ut sed rhoncus sem. Praesent est elit, egestas ac dictum vulputate, vulputate sed nulla. Vivamus sit amet metus mi. Pellentesque velit orci, aliquet nec nibh quis, malesuada varius lectus. Vivamus aliquet lectus quis lectus vehicula, vitae imperdiet est dignissim. Donec sed eros venenatis, cursus nisl a, finibus orci. Phasellus at pharetra sem, a ornare sapien. Nullam dapibus congue est eget dapibus. Fusce tincidunt neque dignissim elit efficitur, rhoncus faucibus tellus dignissim.",
    },
    {
        title: "Note Title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet libero eget velit interdum sollicitudin. Cras ac lobortis est. Aliquam tincidunt diam nunc, in faucibus sem semper eget. Nam et quam eget risus volutpat elementum in ut felis. Etiam arcu nulla, aliquam sed leo eget, pellentesque imperdiet elit. Nullam id odio vel nunc venenatis dapibus. Nulla facilisi. Nulla euismod venenatis orci, condimentum consequat sem cursus at. Praesent malesuada augue et metus facilisis, id aliquam orci mattis. Integer eleifend mattis sagittis. Pellentesque non nisi viverra, vulputate dui id, scelerisque lorem. Nam ullamcorper quam et nunc pulvinar, nec tristique felis ornare. Nullam sit amet metus suscipit nisi elementum faucibus sed sollicitudin ligula.",
    },
    {
        title: "Note Title",
        text: "Aenean velit lacus, varius ac ex ac, dapibus tempus turpis. Suspendisse sollicitudin vitae felis vitae rutrum. Maecenas in quam cursus, porta tellus id, tempor massa. Vestibulum sed nisl et justo hendrerit iaculis. Etiam congue in urna ac feugiat. Vestibulum eget feugiat eros. Nulla tristique blandit viverra.",
    },
    {
        title: "Note Title",
        text: "Donec ac cursus sem, sit amet elementum felis. In elementum velit purus, nec mattis magna tincidunt eget. Praesent laoreet congue elit, vitae rhoncus ex. Donec augue ipsum, convallis sit amet ipsum non, pretium varius magna. Sed blandit ligula eros, id interdum magna tincidunt in. Fusce sed gravida diam. Ut sed rhoncus sem. Praesent est elit, egestas ac dictum vulputate, vulputate sed nulla. Vivamus sit amet metus mi. Pellentesque velit orci, aliquet nec nibh quis, malesuada varius lectus. Vivamus aliquet lectus quis lectus vehicula, vitae imperdiet est dignissim. Donec sed eros venenatis, cursus nisl a, finibus orci. Phasellus at pharetra sem, a ornare sapien. Nullam dapibus congue est eget dapibus. Fusce tincidunt neque dignissim elit efficitur, rhoncus faucibus tellus dignissim.",
    },
    {
        title: "Note Title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet libero eget velit interdum sollicitudin. Cras ac lobortis est. Aliquam tincidunt diam nunc, in faucibus sem semper eget. Nam et quam eget risus volutpat elementum in ut felis. Etiam arcu nulla, aliquam sed leo eget, pellentesque imperdiet elit. Nullam id odio vel nunc venenatis dapibus. Nulla facilisi. Nulla euismod venenatis orci, condimentum consequat sem cursus at. Praesent malesuada augue et metus facilisis, id aliquam orci mattis. Integer eleifend mattis sagittis. Pellentesque non nisi viverra, vulputate dui id, scelerisque lorem. Nam ullamcorper quam et nunc pulvinar, nec tristique felis ornare. Nullam sit amet metus suscipit nisi elementum faucibus sed sollicitudin ligula.",
    },
    {
        title: "Note Title",
        text: "Aenean velit lacus, varius ac ex ac, dapibus tempus turpis. Suspendisse sollicitudin vitae felis vitae rutrum. Maecenas in quam cursus, porta tellus id, tempor massa. Vestibulum sed nisl et justo hendrerit iaculis. Etiam congue in urna ac feugiat. Vestibulum eget feugiat eros. Nulla tristique blandit viverra.",
    },
    {
        title: "Note Title",
        text: "Donec ac cursus sem, sit amet elementum felis. In elementum velit purus, nec mattis magna tincidunt eget. Praesent laoreet congue elit, vitae rhoncus ex. Donec augue ipsum, convallis sit amet ipsum non, pretium varius magna. Sed blandit ligula eros, id interdum magna tincidunt in. Fusce sed gravida diam. Ut sed rhoncus sem. Praesent est elit, egestas ac dictum vulputate, vulputate sed nulla. Vivamus sit amet metus mi. Pellentesque velit orci, aliquet nec nibh quis, malesuada varius lectus. Vivamus aliquet lectus quis lectus vehicula, vitae imperdiet est dignissim. Donec sed eros venenatis, cursus nisl a, finibus orci. Phasellus at pharetra sem, a ornare sapien. Nullam dapibus congue est eget dapibus. Fusce tincidunt neque dignissim elit efficitur, rhoncus faucibus tellus dignissim.",
    },
];

export default noteData;