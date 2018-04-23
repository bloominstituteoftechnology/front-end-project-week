const notes = [
    {
        title: 'Note Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra sapien enim, sit amet placerat elit facilisis ut. Praesent malesuada, quam quis elementum pharetra, enim elit rhoncus lorem, et dignissim urna magna at urna. Aliquam efficitur at nisi nec posuere. Phasellus sed consectetur ligula, a bibendum tellus. Aliquam nec lobortis massa. Phasellus dui nisl, imperdiet in pretium sed, laoreet vitae purus. Sed a eros eget ligula accumsan fringilla. Praesent viverra pretium nisi, eu egestas dui sagittis quis. Maecenas nulla metus, vehicula vitae porttitor non, pellentesque sed est. Sed ex risus, porta eu ullamcorper vestibulum, pellentesque id felis. Maecenas facilisis arcu vitae lectus porta, nec venenatis lectus elementum. Mauris venenatis odio nisi, ac pellentesque odio dignissim eget. Maecenas suscipit dictum semper. Donec aliquet vehicula velit ut tempus.',
        id: 1,
    },
    {
        title: 'Note Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra sapien enim, sit amet placerat elit facilisis ut. Praesent malesuada, quam quis elementum pharetra, enim elit rhoncus lorem, et dignissim urna magna at urna. Aliquam efficitur at nisi nec posuere. Phasellus sed consectetur ligula, a bibendum tellus. Aliquam nec lobortis massa. Phasellus dui nisl, imperdiet in pretium sed, laoreet vitae purus. Sed a eros eget ligula accumsan fringilla. Praesent viverra pretium nisi, eu egestas dui sagittis quis. Maecenas nulla metus, vehicula vitae porttitor non, pellentesque sed est. Sed ex risus, porta eu ullamcorper vestibulum, pellentesque id felis. Maecenas facilisis arcu vitae lectus porta, nec venenatis lectus elementum. Mauris venenatis odio nisi, ac pellentesque odio dignissim eget. Maecenas suscipit dictum semper. Donec aliquet vehicula velit ut tempus.',
        id: 2,
    },
    {
        title: 'Note Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra sapien enim, sit amet placerat elit facilisis ut. Praesent malesuada, quam quis elementum pharetra, enim elit rhoncus lorem, et dignissim urna magna at urna. Aliquam efficitur at nisi nec posuere. Phasellus sed consectetur ligula, a bibendum tellus. Aliquam nec lobortis massa. Phasellus dui nisl, imperdiet in pretium sed, laoreet vitae purus. Sed a eros eget ligula accumsan fringilla. Praesent viverra pretium nisi, eu egestas dui sagittis quis. Maecenas nulla metus, vehicula vitae porttitor non, pellentesque sed est. Sed ex risus, porta eu ullamcorper vestibulum, pellentesque id felis. Maecenas facilisis arcu vitae lectus porta, nec venenatis lectus elementum. Mauris venenatis odio nisi, ac pellentesque odio dignissim eget. Maecenas suscipit dictum semper. Donec aliquet vehicula velit ut tempus.',
        id: 3,
    },
    {
        title: 'Note Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra sapien enim, sit amet placerat elit facilisis ut. Praesent malesuada, quam quis elementum pharetra, enim elit rhoncus lorem, et dignissim urna magna at urna. Aliquam efficitur at nisi nec posuere. Phasellus sed consectetur ligula, a bibendum tellus. Aliquam nec lobortis massa. Phasellus dui nisl, imperdiet in pretium sed, laoreet vitae purus. Sed a eros eget ligula accumsan fringilla. Praesent viverra pretium nisi, eu egestas dui sagittis quis. Maecenas nulla metus, vehicula vitae porttitor non, pellentesque sed est. Sed ex risus, porta eu ullamcorper vestibulum, pellentesque id felis. Maecenas facilisis arcu vitae lectus porta, nec venenatis lectus elementum. Mauris venenatis odio nisi, ac pellentesque odio dignissim eget. Maecenas suscipit dictum semper. Donec aliquet vehicula velit ut tempus.',
        id: 4,
    },
    {
        title: 'Note Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra sapien enim, sit amet placerat elit facilisis ut. Praesent malesuada, quam quis elementum pharetra, enim elit rhoncus lorem, et dignissim urna magna at urna. Aliquam efficitur at nisi nec posuere. Phasellus sed consectetur ligula, a bibendum tellus. Aliquam nec lobortis massa. Phasellus dui nisl, imperdiet in pretium sed, laoreet vitae purus. Sed a eros eget ligula accumsan fringilla. Praesent viverra pretium nisi, eu egestas dui sagittis quis. Maecenas nulla metus, vehicula vitae porttitor non, pellentesque sed est. Sed ex risus, porta eu ullamcorper vestibulum, pellentesque id felis. Maecenas facilisis arcu vitae lectus porta, nec venenatis lectus elementum. Mauris venenatis odio nisi, ac pellentesque odio dignissim eget. Maecenas suscipit dictum semper. Donec aliquet vehicula velit ut tempus.',
        id: 5,
    },
    {
        title: 'Note Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra sapien enim, sit amet placerat elit facilisis ut. Praesent malesuada, quam quis elementum pharetra, enim elit rhoncus lorem, et dignissim urna magna at urna. Aliquam efficitur at nisi nec posuere. Phasellus sed consectetur ligula, a bibendum tellus. Aliquam nec lobortis massa. Phasellus dui nisl, imperdiet in pretium sed, laoreet vitae purus. Sed a eros eget ligula accumsan fringilla. Praesent viverra pretium nisi, eu egestas dui sagittis quis. Maecenas nulla metus, vehicula vitae porttitor non, pellentesque sed est. Sed ex risus, porta eu ullamcorper vestibulum, pellentesque id felis. Maecenas facilisis arcu vitae lectus porta, nec venenatis lectus elementum. Mauris venenatis odio nisi, ac pellentesque odio dignissim eget. Maecenas suscipit dictum semper. Donec aliquet vehicula velit ut tempus.',
        id: 6,
    },
    {
        title: 'Note Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra sapien enim, sit amet placerat elit facilisis ut. Praesent malesuada, quam quis elementum pharetra, enim elit rhoncus lorem, et dignissim urna magna at urna. Aliquam efficitur at nisi nec posuere. Phasellus sed consectetur ligula, a bibendum tellus. Aliquam nec lobortis massa. Phasellus dui nisl, imperdiet in pretium sed, laoreet vitae purus. Sed a eros eget ligula accumsan fringilla. Praesent viverra pretium nisi, eu egestas dui sagittis quis. Maecenas nulla metus, vehicula vitae porttitor non, pellentesque sed est. Sed ex risus, porta eu ullamcorper vestibulum, pellentesque id felis. Maecenas facilisis arcu vitae lectus porta, nec venenatis lectus elementum. Mauris venenatis odio nisi, ac pellentesque odio dignissim eget. Maecenas suscipit dictum semper. Donec aliquet vehicula velit ut tempus.',
        id: 7,
    },
    {
        title: 'Note Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra sapien enim, sit amet placerat elit facilisis ut. Praesent malesuada, quam quis elementum pharetra, enim elit rhoncus lorem, et dignissim urna magna at urna. Aliquam efficitur at nisi nec posuere. Phasellus sed consectetur ligula, a bibendum tellus. Aliquam nec lobortis massa. Phasellus dui nisl, imperdiet in pretium sed, laoreet vitae purus. Sed a eros eget ligula accumsan fringilla. Praesent viverra pretium nisi, eu egestas dui sagittis quis. Maecenas nulla metus, vehicula vitae porttitor non, pellentesque sed est. Sed ex risus, porta eu ullamcorper vestibulum, pellentesque id felis. Maecenas facilisis arcu vitae lectus porta, nec venenatis lectus elementum. Mauris venenatis odio nisi, ac pellentesque odio dignissim eget. Maecenas suscipit dictum semper. Donec aliquet vehicula velit ut tempus.',
        id: 8,
    },
    {
        title: 'Note Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra sapien enim, sit amet placerat elit facilisis ut. Praesent malesuada, quam quis elementum pharetra, enim elit rhoncus lorem, et dignissim urna magna at urna. Aliquam efficitur at nisi nec posuere. Phasellus sed consectetur ligula, a bibendum tellus. Aliquam nec lobortis massa. Phasellus dui nisl, imperdiet in pretium sed, laoreet vitae purus. Sed a eros eget ligula accumsan fringilla. Praesent viverra pretium nisi, eu egestas dui sagittis quis. Maecenas nulla metus, vehicula vitae porttitor non, pellentesque sed est. Sed ex risus, porta eu ullamcorper vestibulum, pellentesque id felis. Maecenas facilisis arcu vitae lectus porta, nec venenatis lectus elementum. Mauris venenatis odio nisi, ac pellentesque odio dignissim eget. Maecenas suscipit dictum semper. Donec aliquet vehicula velit ut tempus.',
        id: 9,
    },

]

export default notes
