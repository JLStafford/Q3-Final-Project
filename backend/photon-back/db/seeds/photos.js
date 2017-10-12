
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('photos').insert([
        {
          url: 'https://s3-us-west-1.amazonaws.com/photonphotos/_DSC1314.jpg',
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
          url: 'https://s3-us-west-1.amazonaws.com/photonphotos/_DSC2090.jpg',
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
          url: 'https://s3-us-west-1.amazonaws.com/photonphotos/_DSC2110.jpg',
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
          url: 'https://s3-us-west-1.amazonaws.com/photonphotos/_DSC2225.jpg',
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
          url: 'https://s3-us-west-1.amazonaws.com/photonphotos/_DSC2230.jpg',
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
          url: 'https://s3-us-west-1.amazonaws.com/photonphotos/_DSC2240.jpg',
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
          url: 'https://s3-us-west-1.amazonaws.com/photonphotos/_DSC2241.jpg',
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
          url: 'https://s3-us-west-1.amazonaws.com/photonphotos/_DSC2269.jpg',
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
          url: 'https://s3-us-west-1.amazonaws.com/photonphotos/_DSC2271.jpg',
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
          url: 'https://s3-us-west-1.amazonaws.com/photonphotos/_DSC2272.jpg',
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
