'use strict';

var DeaggregationGraphView = require('deagg/DeaggregationGraphView'),
    DeaggregationResponse = require('deagg/DeaggResponse'),

    rawResponse = require('etc/deagg'),

    Collection = require('mvc/Collection');


var deaggregations,
    response,
    view;

response = DeaggregationResponse(rawResponse.response[0]);
deaggregations = response.get('deaggregations');
deaggregations.select(deaggregations.data()[0]);

view = DeaggregationGraphView({
  el: document.querySelector('#example'),
  collection: deaggregations
});
view.render();
