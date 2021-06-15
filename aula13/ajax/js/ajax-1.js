
function carregaDados(arquivo){
var httRequest = new XMLHttpRequest();


httRequest.onload = mostraDados;

httRequest.open('GET',arquivo,true);
httRequest.send(null);

}

function mostraDados(){
   var lista = document.getElementById('lista');
   lista.innerHTML = this.responseText;
   
};



var btnProdutos = document.getElementById('btn-produtos');
btnProdutos.addEventListener('click', function(){
   carregaDados('produtos.html')
});

var btnCarros = document.getElementById('btn-carros');

btnCarros.addEventListener('click', function (){
   carregaDados('carros.html')
})