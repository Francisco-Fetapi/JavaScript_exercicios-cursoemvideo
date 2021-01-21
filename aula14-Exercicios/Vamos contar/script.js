
function contar(){
var ini = document.getElementById('inicio');
var fim = document.getElementById('fim');
var passo = document.getElementById('passo');
var r = document.getElementById('res');

var i = Number(ini.value);
var f = Number(fim.value);
var p = Number(passo.value);

    if(ini.value.length == 0 || fim.value.length == 0){
        window.alert('Nao pode deixar o INICIO ou o FIM vazios');    
        ini.value = "1";
        fim.value = "12";
    }
    else if(passo.value.length = 0 || p == 0){
        window.alert('O Passo nao foi definido!\n  O valor Padrao e 1 ')
        passo.value = "1";
        p = 1;
        contar();
    }
    else if(i == f && (ini.value.length!=0 && fim.value.length!=0) ){
        window.alert('O inicio e o fim nao podem ser iguais');
    }
else{
        r.innerHTML = "";

    if(i > f){
        //window.alert('O passo sera decrementado');
        for(c = i;c >= f;c-=p){
        
            r.innerHTML +=`${c}  \u{1f449}`;
        }   
    }
    else{
        for(c = i;c <= f;c+=p){
        
            r.innerHTML +=`${c}  \u{1f449}`;
        }
    }

}
    r.innerHTML += `\u{1f3c1}`;
}
