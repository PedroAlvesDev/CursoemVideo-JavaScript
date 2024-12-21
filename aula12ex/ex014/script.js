function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    // let hora = 9;

    if(hora >= 0 && hora < 12) {
        //BOM DIA
        img.src= 'manha.jpg'
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        document.body.style.background = '#687bc7';
    } else if(hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'tarde.jpg'
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        document.body.style.background = '#783414';
    } else {
        //BOA NOITE
        img.src = 'noite.jpg'
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
        document.body.style.background = '#1b1419';
    };
};
