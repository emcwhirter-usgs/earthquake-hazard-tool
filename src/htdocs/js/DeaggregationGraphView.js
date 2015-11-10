'use strict';


var D3View = require('d3/D3View'),
    Util = require('util/Util');


var DeaggregationGraphView = function (options) {
  var _this,
      _initialize;

  _this = D3View(Util.extend({
    xLabel: 'Closest Distance, Rcd (km)',
    yLabel: 'MAGNITUDE (Mw)',
    zLabel: '% Contribution to Hazard'
  }, options));


  _initialize = function (/*options*/) {
    _this.el.classList.add('DeaggregationGraphView');
  };


  /**
   * Unbind event listeners and free references.
   */
  _this.destroy = Util.compose(function () {

  }, _this.destroy);

  _this.render = Util.compose(function (changed) {

    // pass argument to original render method.
    return changed;
  }, _this.render);


  _initialize(options);
  options = null;
  return _this;
};


module.exports = DeaggregationGraphView;
