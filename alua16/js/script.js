
var mostraNotificacao = document.getElementById("mostra-notificacao");

mostraNotificacao.addEventListener('click', function(event){
    event.preventDefault();
    if(!Notification){
        alert("Verifica Notificação");
        return;
    }
    if(Notification.permission !== 'granted'){

        Notification.requestPermission();
    }
    abrirNotification()
})

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