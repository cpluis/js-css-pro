
 var url = "https://608850faa6f4a3001742632f.mockapi.io/api/v1/Produtos/";


// =======================================  GET ================================================================
    function carregaDados(){


        if(navigator.onLine){

            var httRequest = new XMLHttpRequest();
        
            httRequest.onload = mostraDados;
            httRequest.onloadstart = mostraLoader;
    
            httRequest.onload = mostraDados;
            httRequest.onloadstart = mostraLoader();
            
            httRequest.open('GET',url,true);
    
    
            window.localStorage.setItem('produtos',JSON.stringify())
            httRequest.send(null);
        }else{

            var valorLocalStorge = window.localStorage.getItem('produtos');
            mostraDados(JSON.parse(valorLocalStorge));
        }
        
        }

// =================  DELETE ================================================================

        function deletaID(id){
            var httRequest = new XMLHttpRequest();
            alert("deletando o id "+id);
           httRequest.open('DELETE',`${url + id}`,true);

           chamada.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              pegaValor();
            }
    
           httRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
           httRequest.send(null);
            if(httRequest.onerror){
                alert("errooooo")
            }
    }
      
// ================ ATUALIZA ================================================================

    function atualizarProduto(id,nome,preco,loja, imagem,descricao){
        var httRequest = new XMLHttpRequest();
        
       httRequest.open('PUT',`${url+id}`,true);

       httRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

       httRequest.send(`nome=${nome}&imagem=${imagem}&preco=${preco}&descricao=${descricao}&loja=${loja}&`);
        if(httRequest.onerror){
            alert("errooooo")
        }
}


// =======================================  POST ================================================================

    function adicionadoNovoProduto(nome,preco,loja, imagem,descricao){
        var httRequest = new XMLHttpRequest();
        
       httRequest.open('POST',`${url}`,true);

       httRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

       httRequest.send(`nome=${nome}&imagem=${imagem}&preco=${preco}&descricao=${descricao}&loja=${loja}&`);
        if(httRequest.onerror){
            alert("errooooo")
        }
}
  

// =======================================================================================================


    function mostraLoader(){

        var lista = document.getElementById('recebe-get');
        lista.innerHTML = 'Carregando...';
           
     }
     
     function mostraDados(){
        var lista = document.getElementById('recebe-get');
        lista.innerHTML = this.responseText;
        
     };

    
var id = document.getElementById('id-produto');
var id_atualiza = document.getElementById('id-atualiza');
var nome = document.getElementById('nome');
var preco = document.getElementById('preco');
var loja = document.getElementById('loja');
var imagem = document.getElementById('imagem');
var descricao = document.getElementById('descricao');


var btnGetProdutos = document.getElementById('btn-get');
btnGetProdutos.addEventListener('click', function(){
    alert("vai lsitar");
    carregaDados();
});


var btnADDProdutos = document.getElementById('btn-add-produtos');
btnADDProdutos.addEventListener('click', function(){

adicionadoNovoProduto(nome.value, preco.value,loja.value, imagem.value,descricao.value);
       
});


var btnDeleteProdutos = document.getElementById('btn-delete');
btnDeleteProdutos.addEventListener('click', function(){

    deletaID(id.value);
    document.getElementById('id-produto').value=''; 
});

var btnAtualizaProdutos = document.getElementById('btn-atualiza');
btnAtualizaProdutos.addEventListener('click', function(){

    atualizarProduto(id_atualiza.value,nome.value, preco.value,loja.value, imagem.value,descricao.value);
    document.getElementById('id-atualiza').value=''; 
    document.getElementById('nome').value='';
    document.getElementById('preco').value='';
    document.getElementById('loja').value='';
    document.getElementById('imagem').value='';
    document.getElementById('descricao').value='';
});















