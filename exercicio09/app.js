function calcularimc(){
    let altura, imc
    altura = document.getElementById ("altura").value
    imc = (72.7* parseFloat (altura)) - 58
    document.getElementById("resultado").innerText="Seu peso ideal é: " + imc
}