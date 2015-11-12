'use strict';

var Collection = require('mvc/Collection'),
    SelectedCollectionView = require('mvc/SelectedCollectionView'),

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
    var datas,
        j,
        json,
        m,
        metadata,
        r,
        εbin,
        εbinId,
        εbins,
        εbinCount,
        εdata,
        εdataCurrent,
        εvalue;

    datas = _this.model.get('data');
    metadata = _this.model.get('metadata');
    εbins = Collection(metadata.εbins);

    datas.map(function (data) {
      m = data.m;
      r = data.r;
      εdata = data.εdata;
      εbinCount = εdata.length;

      for (j = 0; j < εbinCount; j++) {
        εdataCurrent = εdata[j];

        εbinId = εdataCurrent.εbin;
        εbin = εbins.get(εbinId);
        εvalue = εdataCurrent.value;
        // Construct object for D33d with m, r, bin & value
      }
    });

    // json = JSON.stringify(_this.model, null, '  ');
    json = JSON.stringify(metadata, null, '  ');

    _this.el.innerHTML = '<pre>' + json + '</pre>';
  };

  _initialize(options);
  options = null;
  return _this;
};


module.exports = DeaggregationGraphView;
