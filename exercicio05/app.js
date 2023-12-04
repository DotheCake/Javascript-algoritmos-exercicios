function converter(){
    let centimetros, metros
    centimetros = document.getElementById ("centimetros").value
    metros = centimetros / 100
    document.getElementById("conversao").innerText="A conversão em metros é: " + metros + "M"
}
