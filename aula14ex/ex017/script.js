function tabuada() {
    let numero = document.querySelector('input#num'); 
    let tab = document.querySelector('input#gerTab');
   
    tb.innerHTML = '';
    if(numero.value.length == 0) {
        alert('Por favor, digite um número!');
    } else {
        let n = Number(numero.value);
        for(let i =1; i<=10; i++) {
            tb.innerHTML += `${n} x ${i} = ${i*n}<br>`
        };
    };
};