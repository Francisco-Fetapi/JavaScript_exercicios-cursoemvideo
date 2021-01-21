var nums = [];
var r = document.getElementById('res');

function adicionar(){
    var num =  document.getElementById('num');
    var sel =  document.getElementById('sel');
   
    var n = Number(num.value);

    if(num.value.length = 0){
        window.alert('Nenhum valor digitado');
    }
    else if(n < 1 || n > 100){
        window.alert("O valor digitado tem de estar entre 1 e 100!");
    }
    else{

        if(jaexiste(n)){
            window.alert(`o numero ${n} ja existe`);
        }
        else{
            r.innerHTML ="";
            r.setAttribute('style','none');
        nums.push(n);

        var opt = document.createElement('option');
        opt.text = `Valor ${n} adicionado`;

        sel.appendChild(opt);
    }

    }
    
}

function jaexiste(e){

    if(nums.indexOf(e) != -1){
        return true;
    }
    else{
        return false;
    }
}

function finalizar(){

    if(nums.length != 0){
        totNum();
        maxNum();
        minNum();
        somaNum();
        mediaNum();
        
        r.setAttribute('style','display:block');
        }
        else{
            window.alert("Adicione pelo menos 1 numero antes de finalizar");
        }
}

function totNum(){
    var p = document.createElement('p');
    p.textContent = `No total foram inseridos ${nums.length} numeros`;
    r.appendChild(p);
}
var maior = 0;
function maxNum(){

    for(var x = 0;x<nums.length;x++){
        
        if(nums[x]>maior){
            maior = nums[x];
        }
        
    }
    var p = document.createElement('p');
    p.textContent = `Maior valor  inserido: ${maior}`;
    r.appendChild(p);
}
function minNum(){

    var menor = maior;

    for(var x = 0;x<nums.length;x++){
        
        if(nums[x]<menor){
            menor = nums[x];
        }
        
    }
    var p = document.createElement('p');
    p.textContent = `Menor valor  inserido: ${menor}`;
    r.appendChild(p);
}
var soma = 0;
function somaNum(){

    for(var s = 0 in nums){
        soma += nums[s]; 
    }
    var p = document.createElement('p');
    p.textContent = `Soma dos valores inseridos: ${soma}`;
    r.appendChild(p);
}

function mediaNum(){
   
    var media = soma/nums.length;

    var p = document.createElement('p');
    p.textContent = `Media dos valores inserido: ${media}`;
    r.appendChild(p);
}