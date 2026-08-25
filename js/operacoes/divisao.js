// Happy Math - Divisão

// Função para corrigir os exercícios da página Divisão

function corrigir() {

    let acertos = 0;

    const gabarito = {
        1: "8 ÷ 2 = 4.",
        2: "12 ÷ 3 = 4.",
        3: "10 ÷ 2 = 5.",
        4: "16 ÷ 4 = 4.",
        5: "18 ÷ 3 = 6.",
        6: "20 ÷ 5 = 4.",
        7: "14 ÷ 2 = 7.",
        8: "21 ÷ 3 = 7.",
        9: "24 ÷ 6 = 4.",
        10: "30 ÷ 5 = 6."
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
        texto.classList.remove(
            "correta",
            "incorreta"
        );

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

    // Mostra o resultado final
    const resultado = document.getElementById("resultado");

    resultado.textContent =
        "Você acertou " + acertos + " de 10 questões!";

    resultado.classList.add("visivel");
}


// Função para reiniciar os exercícios da página Divisão

function reiniciar() {

    // Desmarca todas as alternativas
    document.querySelectorAll(
        "input[type='radio']"
    ).forEach(function(radio) {

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