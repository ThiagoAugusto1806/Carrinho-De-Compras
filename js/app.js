limpar()
function adicionar() {
  let produto = document.getElementById("produto").value;
  let quantidade = document.getElementById("quantidade").value;
  if(quantidade<=0){
    alert("Quantidade deve ser maior que 0")
    return
  }
  let nomeProduto = produto.split("-")[0]
  let precoProduto = produto.split("R$")[1]
  document.getElementById(
    "lista-produtos"
  ).innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto}</span>
        </section>`;
  let produtoXQuantidade = precoProduto * quantidade;
  mostraNovoValorTotal(produtoXQuantidade);
}

function mostraNovoValorTotal(novoItem) {
  let valorTotal = document.getElementById("valor-total").textContent;
  valorTotal = valorTotal.replace("R$", "");
  valorTotal = parseInt(valorTotal) + parseInt(novoItem);
  document.getElementById("valor-total").innerHTML = `R$${valorTotal}`;
}

function limpar() {
  document.getElementById("lista-produtos").innerHTML = ``;
  document.getElementById("valor-total").innerHTML = `R$ 0`;
}
