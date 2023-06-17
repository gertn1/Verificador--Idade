function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
    window.alert("ERRO! Verifique os dados e tente novamente!")
}else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    img.width=300;
    img.height=200;
    if(fsex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade <10){
            img.setAttribute('src','./foto/meninobebe.jpg' )
        } else if (idade < 21){
            img.setAttribute('src', './foto/menino.jpg')
        } else if (idade < 50){
            img.setAttribute('src','./foto/homem.jpg')
        } else{
            img.setAttribute('src','./foto/senhor.jpg')

        }
    }else if(fsex[1].checked) {
        genero = 'Mulher'
        if(idade >= 0 && idade <10){
            img.setAttribute('src','./foto/meninabebe.jpg')
        } else if (idade < 21){
            img.setAttribute('src','./foto/menina.jpg')
        } else if (idade < 50){
            img.setAttribute('src','./foto/mulher.jpg')
        } else{
            img.setAttribute('src','./foto/senhora.jpg')
        }

    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    
}
    
}
