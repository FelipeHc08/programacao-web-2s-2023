let produtos = Array();

const criar_produto = (id, nome, qtd) =>{
    let p = {
        id: id,
        nome: nome,
        quantidade: qtd
    };

    return p;

}

const adicionar_produto = (p) => {
    produtos.push(p);
}

const listar_produtos = () =>{
    return produtos;
}

const editar_produtos = (id, qtdAtual) => {
    produtos.forEach( p => {
        if(p.id == id){
            p.quantidade = qtdAtual,
            pRetorno = p;
        }
    })
    
    return pRetorno;

}

module.exports = {
    criar_produto,
    adicionar_produto,
    listar_produtos,
    editar_produtos
}