/* jshint browser:true */
var expect = require('expect.js');
var Transport = require('../../../src/lib/transport');

describe('jQuery.es namespace', function () {
  var $ = window.jQuery;

  it('is defined on the global jQuery', function () {
    expect($.es).to.be.ok();
  });
  it('has Client, ConnectionPool, Transport, and errors keys', function () {
    expect($.es).to.have.keys('Client', 'ConnectionPool', 'Transport', 'errors');
  });
  it('can create a client', function () {
    var client = new $.es.Client({ hosts: null });
    expect(client).to.have.keys('transport');
    expect(client.transport).to.be.a($.es.Transport);
    client.close();
  });
});