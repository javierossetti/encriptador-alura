const inputTexto = document.querySelector('.texto');
const outputTexto = document.querySelector('.respuesta');
const muneco = document.querySelector('.muñeco');
const parrafoRespuesta = document.querySelector('.parrafo_respuesta');
const copiar = document.getElementById('copiar');

function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

function mostrarResultado(texto) {
    muneco.style.display = 'none';
    parrafoRespuesta.style.display = 'none';
    outputTexto.style.display = 'block';
    outputTexto.value = texto;
    copiar.style.display = 'block';
}

function copiarTexto() {
    outputTexto.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

document.getElementById('encriptar').addEventListener('click', function() {
    const textoIngresado = inputTexto.value.trim();

    if (validarTexto(textoIngresado)) {
        const textoEncriptado = encriptarTexto(textoIngresado);
        mostrarResultado(textoEncriptado);
    } else {
        alert('Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.');
    }
});

document.getElementById('desencriptar').addEventListener('click', function() {
    const textoIngresado = inputTexto.value.trim();

    if (validarTexto(textoIngresado)) {
        const textoDesencriptado = desencriptarTexto(textoIngresado);
        mostrarResultado(textoDesencriptado);
    } else {
        alert('Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.');
    }
});

copiar.addEventListener('click', copiarTexto);
