function mostrar_texto(texto) {
    document.getElementById("imgDer").style.display = "none"
    document.getElementById("texto").style.display = "none"
    document.getElementById("copiar").style.display = "show"
    document.getElementById("texto2").innerHTML = texto
    document.getElementById("textoingresado").innerHTML = " "
    document.getElementById("copiar").style.display = "inherit"
}

function encriptar() {
    const encriptadores = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    }

    let encriptado = ""
    const textoingresado = document.getElementById("textoingresado").value
    const arr = Array.from(textoingresado)

    for (let letra of arr) {
        if (letra.search(/[^A-Z]+/) === -1 | letra.search(/[^0-9]+/) === -1 | letra.search(/[^!@#$%^&*.,:?¡¿/]+/) === -1 ) {
            alert("Ingrese solo minusculas; no se puede ingresar numeros o signos ")
            const contenido1 = document.getElementById("textoingresado")
            contenido1.value = ""
            return
        }
        
        const é_vogal = letra.search(/[aeiou]/) !== -1

        if (é_vogal) {
            //encriptado = encriptado + encriptadores[letras]
            encriptado += encriptadores[letra]
        }
        else {
            encriptado += letra
        }
    }

    mostrar_texto(encriptado)
}

function desencriptar() {
    const descriptadores = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ufat": "u",
        "ober": "o"
    }

    const textoingresado = document.getElementById("textoingresado").value

    console.log(textoingresado)

    let desencriptado = textoingresado

    for (let [cript, letra] of Object.entries(descriptadores)) {
        desencriptado = desencriptado.replaceAll(cript, letra)
    }
    
    mostrar_texto(desencriptado)
}

function copiar() {
    const contenido = document.querySelector("#texto2")
    contenido.select()

    document.execCommand('copy')

    alert("Texto copiado en el portapapeles")
}
