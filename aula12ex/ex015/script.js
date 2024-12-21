function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.getElementById('res');

    if(fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(fsex[0].checked) {
            genero = 'Homem';
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/menino.jpg');
            } else if(idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/homemjovem.jpg');
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/homemadulto.jpg');
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/homemidoso.jpg');
            };
        } else if(fsex[1].checked) {
            genero = 'Mulher';
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/menina.jpg');
            } else if(idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/mulherjovem.jpg');
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/mulheradulta.jpg');
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/mulheridosa.jpg');
            };
        };
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);
        res.style.textAlign = 'center'
    };
};