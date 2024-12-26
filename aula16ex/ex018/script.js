let num = document.querySelector('input#numero');
let tab = document.querySelector('select#selNum');

let val = [];

function adicionar() {
    n = Number(num.value);

    if (num.value.length == 0 || val.indexOf(n) > -1 || num.value < 1 || num.value > 100) {
        alert(`Valor inválido ou já encontrado na lista!`);
    } else {
        val.push(n);
        let item = document.createElement('option');
        item.text = `Valor ${n} adicionado.`;
        tab.appendChild(item); 
    };
    num.value = '';
    num.focus();
};

function finalizar() {
    if(!val.length) {
        alert(`Nenhum número foi cadastrado!`);
    } else {
        let numCad = val.length;
        let maior = Math.max.apply(null, val);
        let soma = val.reduce((acumulator, valorAtual) => acumulator + valorAtual, 0);
        let media = Number((soma / val.length));
    
        res.innerHTML += `<p>Ao todo, temos ${numCad} números cadastrados.</p><br>`
    
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p><br>`
    
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p><br>`
    
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}</p><br>`
    };
};

