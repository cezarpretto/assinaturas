'use strict';

/**
 * @ngdoc service
 * @name assinaturasApp.AssinaturaService
 * @description
 * # AssinaturaService
 * Service in the assinaturasApp.
 */
angular.module('assinaturasApp')
  .service('AssinaturaService', ['DbService', function(dbService) {
    var self = this;
    this.gerar = function() {
      html2canvas([document.getElementById('pre_conteudo')], {
        logging: false,
        letterRendering: true,
        onrendered: function(canvas) {
          //document.getElementById('render').appendChild(canvas);
          var img = document.getElementById('render');
          //img.src = canvas.toDataURL("image/jpeg");
          self.download(canvas.toDataURL("image/jpeg"));
        }
      });
    };

    this.download = function(url){
      var element = document.createElement('a');
      element.setAttribute('href', url);
      element.setAttribute('download', 'assinatura.jpeg');

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    };

    this.insert = function(assinatura){
      var db = dbService.openDb();
      db.child('assinaturas').push(assinatura);
    };
  }]);
