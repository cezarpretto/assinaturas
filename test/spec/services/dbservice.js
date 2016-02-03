'use strict';

describe('Service: DbService', function () {

  // load the service's module
  beforeEach(module('assinaturasApp'));

  // instantiate service
  var DbService;
  beforeEach(inject(function (_DbService_) {
    DbService = _DbService_;
  }));

  it('should do something', function () {
    expect(!!DbService).toBe(true);
  });

});
