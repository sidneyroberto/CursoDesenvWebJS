var app = angular.module('agenda', ['ngRoute']);
app.config(function ($routeProvider) {

    // Rota para a página de contatos
    $routeProvider.when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller: 'ContatosController'
    });

    // Rota para a página de cadasto de contatos
    $routeProvider.when('/cadastro', {
        templateUrl: 'partials/cadastro.html',
        controller: 'CadastroController'
    });

    /**
     * Caso a rota não seja encontrada, 
     * redireciona para a página de contatos
     */
    $routeProvider.otherwise('/contatos');
});