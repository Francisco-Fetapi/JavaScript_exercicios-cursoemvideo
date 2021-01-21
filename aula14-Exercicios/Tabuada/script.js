var s = document.getElementById('tab');

document.body.onload = function(){
    s.setAttribute('style','display:none;');
}

function calcular(){

    s.setAttribute('style','display:block;');
    var num = document.getElementById('num');
   
    var res = 0;
    var n = Number(num.value);

    s.innerHTML = "";

    for(var i = 1;i <= 12;i++){    
            res = i * n;
           
            var op = document.createElement('option');
            op.text = `${n} x ${i} = ${res}`;
            s.appendChild(op);

            // s.innerHTML +=`<option>${n} x ${i} = ${res}</option>`;

        }

}

