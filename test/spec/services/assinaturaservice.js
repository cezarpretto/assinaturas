'use strict';

describe('Service: AssinaturaService', function () {

  // load the service's module
  beforeEach(module('assinaturasApp'));

  // instantiate service
  var AssinaturaService;
  beforeEach(inject(function (_AssinaturaService_) {
    AssinaturaService = _AssinaturaService_;
  }));

  it('should do something', function () {
    expect(!!AssinaturaService).toBe(true);
  });

});
