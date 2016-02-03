'use strict';

/**
 * @ngdoc service
 * @name assinaturasApp.AssinaturaModel
 * @description
 * # AssinaturaModel
 * Service in the assinaturasApp.
 */
angular.module('assinaturasApp')
  .service('AssinaturaModel', function () {
    this.Assinatura = function(){
      this.id = new Date().getTime().toString();
      this.nome = undefined;
      this.cargo = undefined;
      this.unidade = undefined;
      this.fixo = undefined;
      this.celular = undefined
      this.email = undefined
    };

    this.Unidade = function(){
      this.id = new Date().getTime().toString();
      this.cidade = undefined;
      this.estado = undefined;
      this.label = undefined;
    };
  });
