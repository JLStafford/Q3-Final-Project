
exports.up = function(knex, Promise) {
  return knex.schema.createTable('photos', function(table) {
    table.increments();
    // table.integer('user_id');
    table.string('url').notNullable();
    table.string('title').notNullable();
    table.string('description');
    table.string('camera').notNullable();
    table.string('lens');
    table.string('iso');
    table.string('aperture');
    table.string('shutter_speed');
    table.string('zoom');
    table.string('location');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('photos');
};
