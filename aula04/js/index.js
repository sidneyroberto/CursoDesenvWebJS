let contatos = [
    new Contato('Ana Garcia', '(67) 9283-1933'),
    new Contato('Juliano Silva', '(67) 8272-2342'),
    new Contato('Raquel Souza', '(67) 9282-1234'),
    new Contato('Diego Santos', '(67) 9276-9383')
];

/* 
    Mapeia cada contato da lista de contatos para uma
    tag <tr> contendo os dados do contato para serem
    exibidos na tabela
*/
let htmlContatos = contatos.map((contato) => `<tr><td>${contato.nome}</td><td>${contato.telefone}</td></tr>`);

let conteudo = '';

/*
    Pega cada um dos trs criados na lista htmlContatos e
    concatena na variável conteudo
*/
htmlContatos.forEach((contato) => conteudo += contato);

// Insere o conteúdo dentro do tbody
document.getElementById('listaContatos').innerHTML = conteudo;