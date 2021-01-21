function carregar(){
    var msg = window.document.querySelector('#msg');
    var img = window.document.querySelector('#img');

    var data = new Date();
    var hora = data.getHours();

    hora = 14;
    msg.innerHTML = `Agora são ${hora} horas`;

    if(hora >0 && hora <12){
        //Bom DIA
        document.body.style.background = "#e2cd9f";
        img.src ="manha.png";
    }
    else if(hora >=12 && hora <18){
        //BOA TARDE
        document.body.style.background = "#b9846f";
        img.src ="tarde.png";
    }
    else{
        //BOA NOITE
        document.body.style.background = "#515154";
        img.src ="noite.png";
    }
}
