// Happy Math - Subtração

// Função para corrigir os exercícios da página Subtração

function corrigir() {

    let acertos = 0;

    const gabarito = {
        1: "5 - 2 = 3.",
        2: "9 - 4 = 5.",
        3: "8 - 3 = 5.",
        4: "10 - 2 = 8.",
        5: "7 - 5 = 2.",
        6: "6 - 1 = 5.",
        7: "9 - 2 = 7.",
        8: "4 - 3 = 1.",
        9: "8 - 5 = 3.",
        10: "10 - 6 = 4."
    };

    // Verifica se todas as questões foram respondidas
    for (let i = 1; i <= 10; i++) {

        const resposta = document.querySelector(
            `input[name="q${i}"]:checked`
        );

        if (!resposta) {

            mostrarModal(
                "Responda a questão " + i + " antes de finalizar."
            );

            document.querySelector(
                `input[name="q${i}"]`
            ).scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            return;
        }
    }

    // Corrige todas as questões
    for (let i = 1; i <= 10; i++) {

        const resposta = document.querySelector(
            `input[name="q${i}"]:checked`
        );

        const texto = document.getElementById(`resp${i}`);

        // Remove classes anteriores
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


// Função para reiniciar os exercícios da página Subtração

function reiniciar() {

    // Desmarca todas as alternativas
    const radios = document.querySelectorAll(
        "input[type='radio']"
    );

    radios.forEach(function(radio) {
        radio.checked = false;
    });

    // Limpa o resultado final
    const resultado = document.getElementById("resultado");

    resultado.textContent = "";
    resultado.classList.remove("visivel");

    // Limpa as mensagens das questões
    for (let i = 1; i <= 10; i++) {

        const texto = document.getElementById("resp" + i);

        texto.innerHTML = "";

        texto.classList.remove(
            "correta",
            "incorreta"
        );
    }

    // Fecha o modal
    fecharModal();

    // Vai para a primeira questão
    document.querySelector(
        'input[name="q1"]'
    ).scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// Exibe o modal personalizado

function mostrarModal(texto) {

    document.getElementById(
        "mensagemModal"
    ).textContent = texto;

    document.getElementById(
        "modal"
    ).classList.add("aberto");
}


// Fecha o modal

function fecharModal() {

    document.getElementById(
        "modal"
    ).classList.remove("aberto");
}