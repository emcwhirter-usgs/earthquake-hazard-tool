'use strict';


var D3View = require('d3/D3View'),
    Util = require('util/Util');


var DeaggregationGraphView = function (options) {
  var _this,
      _initialize,

      _deaggregations,
      _imt,
      _mlabel,
      _rlabel,
      _εbins,
      _εlabel;

  _this = D3View(Util.extend({
    rLabel: 'Closest Distance, Rcd (km)',
    mLabel: 'MAGNITUDE (Mw)',
    εLabel: '% Contribution to Hazard'
  }, options));


  _initialize = function (options) {
    _this.el.classList.add('DeaggregationGraphView');

    _deaggregations = options.deaggregations;
    _imt = options.imt;
    _mlabel = options.mlabel;
    _rlabel = options.rlabel;
    _εbins = options.εbins;
    _εlabel = options.εlabel;
  };


  /**
   * Unbind event listeners and free references.
   */
  _this.destroy = Util.compose(function () {
    _deaggregations = null;
    _imt = null;
    _mlabel = null;
    _rlabel = null;
    _εbins = null;
    _εlabel = null;

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
