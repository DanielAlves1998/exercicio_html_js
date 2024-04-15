const form = document.getElementById('form-deposito');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');

    const valorCampoA = Number(campoA.value);
    const valorCampoB = Number(campoB.value);

    if (valorCampoB > valorCampoA) {
        const mensagemSucesso = `O valor ${valorCampoB} é maior que o valor ${valorCampoA}`;
        alert(mensagemSucesso);
    } else {
        alert('O campoB não é maior que o campoA');
    }
})
console.log(form);