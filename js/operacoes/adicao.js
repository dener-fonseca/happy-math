// Happy Math - Adição

// Função para corrigir os exercícios da página Adição

function corrigir() {

    let acertos = 0;

    const gabarito = {
        1: "2 + 3 = 5.",
        2: "5 + 4 = 9.",
        3: "6 + 2 = 8.",
        4: "1 + 8 = 9.",
        5: "7 + 3 = 10.",
        6: "9 + 1 = 10.",
        7: "3 + 4 = 7.",
        8: "8 + 2 = 10.",
        9: "5 + 5 = 10.",
        10: "4 + 2 = 6."
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


// Função para reiniciar os exercícios da página Adição

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