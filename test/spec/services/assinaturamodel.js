'use strict';

describe('Service: AssinaturaModel', function () {

  // load the service's module
  beforeEach(module('assinaturasApp'));

  // instantiate service
  var AssinaturaModel;
  beforeEach(inject(function (_AssinaturaModel_) {
    AssinaturaModel = _AssinaturaModel_;
  }));

  it('should do something', function () {
    expect(!!AssinaturaModel).toBe(true);
  });

});
