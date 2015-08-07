/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-normalize',

  treeForStyles: function() {
    var normalizePath = path.join(this.app.bowerDirectory, 'normalize.css');
    var normalizeTree = new Funnel(this.treeGenerator(normalizePath), {
      srcDir: '/',
      destDir: '/app/styles'
    });

    return normalizeTree;
  }
};
