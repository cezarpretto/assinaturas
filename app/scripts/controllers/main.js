'use strict';

/**
 * @ngdoc function
 * @name assinaturasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assinaturasApp
 */
angular.module('assinaturasApp')
  .controller('MainCtrl',
    ['AssinaturaModel',
     'AssinaturaService',
     'DbService',
     '$firebaseArray',
     '$firebaseObject',
     '$scope',
     'DialogService',
     'growl',
     function (
       assinaturaModel,
       assinaturaService,
       dbService,
       $firebaseArray,
       $firebaseObject,
       $scope,
       dialogService,
       growl
     ) {

    var self = this;
    var refAssinaturas = new Firebase("https://planosassinaturas.firebaseIO.com/assinaturas/");
    var refUnidades = new Firebase("https://planosassinaturas.firebaseIO.com/unidades/");
    $scope.assinaturas = $firebaseArray(refAssinaturas);
    $scope.unidades = $firebaseArray(refUnidades);
    this.unidade = new assinaturaModel.Unidade();
    this.lockInput = true;
    this.novo = false;

    this.gerar = function(){
      assinaturaService.gerar();
    };

    this.salvar = function(){
      if(self.novo){
        $scope.assinaturas.$add(self.assinatura).then(function(){
          self.novo = false;
          self.lockInput = true;
          self.assinatura = new assinaturaModel.Assinatura();
          growl.success('Assinatura inserida com sucesso', {ttl: 5000});
        }).catch(function(err){
          console.error(err);
        });
      }else{
        $scope.assinaturas.$save(self.assinatura).then(function(){
          self.novo = false;
          self.lockInput = true;
          self.assinatura = new assinaturaModel.Assinatura();
          growl.success('Assinatura editada com sucesso', {ttl: 5000});
        }).catch(function(err){
          console.error(err);
        });
      }
    };

    this.editar = function(){
      self.lockInput = false;
      self.novo = false;
    };

    this.cancelar = function(){
      self.assinatura = undefined;
      self.lockInput = true;
      self.novo = false;
    }

    this.salvarUnidade = function(){
      self.unidade.label = self.unidade.cidade.toUpperCase() + ' - ' + self.unidade.estado.toUpperCase();
      $scope.unidades.$add(self.unidade).then(function(){
        dialogService.hide('dlgNovaUnidade');
        growl.success('Unidade inserida com sucesso', {ttl: 5000});
      }).catch(function(err){
        console.error(err);
      });
    };

    this.excluir = function(){
      if(window.confirm('Deseja realmente excluir?')){
        $scope.assinaturas.$remove(self.assinatura).then(function(){
          self.assinatura = new assinaturaModel.Assinatura();
          growl.success('Assinatura excluída com sucesso', {ttl: 5000});
          self.cancelar();
        }).catch(function(err){
          console.error(err);
        });
      }
    };

    this.novaUnidade = function(){
      this.unidade = new assinaturaModel.Unidade();
      dialogService.show('dlgNovaUnidade');
    };

    this.novaAssinatura = function(){
      self.novo = true;
      self.lockInput = false;
      this.assinatura = new assinaturaModel.Assinatura();
    };

    $scope.assinaturas.$loaded().then(function(data){
      console.log(data);
    }).catch(function(err){
      console.error(err);
    });

    $scope.unidades.$loaded().then(function(data){
      console.log(data);
    }).catch(function(err){
      console.error(err);
    });

  }]);
