'use strict';

var concurrent = {
  dev: [
    'browserify:index',
    'browserify:bundle',
    'copy:dev',
    'compass:dev'
  ],

  dist: [
    'copy:dist',
    'uglify',
    'cssmin'
  ],

  test: [
    'browserify:test',
    'copy:test'
  ]
};

module.exports = concurrent;
