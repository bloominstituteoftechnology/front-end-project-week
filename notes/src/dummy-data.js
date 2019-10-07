const dummyData = [{
    title: 'Title 1',
    id: 0,
    textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis nunc at lectus molestie, vel lacinia arcu tincidunt. Nullam et enim at lacus commodo blandit. Quisque at leo id urna volutpat feugiat. Aenean sit amet ex sit amet sapien faucibus lobortis sit amet eu lectus. Mauris lacus enim, porta a lorem efficitur, pellentesque placerat diam. Nunc fermentum arcu et enim rhoncus, sit amet feugiat nisl egestas. Cras gravida arcu ac vulputate accumsan. Nullam mattis tincidunt vehicula. Integer ut nisl fermentum, ultricies turpis a, faucibus eros. Duis lectus felis, vestibulum egestas auctor in, ornare vel turpis.'
  },
  {
    title: 'Title 2',
    id: 1,
    textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis nunc at lectus molestie, vel lacinia arcu tincidunt. Nullam et enim at lacus commodo blandit. Quisque at leo id urna volutpat feugiat. Aenean sit amet ex sit amet sapien faucibus lobortis sit amet eu lectus. Mauris lacus enim, porta a lorem efficitur, pellentesque placerat diam. Nunc fermentum arcu et enim rhoncus, sit amet feugiat nisl egestas. Cras gravida arcu ac vulputate accumsan. Nullam mattis tincidunt vehicula. Integer ut nisl fermentum, ultricies turpis a, faucibus eros. Duis lectus felis, vestibulum egestas auctor in, ornare vel turpis.'
  },
  {
    title: 'Title 3',
    id: 2,
    textBody: 'Donec pretium congue faucibus. Cras porttitor odio id nibh consectetur mollis. Mauris imperdiet tempus commodo. Morbi molestie, ipsum sed elementum tristique, urna tellus euismod eros, et dictum tellus est eu velit. Donec viverra placerat ex, in rutrum augue semper vel. Praesent hendrerit lacinia lacus quis egestas. Integer lacinia sagittis velit, at porta augue dictum at. Vestibulum egestas laoreet maximus. Sed orci leo, finibus nec odio at, interdum scelerisque odio. Aliquam id nibh arcu. Maecenas tellus purus, luctus in est a, scelerisque porta orci. Donec quis purus at orci malesuada finibus ut eget est. Maecenas elementum dui id erat varius, sed pulvinar justo tempus. Integer porttitor enim et scelerisque rhoncus. Integer at placerat sem, eget faucibus justo.'
  },
  {
    title: 'Title 4',
    id: 3,
    textBody: 'Donec pretium congue faucibus. Cras porttitor odio id nibh consectetur mollis. Mauris imperdiet tempus commodo. Morbi molestie, ipsum sed elementum tristique, urna tellus euismod eros, et dictum tellus est eu velit. Donec viverra placerat ex, in rutrum augue semper vel. Praesent hendrerit lacinia lacus quis egestas. Integer lacinia sagittis velit, at porta augue dictum at. Vestibulum egestas laoreet maximus. Sed orci leo, finibus nec odio at, interdum scelerisque odio. Aliquam id nibh arcu. Maecenas tellus purus, luctus in est a, scelerisque porta orci. Donec quis purus at orci malesuada finibus ut eget est. Maecenas elementum dui id erat varius, sed pulvinar justo tempus. Integer porttitor enim et scelerisque rhoncus. Integer at placerat sem, eget faucibus justo.'
  },
  {
      title: 'Title 5',
      id: 4,
      textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis nunc at lectus molestie, vel lacinia arcu tincidunt. Nullam et enim at lacus commodo blandit. Quisque at leo id urna volutpat feugiat. Aenean sit amet ex sit amet sapien faucibus lobortis sit amet eu lectus. Mauris lacus enim, porta a lorem efficitur, pellentesque placerat diam. Nunc fermentum arcu et enim rhoncus, sit amet feugiat nisl egestas. Cras gravida arcu ac vulputate accumsan. Nullam mattis tincidunt vehicula. Integer ut nisl fermentum, ultricies turpis a, faucibus eros. Duis lectus felis, vestibulum egestas auctor in, ornare vel turpis.'
    },
    {
      title: 'Title 6',
      id: 5,
      textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis nunc at lectus molestie, vel lacinia arcu tincidunt. Nullam et enim at lacus commodo blandit. Quisque at leo id urna volutpat feugiat. Aenean sit amet ex sit amet sapien faucibus lobortis sit amet eu lectus. Mauris lacus enim, porta a lorem efficitur, pellentesque placerat diam. Nunc fermentum arcu et enim rhoncus, sit amet feugiat nisl egestas. Cras gravida arcu ac vulputate accumsan. Nullam mattis tincidunt vehicula. Integer ut nisl fermentum, ultricies turpis a, faucibus eros. Duis lectus felis, vestibulum egestas auctor in, ornare vel turpis.'
    },
    {
      title: 'Title 7',
      id: 6,
      textBody: 'Donec pretium congue faucibus. Cras porttitor odio id nibh consectetur mollis. Mauris imperdiet tempus commodo. Morbi molestie, ipsum sed elementum tristique, urna tellus euismod eros, et dictum tellus est eu velit. Donec viverra placerat ex, in rutrum augue semper vel. Praesent hendrerit lacinia lacus quis egestas. Integer lacinia sagittis velit, at porta augue dictum at. Vestibulum egestas laoreet maximus. Sed orci leo, finibus nec odio at, interdum scelerisque odio. Aliquam id nibh arcu. Maecenas tellus purus, luctus in est a, scelerisque porta orci. Donec quis purus at orci malesuada finibus ut eget est. Maecenas elementum dui id erat varius, sed pulvinar justo tempus. Integer porttitor enim et scelerisque rhoncus. Integer at placerat sem, eget faucibus justo.'
    },
    {
      title: 'Title 8',
      id: 7,
      textBody: 'Donec pretium congue faucibus. Cras porttitor odio id nibh consectetur mollis. Mauris imperdiet tempus commodo. Morbi molestie, ipsum sed elementum tristique, urna tellus euismod eros, et dictum tellus est eu velit. Donec viverra placerat ex, in rutrum augue semper vel. Praesent hendrerit lacinia lacus quis egestas. Integer lacinia sagittis velit, at porta augue dictum at. Vestibulum egestas laoreet maximus. Sed orci leo, finibus nec odio at, interdum scelerisque odio. Aliquam id nibh arcu. Maecenas tellus purus, luctus in est a, scelerisque porta orci. Donec quis purus at orci malesuada finibus ut eget est. Maecenas elementum dui id erat varius, sed pulvinar justo tempus. Integer porttitor enim et scelerisque rhoncus. Integer at placerat sem, eget faucibus justo.'
    },
    {
        title: 'Title 9',
        id: 8,
        textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis nunc at lectus molestie, vel lacinia arcu tincidunt. Nullam et enim at lacus commodo blandit. Quisque at leo id urna volutpat feugiat. Aenean sit amet ex sit amet sapien faucibus lobortis sit amet eu lectus. Mauris lacus enim, porta a lorem efficitur, pellentesque placerat diam. Nunc fermentum arcu et enim rhoncus, sit amet feugiat nisl egestas. Cras gravida arcu ac vulputate accumsan. Nullam mattis tincidunt vehicula. Integer ut nisl fermentum, ultricies turpis a, faucibus eros. Duis lectus felis, vestibulum egestas auctor in, ornare vel turpis.'
      },
      {
        title: 'Title 10',
        id: 9,
        textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis nunc at lectus molestie, vel lacinia arcu tincidunt. Nullam et enim at lacus commodo blandit. Quisque at leo id urna volutpat feugiat. Aenean sit amet ex sit amet sapien faucibus lobortis sit amet eu lectus. Mauris lacus enim, porta a lorem efficitur, pellentesque placerat diam. Nunc fermentum arcu et enim rhoncus, sit amet feugiat nisl egestas. Cras gravida arcu ac vulputate accumsan. Nullam mattis tincidunt vehicula. Integer ut nisl fermentum, ultricies turpis a, faucibus eros. Duis lectus felis, vestibulum egestas auctor in, ornare vel turpis.'
      },
      {
        title: 'Title 11',
        id: 10,
        textBody: 'Donec pretium congue faucibus. Cras porttitor odio id nibh consectetur mollis. Mauris imperdiet tempus commodo. Morbi molestie, ipsum sed elementum tristique, urna tellus euismod eros, et dictum tellus est eu velit. Donec viverra placerat ex, in rutrum augue semper vel. Praesent hendrerit lacinia lacus quis egestas. Integer lacinia sagittis velit, at porta augue dictum at. Vestibulum egestas laoreet maximus. Sed orci leo, finibus nec odio at, interdum scelerisque odio. Aliquam id nibh arcu. Maecenas tellus purus, luctus in est a, scelerisque porta orci. Donec quis purus at orci malesuada finibus ut eget est. Maecenas elementum dui id erat varius, sed pulvinar justo tempus. Integer porttitor enim et scelerisque rhoncus. Integer at placerat sem, eget faucibus justo.'
      },
      {
        title: 'Title 12',
        id: 11,
        textBody: 'Donec pretium congue faucibus. Cras porttitor odio id nibh consectetur mollis. Mauris imperdiet tempus commodo. Morbi molestie, ipsum sed elementum tristique, urna tellus euismod eros, et dictum tellus est eu velit. Donec viverra placerat ex, in rutrum augue semper vel. Praesent hendrerit lacinia lacus quis egestas. Integer lacinia sagittis velit, at porta augue dictum at. Vestibulum egestas laoreet maximus. Sed orci leo, finibus nec odio at, interdum scelerisque odio. Aliquam id nibh arcu. Maecenas tellus purus, luctus in est a, scelerisque porta orci. Donec quis purus at orci malesuada finibus ut eget est. Maecenas elementum dui id erat varius, sed pulvinar justo tempus. Integer porttitor enim et scelerisque rhoncus. Integer at placerat sem, eget faucibus justo.'
      }];

export default dummyData;
