
const url = "https://608850faa6f4a3001742632f.mockapi.io/api/v1/tasks";


let id = document.getElementById('id-produto');
let id_atualiza = document.getElementById('id-atualiza');
let criadoData = document.getElementById('criado-iput');
let title_task = document.getElementById('title_task-iput');
let imagem = document.getElementById('image-input');
let levelValor = document.getElementById('level-input');
let btnRecolhe = document.getElementById('btn-recolher');


const xml = new XMLHttpRequest();

let btnADDTarefa = document.getElementById('btn-add-tarefa');
btnADDTarefa.addEventListener('click', function () {

    if (title_task.value === "" && imagem.value === "" && levelValor.value === "" && criadoData.value === "") {
        alert(" não adiciona")
        carregaDados();
        abrirNotification();
    } else {



        if(!Notification){
            alert("Verifica Notificação");
            return;
        }
        if(Notification.permission !== 'granted'){
    
            Notification.requestPermission();
        }
        abrirNotification();

        alert("adiciona")
        adicionaTarefa(title_task.value, imagem.value, levelValor.value, criadoData.value);
    }
});


btnRecolhe.addEventListener('click',function(event){
    event.preventDefault();
    lipaDiv();

});


// =======================================  GET ================================================================
function carregaDados() {

    var chamada = new XMLHttpRequest();
    chamada.onload = mostraDados;
    chamada.onloadstart = mostraLoader;

    chamada.open('GET', url, true);
    chamada.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var array = JSON.parse(this.responseText);
            mostraArray(array);
        }
    }
    chamada.send(null);
}

// =======================================  POST ================================================================

function adicionaTarefa(title_task, image, level, criado) {
    pegaValor(title_task, image, level, criado);
   
}
// =====================================   Função pega valor ==================================================================

function pegaValor(title_task, image, level, criado){
    xml.open('POST', `${url}`, true);
    xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    alert(title_task + image + level)
    let tarefa = [
        {
            "createdAt": criado,
            "title_task": title_task,
            "image": image,
            "level": level
        }
    ]
    xml.send(`createdAt=${criado}&title_task=${title_task}&image=${image}&level=${level}`);
    window.sessionStorage.setItem("title_task", JSON.stringify(tarefa));
    limpaCampos();
    carregaDados();
    if (xml.onerror) {
        alert("errooooo")
    }
}

// =====================================   Função apresenta na tela =================================
function mostraArray(array) {
    var saida = '';
    var i;
    for(i=0; i < array.length; i++){
        saida += '<a>id:  '+array[i].id+
        '</a><br><a>Criado:  '+array[i].createdAt+
        '</a></br><a>Titulo da tarefa:   '+array[i].title_task+
        '</a></br><a>Imagem Da tarefa:'+array[i].image+    
        '</a></br><a>Level :'+array[i].level+'</a><br>';      
    }
    document.getElementById('lista-tarefa-array').innerHTML = saida;
}
// =====================================   Funções =================================

function mostraLoader() {
    var lista = document.getElementById('lista-tarefa-array');
    lista.innerHTML = 'Carregando...';
};

function mostraDados() {
    var lista = document.getElementById('lista-tarefa-array');
    lista.innerHTML = this.responseText;
};

function lipaDiv() {
    var arrayLimpaDiv = "";
    mostraArray(arrayLimpaDiv);
};

function limpaCampos() {
    criadoData.value = '';
    title_task.value = '';
    imagem.value = '';
    levelValor.value = '';
}


//================================= NOTIFICAÇÃO

    function abrirNotification(){
        console.log("clcicou abri");

        if(Notification.permission!=='granted'){

            Notification.requestPermission();
        }else{
            new Notification("Notification Title",{
                icon: "https://image.flaticon.com/icons/png/128/1827/1827504.png",
                body: "luis Pires",
                image: 'https://entretetizei.com.br/site/wp-content/uploads/2020/11/o-rei-leao.jpg'  
            });
        }
    }