function calcularPedido(event) {

    event.preventDefault();

    try {

        // Pega o preço do lanche escolhido
        let lanche = document.getElementById("lanche").value;

        // Pega a quantidade informada
        let quantidade = document.getElementById("quantidade").value;

        // Converte os valores para números
        let preco = Number(lanche);
        quantidade = Number(quantidade);

        // Verifica se a quantidade é válida
        if (quantidade <= 0 || !Number.isInteger(quantidade)) {
            throw new Error("Digite uma quantidade inteira maior que zero.");
        }

        // Calcula o valor total
        let total = preco * quantidade;

        // Mostra o resultado na página
        document.getElementById("resultado").innerHTML =
            "O valor total do seu pedido é: R$ " + total.toFixed(2);

    } catch (erro) {

        // Mostra a mensagem de erro
        document.getElementById("resultado").innerHTML = erro.message;

    }

}

// Identifica o envio do formulário
document.getElementById("formPedido").addEventListener("submit", calcularPedido);
