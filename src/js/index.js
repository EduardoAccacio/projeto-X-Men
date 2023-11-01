const personagensArray = document.querySelectorAll('.personagem');

personagensArray.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        //remover o anterior
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        //adcionar a classe no novo
        personagem.classList.add('selecionado');
        //mudar a imagem grande
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        const idPersonagem = personagem.attributes.id.value;

        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        const nomePersonagemGrande = document.getElementById('nome-personagem');
        nomePersonagemGrande.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})