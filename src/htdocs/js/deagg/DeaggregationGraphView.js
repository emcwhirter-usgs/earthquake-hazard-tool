'use strict';

var SelectedCollectionView = require('mvc/SelectedCollectionView'),

    Util = require('util/Util');


var _DEFAULTS = {};


var DeaggregationGraphView = function (options) {
  var _this,
      _initialize;


  _this = SelectedCollectionView(options);

  _initialize = function (options) {
    options = Util.extend({}, _DEFAULTS, options);

    _this.el.classList.add('DeaggregationGraphView');
  };


  /**
   * Unbind event listeners and free references.
   */
  _this.destroy = Util.compose(function () {

  }, _this.destroy);
  
  _this.render = function () {
    _this.el.innerHTML = '<pre>' +
        JSON.stringify(_this.model, null, '  ') +
        '</pre>';
  };

  _initialize(options);
  options = null;
  return _this;
};


module.exports = DeaggregationGraphView;
