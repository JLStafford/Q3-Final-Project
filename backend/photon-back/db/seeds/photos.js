
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('photos').insert([
        {
          id: 1,
          url: 'https://unsplash.it/200/300/?random',
          title: 'A Picture',
          description: 'a cool place',
          camera: 'Sony a7r2',
          lens: 'Sony GMaster 24-70 f/2.8',
          iso: '200',
          aperture: 'f/5.6',
          shutter_speed: '1/250',
          zoom: '50mm',
          location: 'here'
        },
        {
          id: 2,
          url: 'https://unsplash.it/200/300/?random',
          title: 'A Picture',
          description: 'a cool place',
          camera: 'Sony a7r2',
          lens: 'Sony GMaster 24-70 f/2.8',
          iso: '200',
          aperture: 'f/5.6',
          shutter_speed: '1/250',
          zoom: '50mm',
          location: 'here'
        },
        {
          id: 3,
          url: 'https://unsplash.it/200/300/?random',
          title: 'A Picture',
          description: 'a cool place',
          camera: 'Sony a7r2',
          lens: 'Sony GMaster 24-70 f/2.8',
          iso: '200',
          aperture: 'f/5.6',
          shutter_speed: '1/250',
          zoom: '50mm',
          location: 'here'
        },
        {
          id: 4,
          url: 'https://unsplash.it/200/300/?random',
          title: 'A Picture',
          description: 'a cool place',
          camera: 'Sony a7r2',
          lens: 'Sony GMaster 24-70 f/2.8',
          iso: '200',
          aperture: 'f/5.6',
          shutter_speed: '1/250',
          zoom: '50mm',
          location: 'here'
        },
        {
          id: 5,
          url: 'https://unsplash.it/200/300/?random',
          title: 'A Picture',
          description: 'a cool place',
          camera: 'Sony a7r2',
          lens: 'Sony GMaster 24-70 f/2.8',
          iso: '200',
          aperture: 'f/5.6',
          shutter_speed: '1/250',
          zoom: '50mm',
          location: 'here'
        },
        {
          id: 6,
          url: 'https://unsplash.it/200/300/?random',
          title: 'A Picture',
          description: 'a cool place',
          camera: 'Sony a7r2',
          lens: 'Sony GMaster 24-70 f/2.8',
          iso: '200',
          aperture: 'f/5.6',
          shutter_speed: '1/250',
          zoom: '50mm',
          location: 'here'
        },
        {
          id: 7,
          url: 'https://unsplash.it/200/300/?random',
          title: 'A Picture',
          description: 'a cool place',
          camera: 'Sony a7r2',
          lens: 'Sony GMaster 24-70 f/2.8',
          iso: '200',
          aperture: 'f/5.6',
          shutter_speed: '1/250',
          zoom: '50mm',
          location: 'here'
        },
        {
          id: 8,
          url: 'https://unsplash.it/200/300/?random',
          title: 'A Picture',
          description: 'a cool place',
          camera: 'Sony a7r2',
          lens: 'Sony GMaster 24-70 f/2.8',
          iso: '200',
          aperture: 'f/5.6',
          shutter_speed: '1/250',
          zoom: '50mm',
          location: 'here'
        },
        {
          id: 9,
          url: 'https://unsplash.it/200/300/?random',
          title: 'A Picture',
          description: 'a cool place',
          camera: 'Sony a7r2',
          lens: 'Sony GMaster 24-70 f/2.8',
          iso: '200',
          aperture: 'f/5.6',
          shutter_speed: '1/250',
          zoom: '50mm',
          location: 'here'
        },
        {
          id: 10,
          url: 'https://unsplash.it/200/300/?random',
          title: 'A Picture',
          description: 'a cool place',
          camera: 'Sony a7r2',
          lens: 'Sony GMaster 24-70 f/2.8',
          iso: '200',
          aperture: 'f/5.6',
          shutter_speed: '1/250',
          zoom: '50mm',
          location: 'here'
        },
      ]);
    });
};
