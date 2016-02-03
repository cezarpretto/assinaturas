'use strict';

/**
 * @ngdoc service
 * @name assinaturasApp.DbService
 * @description
 * # DbService
 * Service in the assinaturasApp.
 */
angular.module('assinaturasApp')
  .service('DbService', function () {
    this.openDb = function(){
      this.db = new Firebase("https://planosassinaturas.firebaseIO.com/");
      return this.db;
    };
  });
