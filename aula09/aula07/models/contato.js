import mongoose from 'mongoose';

let esquema = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },

    telefone: {
        type: String,
        required: true
    }
});

let Contato = mongoose.model('Contato', esquema);
export default Contato;