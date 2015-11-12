/* global chai, describe, it */
'use strict';

var expect = chai.expect,
    DeaggregationGraphView = require('DeaggregationGraphView');


describe('DeaggregationGraphView', function () {

  describe('Constructor', function () {
    it('is defined', function () {
      expect(DeaggregationGraphView).to.not.equal(null);
    });

    // it('can be created and destroyed', function () {
    //   var view = DeaggregationGraphView();
    //   view.destroy();
    // });
  });

});
