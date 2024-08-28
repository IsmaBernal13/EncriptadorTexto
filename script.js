function procesarTexto() {
    const inputText = document.getElementById('inputText').value;
    const outputTextArea = document.getElementById('outputText');
    const action = document.querySelector('input[name="action"]:checked').value;

    // Validar que solo se usen letras minúsculas sin acentos ni caracteres especiales
    if (!/^[a-z\s]*$/.test(inputText)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let resultado = "";

    if (action === "encriptar") {
        resultado = encriptar(inputText);
    } else if (action === "desencriptar") {
        resultado = desencriptar(inputText);
    }

    outputTextArea.value = resultado;
}

function encriptar(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function copiarTexto() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para móviles
    document.execCommand("copy");
    alert("Texto copiado al portapapeles.");
}