import express from 'express';
import ContatoController from '../controllers/ContatoController';

const router = express.Router();
let contatoCtrl = new ContatoController();

/* GET index page. */
router.get('/', (req, res) => {
  res.json('Colé, rapaziada!');
});

// Serviço de recuperação de contatos
router.get('/contatos', contatoCtrl.recuperarTodos);

// Serviço de cadastro de contato
router.post('/contatos', contatoCtrl.salvar);

// Serviço de atualização de contato
router.put('/contatos', contatoCtrl.atualizar);

// Serviço de remoção de contato
router.delete('/contatos/:id', contatoCtrl.remover);

export default router;
