var app = angular.module('agenda');
app.controller('ContatosController', function ($scope, $http) {

    $scope.contatos = [];
    var enderecoServidor = 'http://localhost:3000/contatos/';

    // Função que recupera todos os contatos do back end
    $scope.carregarContatos = function () {
        // Executa apenas se houver algum filtro de pesquisa
        if ($scope.filtro) {
            $scope.erroCargaContatos = false;

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
                        $scope.erroCargaContatos = true;
                    }
                );
        }
    };

    $scope.aoRemover = function (contato) {
        $scope.contatoSelecionado = contato;
    };

    $scope.remover = function () {
        $scope.sucesso = false;
        $scope.erro = false;
        var id = $scope.contatoSelecionado._id;

        $http
            .delete(enderecoServidor + id)
            .then(
                // Se tudo der certo...
                function () {
                    $scope.sucesso = true;
                    $scope.contatos =
                        $scope.contatos.filter(function (contato) {
                            return contato._id !== $scope.contatoSelecionado._id;
                        });
                },
                // Se der algum problema...
                function (erro) {
                    console.log(erro);
                    $scope.erro = true;
                }
            );
    };
});