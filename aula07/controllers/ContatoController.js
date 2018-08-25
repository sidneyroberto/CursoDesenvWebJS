import Contato from '../models/contato';

class ContatoController {

    /**
     * Recupera todos os contatos
     * do banco de dados
     */
    recuperarTodos(req, res) {
        Contato
            .find() // Encomenda a recuperação dos contatos
            .exec() // Encaminha o requisição pro MongoDB
            .then( // Trata a Promise (promessa)
                (contatos) => res.json(contatos), // Caso de sucesso
                (erro) => { // Caso de erro
                    console.log(erro);
                    res.status(500).json('Erro ao tentar recuperar os contatos');
                }
            );
    }

    /**
     * Cadastra um novo contato
     */
    salvar(req, res) {
        let contato = req.body;

        Contato
            .create(contato)
            .then(
                (contato) => res.status(201).json(contato),
                (erro) => {
                    console.log(erro);
                    res.status(500).json('Erro ao tentar salvar o contato');
                }
            );
    }

    /**
     * Atualiza um contato já existente
     */
    atualizar(req, res) {
        let id = req.body._id;
        let contato = req.body;

        Contato
            .findByIdAndUpdate(id, contato)
            .exec()
            .then(
                (contato) => res.json(contato),
                (erro) => {
                    console.log(erro);
                    res.status(500).json('Erro ao tentar atualizar o contato');
                }
            );
    }

    /**
     * Remove um contato do banco de dados
     */
    remover(req, res) {
        let id = req.params.id;

        Contato
            .findByIdAndRemove(id)
            .exec()
            .then(
                () => res.status(204).end(),
                (erro) => {
                    console.log(erro);
                    res.status(500).json('Erro ao tentar remover o contato');
                }
            );
    }
}

export default ContatoController;
