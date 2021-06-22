window.localStorage.setItem("nome","luis");


const data = {
    nome:"luis",
    idade:26,
    rua: 'Av elmira pereira silveira'
};

//crinado armazenando
window.localStorage.setItem("usuario",JSON.stringify(data));




const retornaObjetoDOStorge =  window.localStorage.getItem('usuario');

console.log('mostrar valor retornado', JSON.parse(retornaObjetoDOStorge));

window.localStorage.removeItem("nome");


window.localStorage.clear();