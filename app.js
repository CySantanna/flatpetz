function pesquisar() {

    let section = document.getElementById("resultados-pesquisa"); // Seleciona o elemento HTML com o ID "resultados-pesquisa"
    // Este elemento será usado para inserir os resultados da pesquisa

    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase()

    if (campoPesquisa == "") {
        section.innerHTML = "<p class='centralizar'>Nenhuma raça foi pesquisada</p>"
        return
    }
    
    console.log(campoPesquisa)

    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados HTML

    // Itera sobre cada elemento (dado) do array 'dados'
    for (let dado of dados) {
        if (dado.Título.toLowerCase().includes(campoPesquisa) 
                || dado.Característica.toLowerCase().includes(campoPesquisa) 
                || dado.Saúde.toLowerCase().includes(campoPesquisa) 
                || dado.Cuidados.toLowerCase().includes(campoPesquisa) 
                || dado.ExpectativaDeVida.toLowerCase().includes(campoPesquisa)
                || dado.tags.toLowerCase().includes(campoPesquisa)
            ) {  // Constrói uma string HTML para cada dado, formatando os valores das propriedades
            resultados += `
                <div class="item-resultado">
                    <h1>${dado.Título}</h1>
                    <img src="${dado.image}" />
                    <p>${dado.Característica}</p>
                    <p>${dado.Saúde}</p>
                    <p>${dado.Cuidados}</p>
                    <p>${dado.ExpectativaDeVida}</p>
                </div>
            `} 
    }

    // Insere o HTML gerado no elemento selecionado
    section.innerHTML = resultados;

    if (!resultados) {        
        section.innerHTML = "<p class='centralizar'>Poxa! Infelizmente ainda não temos informações sobre essa raça.</p>"
    }
}



const acordeonTitulos = document.querySelectorAll('.acordeon-titulo');

// Itera sobre cada título do acordeon
acordeonTitulos.forEach(titulo => {
    // Adiciona um ouvinte de evento para cada título, que será acionado quando o título for clicado
    titulo.addEventListener('click', () => {
        // Obtém o elemento irmão seguinte (o conteúdo do acordeon)
        const conteudo = titulo.nextElementSibling;

        // Adiciona ou remove a classe 'ativo' para mostrar ou esconder o conteúdo
        conteudo.classList.toggle('ativo');
    });
});

