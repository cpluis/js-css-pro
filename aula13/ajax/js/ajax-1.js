
function carregaDados(arquivo){
var httRequest = new XMLHttpRequest();

httRequest.onload = mostraDados;
httRequest.onloadstart = mostraLoader();

httRequest.open('GET',arquivo,true);
httRequest.send(null);

}


function mostraLoader(){

   var lista = document.getElementById('lista');
   lista.innerHTML = 'Carregando...';
   // lista.innerHTML = '<img src="../img/ajax-loader.gif">';
  
}

function mostraDados(){
   var lista = document.getElementById('lista');
   lista.innerHTML = this.responseText;
   
};



var btnProdutos = document.getElementById('btn-produtos');
btnProdutos.addEventListener('click', function(){
   carregaDados('produtos.json')
});

var btnCarros = document.getElementById('btn-carros');

btnCarros.addEventListener('click', function (){
   carregaDados('carros.html')
})