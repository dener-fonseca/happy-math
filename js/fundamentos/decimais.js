// Happy Math - Números Decimais

function corrigir() {

    const gabarito = {
        1: "2,5 é um número decimal.",
        2: "Usamos o símbolo , para representar a vírgula que separa a parte inteira da parte decimal.",
        3: "A parte inteira do número 4,7 é representada pelo algarismo 4.",
        4: "A parte decimal do número 3,6 é representada pelo algarismo 6.",
        5: "Cinco décimos é representado pelo número 0,5.",
        6: "Vinte e cinco centésimos é representado pelo número 0,25.",
        7: "O maior número é 2,7.",
        8: "O menor número é 4,2.",
        9: "O número 2,5 é lido como dois inteiros e cinco décimos.",
        10: "O algarismo 5 está na casa dos centésimos no número 3,25."
    };

    verificarQuestoes(gabarito);
}


function verificarQuestoes(gabarito) {

    let acertos = 0;

    // Verifica se todas as questões foram respondidas
    for (let i = 1; i <= 10; i++) {

        const resposta = document.querySelector(
            `input[name="q${i}"]:checked`
        );

        if (!resposta) {

            mostrarModal(
                "Responda a questão " + i + " antes de finalizar."
            );

            const primeiraOpcao = document.querySelector(
                `input[name="q${i}"]`
            );

            if (primeiraOpcao) {
                primeiraOpcao.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

            return;
        }
    }


    // Corrige as questões
    for (let i = 1; i <= 10; i++) {

        const resposta = document.querySelector(
            `input[name="q${i}"]:checked`
        );

        const texto = document.getElementById(`resp${i}`);

        texto.classList.remove("correta", "incorreta");

        if (resposta.dataset.correta === "true") {

            acertos++;

            texto.innerHTML =
                "<strong>Você acertou!</strong>" +
                gabarito[i];

            texto.classList.add("correta");

        } else {

            texto.innerHTML =
                "<strong>Você errou!</strong>" +
                gabarito[i];

            texto.classList.add("incorreta");
        }
    }


    // Mostra o resultado
    const resultado = document.getElementById("resultado");

    resultado.textContent =
        "Você acertou " + acertos + " de 10 questões!";

    resultado.classList.add("visivel");
}


function reiniciar() {

    // Desmarca todas as alternativas
    document.querySelectorAll(
        "input[type='radio']"
    ).forEach(function (radio) {

        radio.checked = false;

    });


    // Limpa o resultado
    const resultado = document.getElementById("resultado");

    resultado.textContent = "";

    resultado.classList.remove("visivel");


    // Limpa as mensagens das questões
    for (let i = 1; i <= 10; i++) {

        const resposta = document.getElementById("resp" + i);

        if (resposta) {

            resposta.innerHTML = "";

            resposta.classList.remove(
                "correta",
                "incorreta"
            );
        }
    }


    // Fecha o modal, se existir
    fecharModal();


    // Volta para a primeira questão
    const primeiraQuestao = document.querySelector(
        'input[name="q1"]'
    );

    if (primeiraQuestao) {

        primeiraQuestao.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}


function mostrarModal(texto) {

    const modal = document.getElementById("modal");
    const mensagem = document.getElementById("mensagemModal");

    // Se o modal não existir no HTML, não gera erro
    if (!modal || !mensagem) {
        alert(texto);
        return;
    }

    mensagem.textContent = texto;

    modal.classList.add("aberto");
}


function fecharModal() {

    const modal = document.getElementById("modal");

    // Evita erro caso o modal não exista
    if (!modal) {
        return;
    }

    modal.classList.remove("aberto");
}