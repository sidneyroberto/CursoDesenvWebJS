var app = angular.module('agenda');
app.controller('ContatosController', function ($scope, $http) {

    $scope.contatos = [];
    var enderecoServidor = 'http://localhost:3000/contatos/';

    // Função que recupera todos os contatos do back end
    $scope.carregarContatos = function () {
        // Executa apenas se houver algum filtro de pesquisa
        if ($scope.filtro) {
            $scope.erro = false;

            $http
                .get(enderecoServidor + $scope.filtro)
                .then(
                    // Função de sucesso...
                    function (resposta) {
                        $scope.contatos = resposta.data;
                    },
                    // Função de fracasso..
                    function (erro) {
                        console.log(erro);
                        $scope.erro = true;
                    }
                );
        }
    };

});