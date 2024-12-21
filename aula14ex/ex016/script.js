function contar() {
    let i = Number(document.querySelector('input#txti').value);
    let f = Number(document.querySelector('input#txtf').value);
    let p = Number(document.querySelector('input#txtp').value);
    let res = document.querySelector('div#res');

    res.innerHTML = '';

    if (i == '') {
        res.innerHTML = `Impossível contar!`
    } else if (f == '') {
        res.innerHTML = `Impossível contar!`
    } else if (p == '') {
        alert('Passo inválido! Considerando PASSO 1');
        let p = 1;
        while (i <= f) {
            console.log(i);
            res.innerHTML += `${i} \u{1F449} `;
            i += p
        };
        res.innerHTML += `\u{1F3F4}`
    } else if (i > f) {
        while (f <= i) {
            console.log(i);
            res.innerHTML += `${i} \u{1F449} `;
            i -= p
        };
        res.innerHTML += `\u{1F3F4}`
    } else {
        while (i <= f) {
            console.log(i);
            res.innerHTML += `${i} \u{1F449} `;
            i += p
        };
        res.innerHTML += `\u{1F3F4}`
    };

};


// res.innerHTML += `${i} \u{1F449} `;
// res.innerHTML += `\u{1F3F4}`