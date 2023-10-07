function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = document.getElementById('anoNasc')
    var res = document.getElementById('res')
    if (anoNasc.value.length == 0 || anoNasc.value > anoAtual) {
        alert('[ERRO] Data informada incorreta. Por favor, tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(anoNasc.value)
        var gen = ''
        /* var img = document.createElement('img')
           img.setAttribute('id', 'foto')
        */
        if (fsex[0].checked) {
            gen = 'Mas'
        } else {
            gen = 'Fem'
        }    if (idade <= 12 && gen == 'Mas') {
                res.innerHTML = `Você é um menino com ${idade} anos!`
                document.getElementById('imagem').src = ('img/menino.jpg')
            } else if (idade <= 12 && gen == 'Fem') {
                res.innerHTML = `Você é uma menina com ${idade} anos!`
                document.getElementById('imagem').src = ('img/menina.jpg')
            } else if (idade <= 21 && gen == 'Mas') {
                res.innerHTML = `Você é um jovem rapaz com ${idade} anos!`
                document.getElementById('imagem').src = ('img/rapaz.jpg')
            } else if (idade <= 21 && gen == 'Fem') {
                res.innerHTML = `Você é uma jovem moça com ${idade} anos!`
                document.getElementById('imagem').src = ('img/moca.jpg')
            } else if (idade <= 60 && gen == 'Mas') {
                res.innerHTML = `Você é um homem adulto com ${idade} anos!`
                document.getElementById('imagem').src = ('img/homem.jpg')
            } else if (idade <= 60 && gen == 'Fem') {
                res.innerHTML = `Você uma mulher adulta com ${idade} anos!`
                document.getElementById('imagem').src = ('img/mulher.jpg')
            } else if (idade > 60 && gen == 'Mas') {
                res.innerHTML = `Você é um senhor idoso com ${idade} anos!`
                document.getElementById('imagem').src = ('img/idoso.jpg')
            } else if (idade > 60 && gen == 'Fem') {
                res.innerHTML = `Você é uma senhora idosa com ${idade} anos!`
                document.getElementById('imagem').src = ('img/idosa.jpg')
            }
        res.style.textAlign = 'center'
    }
}