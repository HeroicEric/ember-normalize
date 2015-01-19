/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-normalize',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/normalize.css/normalize.css');
  }
};
