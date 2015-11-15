'use strict';

var Collection = require('mvc/Collection'),
    SelectedCollectionView = require('mvc/SelectedCollectionView'),

    Util = require('util/Util');


var _DEFAULTS = {};


var DeaggregationGraphView = function (options) {
  var _this,
      _initialize,

      _updateDeaggs;


  _this = SelectedCollectionView(options);

  _initialize = function (options) {
    options = Util.extend({}, _DEFAULTS, options);

    _this.el.classList.add('DeaggregationGraphView');
  };

  _updateDeaggs = function () {
    var datas,
        json,
        m,
        metadata,
        r,
        εbin,
        εbinId,
        εbins,
        εdatas,
        εvalue;

    datas = _this.model.get('data');
    // console.log(datas);
    metadata = _this.model.get('metadata');
    εbins = Collection(metadata.εbins);

    datas.map(function (data) {
      m = data.m;
      r = data.r;
      εdatas = data.εdata;
      console.log('BEFORE');
      console.log(εdatas[0]);

      εdatas.map(function (εdata) {
        εbinId = εdata.εbin;
        εbin = εbins.get(εbinId);

        εvalue = εdata.value;

        return {
          εmax: εbin.max,
          εmin: εbin.min,
          εvalue: εvalue
        };
      });
      console.log('AFTER');
      console.log(εdatas[0]);
    });

    json = JSON.stringify(_this.model, null, '  ');
    // json = JSON.stringify(metadata, null, '  ');

    _this.el.innerHTML = '<pre>' + json + '</pre>';
  };


  /**
   * Unbind event listeners and free references.
   */
  _this.destroy = Util.compose(function () {
    _updateDeaggs = null;

  }, _this.destroy);

  _this.render = function () {
    _updateDeaggs();
  };

  _initialize(options);
  options = null;
  return _this;
};


module.exports = DeaggregationGraphView;
