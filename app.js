//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const participantes = [];

function adicionarParticipante() {
    const nomeInput = document.getElementById('nome');
    const nome = nomeInput.value.trim();

    if (nome && !participantes.includes(nome)) {
        participantes.push(nome);
        nomeInput.value = '';
        atualizarParticipantes();
    } else {
        alert('Nome inválido ou já adicionado.');
    }
}

function atualizarParticipantes() {
    const lista = document.getElementById('participantes');
    lista.innerHTML = '';
    participantes.forEach(participante => {
        const li = document.createElement('li');
        li.textContent = participante;
        lista.appendChild(li);
    });
}

function sortear() {
    if (participantes.length < 2) {
        alert('Adicione pelo menos dois participantes para sortear.');
        return;
    }

    const resultado = [];
    const nomesSorteados = [...participantes];

    participantes.forEach(participante => {
        const indiceSorteado = Math.floor(Math.random() * nomesSorteados.length);
        const amigoSecreto = nomesSorteados[indiceSorteado];

        // Remover o amigo secreto sorteado da lista
        nomesSorteados.splice(indiceSorteado, 1);
        resultado.push(`${participante} tirou ${amigoSecreto}`);
    });

    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';
    resultado.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listaResultado.appendChild(li);
    });
}