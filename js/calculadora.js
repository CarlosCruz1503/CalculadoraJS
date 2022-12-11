resultado = document.getElementById("resultado");
chiqui = document.getElementById("chiqui");
let operando = [];

const numeros = (num) => {
    let numB = document.getElementById(num);
    numB.addEventListener("click", () => {
        texto = resultado.innerHTML
        if (texto == "+") {
            texto = ""
        }
        if (texto == "-") {
            texto = ""
        }
        if (texto == "*") {
            texto = ""
        }
        if (texto == "/") {
            texto = ""
        }
        resultado.innerHTML = texto + num
        console.log("" + operando)
    })
}

numeros("1")
numeros("2")
numeros("3")
numeros("4")
numeros("5")
numeros("6")
numeros("7")
numeros("8")
numeros("9")
numeros("0")
numeros("00")
numeros(".")


const operacion = (operacion, signo) => {
    let operacionB = document.getElementById(signo)
    operacionB.addEventListener("click", () => {

        if (operando.length >= 2) {
            if (isNaN(resultado.innerHTML)) {
                console.log("Pulso dos operaciones")
                operando.pop()
                operando.push(resultado.innerHTML)
            } else {
                operando.push(resultado.innerHTML)
            }
            for (let i = 0; i < operando.length; i++) {
                if (isNaN(operando[i])) {
                    if (operando[i] == "multiplica") {
                        console.log(operando[i])
                        texto = parseFloat(operando[i - 1]) * parseFloat(operando[i + 1])
                        operando.splice(0, operando.length);
                        console.log(resultado)
                        resultado.innerHTML = texto
                    } if (operando[i] == "divide") {
                        console.log(operando[i])
                        texto = parseFloat(operando[i - 1]) / parseFloat(operando[i + 1])
                        operando.splice(0, operando.length);
                        console.log(resultado)

                        resultado.innerHTML = texto
                    } if (operando[i] == "resta") {
                        console.log(operando[i])
                        texto = parseFloat(operando[i - 1]) - parseFloat(operando[i + 1])
                        operando.splice(0, operando.length);
                        console.log(resultado)

                        resultado.innerHTML = texto
                    }
                    if (operando[i] == "suma") {
                        console.log(operando[i])
                        texto = parseFloat(operando[i - 1]) + parseFloat(operando[i + 1])
                        operando.splice(0, operando.length);
                        console.log(resultado)

                        resultado.innerHTML = texto
                    }
                }
            }
        }



        if (isNaN(resultado.innerHTML)) {
            console.log("Pulso dos operaciones")
            operando.pop()
        } else {
            operando.push(resultado.innerHTML)
        }
        operando.push(operacion)

        texto = ""
        resultado.innerHTML = texto + signo
        console.log("" + operando)
        if (operando[0] != undefined) {
            chiqui.innerHTML = operando[0]
        }
    })
}

operacion("suma", "+")
operacion("resta", "-")
operacion("multiplica", "*")
operacion("divide", "/")


let atrasB = document.getElementById("<")
atrasB.addEventListener("click", (e) => {
    texto = resultado.innerHTML.substring(0, resultado.innerHTML.length - 1);
    resultado.innerHTML = texto
})

let eliminarB = document.getElementById("c")
eliminarB.addEventListener("click", (e) => {
    resultado.innerHTML = ""
    operando.splice(0, operando.length);
    chiqui.innerHTML = ""
    resultado.style.fontSize = "80px"
})






total = document.getElementById("=");
total.addEventListener("click", () => {
    if (operando.length == 2) {
        operando.push(resultado.innerHTML)
        for (let i = 0; i < operando.length; i++) {
            if (isNaN(operando[i])) {
                if (operando[i] == "suma") {
                    console.log(operando[i])
                    texto = parseFloat(operando[i - 1]) + parseFloat(operando[i + 1])
                    operando.splice(0, operando.length);
                    console.log(resultado)
                    resultado.innerHTML = texto.toFixed(3)
                } else if (operando[i] == "resta") {
                    console.log(operando[i])
                    texto = parseFloat(operando[i - 1]) - parseFloat(operando[i + 1])
                    operando.splice(0, operando.length);
                    console.log(resultado)
                    resultado.innerHTML = texto.toFixed(3)
                } else if (operando[i] == "multiplica") {
                    console.log(operando[i])
                    texto = parseFloat(operando[i - 1]) * parseFloat(operando[i + 1])
                    operando.splice(0, operando.length);
                    console.log(resultado)
                    resultado.innerHTML = texto.toFixed(3)
                } else if (operando[i] == "divide") {
                    console.log(operando[i])
                    texto = parseFloat(operando[i - 1]) / parseFloat(operando[i + 1])
                    operando.splice(0, operando.length);
                    console.log(resultado)
                    resultado.innerHTML = texto.toFixed(3)
                }
            }
        }
    }
    chiqui.innerHTML = resultado.innerHTML
    if (resultado.innerHTML > 10000){
        resultado.style.fontSize = "60px"
    }
    if (resultado.innerHTML > 1000000){
        resultado.style.fontSize = "40px"
    }
})