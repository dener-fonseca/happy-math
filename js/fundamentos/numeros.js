// Happy Math - Números

// Função para corrigir os exercícios da página Números

function corrigir() {

    let acertos = 0;

    const gabarito = {

        1: "Há 3 maçãs no quadro.",
        2: "Há 4 lápis no quadro.",
        3: "Há 5 estrelas no quadro.",
        4: "Há 6 brinquedos no quadro.",
        5: "Há 2 cachorros no quadro.",
        6: "O número 4 representa a quantidade de 4 maçãs.",
        7: "O número 7 representa a quantidade de 7 estrelas.",
        8: "Há 5 carrinhos no quadro.",
        9: "Há 8 flores no quadro.",
        10: "Há 9 morangos no quadro."

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

            const primeiraOpcao = document.querySelector(
                `input[name="q${i}"]`
            );

            primeiraOpcao.scrollIntoView({
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


        // Resposta correta

        if (resposta.dataset.correta === "true") {

            acertos++;

            texto.innerHTML =
                "<strong>Você acertou!</strong>" +
                gabarito[i];

            texto.classList.add("correta");

        }


        // Resposta incorreta

        else {

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



// ==========================================
// REINICIAR OS EXERCÍCIOS
// ==========================================

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

    const primeiraQuestao =
        document.querySelector(
            'input[name="q1"]'
        );

    primeiraQuestao.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}



// ==========================================
// MOSTRAR MODAL
// ==========================================

function mostrarModal(texto) {

    document.getElementById(
        "mensagemModal"
    ).textContent = texto;


    document.getElementById(
        "modal"
    ).classList.add("aberto");

}



// ==========================================
// FECHAR MODAL
// ==========================================

function fecharModal() {

    document.getElementById(
        "modal"
    ).classList.remove("aberto");

}