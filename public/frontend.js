async function carregarProdutos() {
      try {
        const response = await fetch('/api/produtos');
        const produtos = await response.json();
        
        const vitrine = document.getElementById('vitrine');
        vitrine.innerHTML = produtos.map(produto => `
          <div class="produto">
            <img src="/images/${produto.imagem_url}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <div class="preco">R$ ${produto.preco}</div>
          </div>
        `).join('');
        
      } catch (erro) {
        console.error('Erro ao carregar produtos:', erro);
        vitrine.innerHTML = '<p>Não foi possível carregar os produtos</p>';
      }
    }
    document.addEventListener('DOMContentLoaded', carregarProdutos);
