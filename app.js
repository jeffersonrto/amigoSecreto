let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    atualizarListaAmigos();
    input.value = ""; 
}


function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear.");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto é: <strong>${amigoSorteado}</strong>`;
}
