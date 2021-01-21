function verificar(){
    var data = new Date();
    var ano = data.getFullYear();

    var fano = document.querySelector('#txtano');
    var res = document.querySelector('#res');

    if(fano.value.length ==0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados \n e tente novamente');

    }else{
        var fsex = document.getElementsByName('sexo');
        var idade = ano - Number(fano.value);

      //  res.innerHTML = `Idade Calculada: ${idade} anos`;
      var img = document.createElement('img');
      img.setAttribute('id','foto');
  
      var genero = '';

      if(fsex[0].checked){
        genero = "Homem";

        if(idade >= 0 && idade <10){
            //Crianca
            img.setAttribute("src","bebeH.png");
        }
        else if(idade < 21){
            //Jovem
            img.setAttribute("src","JovemH.jpg");
        }
        else if(idade < 50){
            //Adulto
            img.setAttribute("src","adulto.jpg");
        }
        else{
            //Idoso
            img.setAttribute("src","velho.png");
        }
       

      }
      else{
        genero = "Mulher";

        if(idade >= 0 && idade <10){
            //Crianca
            img.setAttribute("src","bebeM.png");
        }
        else if(idade < 21){
            //Jovem
            img.setAttribute("src","JovemM.png");
        }
        else if(idade < 50){
            //Adulto
            img.setAttribute("src","adulta.png");
        }
        else{
            //Idoso
            img.setAttribute("src","velha.png");
        }

      }

      img.setAttribute('style','width:162px;height:162px;border-radius:50%;margin:auto;')
      res.style.textAlign = "center";
      res.innerHTML = `Detetamos ${genero} com ${idade} anos`;
      res.appendChild(img);
    }
}