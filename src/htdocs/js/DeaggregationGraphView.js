'use strict';


// var D3View = require('d3/D3View'),

var SelectedCollectionView = require('mvc/SelectedCollectionView'),

    Util = require('util/Util');


var DeaggregationGraphView = function (options) {
  var _this,
      _initialize;

  _this = SelectedCollectionView(Util.extend({}, options));


  _initialize = function (/*options*/) {
    _this.el.classList.add('DeaggregationGraphView');

    console.log(_this);
  };


  /**
   * Unbind event listeners and free references.
   */
  _this.destroy = Util.compose(function () {

  }, _this.destroy);

  _this.render = Util.compose(function (changed) {
    console.log(_this.model);

    // pass argument to original render method.
    return changed;
  }, _this.render);


  _initialize(options);
  options = null;
  return _this;
};


module.exports = DeaggregationGraphView;
