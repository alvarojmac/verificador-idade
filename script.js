function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {  // formularioAno.value.length é o tamanho do valor do formularioAno. Ou seja, se ele for = 0 (SE TIVER VAZIO) vem a mensagem ERRO.
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var formularioSex = document.getElementsByName('radsex')
        var idade = ano - Number(formularioAno.value)
        var genero = ''
        var img = document.createElement('img')  // cria uma imagem (tag img) dinamicamente pelo JS em vez de no HTML
        img.setAttribute('id', 'foto')  // cria o id para o img -> id='foto'
        if (formularioSex[0].checked) {  // [0] é o primeiro = Homem. E .checked é se estiver marcado.
            genero = 'um homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'img/bebe-menino.png')
            } else if  (idade < 21) {
                // jovem
                img.setAttribute('src', 'img/jovem-homem.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'img/adulto-homem.png')
            } else if (idade < 120){
                // idoso
                img.setAttribute('src', 'img/idoso-homem.png')
            } else {
                // caveira
                img.setAttribute('src', 'img/caveira.png')
            }
        } else if (formularioSex[1].checked) {
            genero = 'uma mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'img/bebe-menina.png')
            } else if  (idade < 21) {
                // jovem
                img.setAttribute('src', 'img/jovem-mulher.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'img/adulto-mulher.png')
            } else if (idade < 120) {
                // idoso
                img.setAttribute('src', 'img/idoso-mulher.png')
            } else {
                img.setAttribute('src', 'img/caveira.png')
            }
        } else if (formularioSex[2].checked) {
            genero = 'uma pessoa'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'img/bebe.png')
            } else if  (idade < 21) {
                // jovem
                img.setAttribute('src', 'img/jovem.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'img/adulte.png')
            } else if (idade < 120) {
                // idoso
                img.setAttribute('src', 'img/idose.png')
            } else {
                img.setAttribute('src', 'img/caveira.png')
            }
        }
        res.style.textAlign = 'center'  // centraliza o texto abaixo.
        img.style.padding = '15px'  // padding das imagens (img)
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`  // res é a var res de resposta
        res.appendChild(img)  // adiciona um elemento (img)
    }
}