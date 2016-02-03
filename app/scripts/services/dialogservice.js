'use strict';

/**
 * @ngdoc service
 * @name assinaturasApp.DialogService
 * @description
 * # DialogService
 * Service in the assinaturasApp.
 */
angular.module('assinaturasApp')
  .service('DialogService', function () {
    this.show = function(idModal){
      $('#' + idModal).modal('show')
    };

    this.hide = function(idModal){
      $('#' + idModal).modal('hide')
    };
  });
