// Happy Math - Temperatura

// Função para corrigir os exercícios da página Temperatura

function corrigir() {

    let acertos = 0;

    const gabarito = {

        1: "O instrumento usado para medir a temperatura é o termômetro.",

        2: "°C significa graus Celsius.",

        3: "A maior temperatura é 25 °C.",

        4: "A menor temperatura é 7 °C.",

        5: "A temperatura aumentou 7 °C.",

        6: "A temperatura diminuiu 6 °C.",

        7: "A temperatura de 5 °C representa o ambiente mais frio.",

        8: "A temperatura que está abaixo de zero é −3 °C.",

        9: "A temperatura de −6 °C é mais fria.",

        10: "A temperatura aumentou 8 °C."
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

        const texto = document.getElementById(
            `resp${i}`
        );

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


    // Mostra o resultado

    const resultado = document.getElementById(
        "resultado"
    );

    resultado.textContent =
        "Você acertou " +
        acertos +
        " de 10 questões!";

    resultado.classList.add("visivel");
}



// Função para reiniciar os exercícios

function reiniciar() {

    // Desmarca todas as alternativas

    const radios = document.querySelectorAll(
        "input[type='radio']"
    );

    radios.forEach(function(radio) {

        radio.checked = false;

    });


    // Apaga o resultado

    const resultado = document.getElementById(
        "resultado"
    );

    resultado.textContent = "";

    resultado.classList.remove(
        "visivel"
    );


    // Apaga as mensagens das questões

    for (let i = 1; i <= 10; i++) {

        const resposta = document.getElementById(
            "resp" + i
        );

        resposta.innerHTML = "";

        resposta.classList.remove(
            "correta",
            "incorreta"
        );
    }


    // Fecha o modal

    fecharModal();


    // Volta para a primeira questão

    document.querySelector(
        'input[name="q1"]'
    ).scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}



// Exibe o modal

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