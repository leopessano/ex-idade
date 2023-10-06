function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = document.querySelector(Number('p#anoNasc')) // REVER
    var idade = Number(anoAtual) - Number(anoNasc)
    var res = document.getElementById('res')
    if (anoNasc.value.length == 0 || anoNasc.value > anoAtual) {
        alert('[ERRO] Data informada incorreta. Por favor, tente novamente!')
    } else {
        alert(idade)
    }
}