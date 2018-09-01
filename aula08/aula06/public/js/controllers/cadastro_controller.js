var app = angular.module('agenda');
app.controller('CadastroController', function ($scope, $http) {

    var enderecoServidor = 'http://localhost:3000/contatos';

    $scope.salvar = function () {
        // É necessário empacotar os dados em uma única variável
        var contato = {
            nome: $scope.nome,
            telefone: $scope.telefone
        };

        $scope.sucesso = false;
        $scope.erro = false;

        // Envia o contato para o back end
        $http
            .post(enderecoServidor, contato)
            .then(
                // Em caso de sucesso...
                function (resposta) {
                    $scope.sucesso = true;
                    $scope.nome = '';
                    $scope.telefone = '';
                },
                // Em caso de fracasso...
                function (erro) {
                    console.log(erro);
                    $scope.erro = true;
                }
            );
    };
});