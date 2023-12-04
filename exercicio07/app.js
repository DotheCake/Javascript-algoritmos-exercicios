function converter(){
    let fahrenheit, celsius
    fahrenheit = document.getElementById ("fahrenheit").value
    celsius = parseFloat ((fahrenheit) - 32) / 1.8 
    document.getElementById("conversao").innerText="A temperatura em C° é: " + celsius + "°"
}
