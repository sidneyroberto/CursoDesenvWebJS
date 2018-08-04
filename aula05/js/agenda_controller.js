var app = angular.module('agenda', []);
app.controller('AgendaController', function ($scope) {

    // Lista de contatos inicialmente vazia
    $scope.contatos = [];

    // Função para salvar um novo contato na lista de contatos
    $scope.salvar = function () {
        // Cria um objeto de contato contendo o nome e telefone oriundos do formulário
        var contato = {
            nome: $scope.nome,
            telefone: $scope.telefone
        };

        // Adiciona o novo contato na lista de contatos com a função push
        $scope.contatos.push(contato);

        // Limpa os campos
        $scope.nome = '';
        $scope.telefone = '';
    };
});