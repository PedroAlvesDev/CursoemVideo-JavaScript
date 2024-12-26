function contar() {
    let inicio = document.querySelector('input#inicio');
    let fim = document.querySelector('input#fim');
    let passo = document.querySelector('input#passo');
    let res = document.querySelector('div#res');

    res.innerHTML = '';

    if (inicio.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = `Impossível contar!`
    } else {
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p <= 0) {
            alert('Impossível contar! Considerando PASSO 1');
            p = 1;
        };
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `;
            };
        } else if (f < i) {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `;
            };
        };
        res.innerHTML += `\u{1F3F4} `
    };
};
// res.innerHTML += `${i} \u{1F449} `;
// res.innerHTML += `\u{1F3F4}`
