# language: pt

Funcionalidade: BI-01 — Listagem de produtos e fluxo de compra
  Como um cliente do webshop
  Quero ver os produtos disponíveis ao abrir a loja
  E poder comprar um produto de forma simples

  Contexto:
    Dado que o webshop-api está disponível na porta 3000
    E o cliente acessa a home do webshop

  Cenário: Produtos carregam automaticamente ao inicializar a aplicação
    Quando a página é carregada
    Então a saga catalogoSaga dispara GET /produtos
    E os produtos retornados são exibidos na grade de produtos
    E os campos "nome" e "preco" da API são mapeados para "name" e "price" no model

  Cenário: Produtos não carregam quando o serviço está indisponível
    Dado que o webshop-api retorna 503
    Quando a página é carregada
    Então uma mensagem "Serviço temporariamente indisponível. Tente novamente em instantes." é exibida

  Cenário: Compra de produto com sucesso
    Dado que existe pelo menos um produto exibido na grade
    Quando o cliente clica em "Comprar 1 item"
    Então o botão muda para "Processando..." e fica desabilitado
    E a saga ordersSaga dispara POST /pedidos com productId, customerId "guest" e correlationId UUID
    E após a confirmação do pedido, uma notificação "Pedido criado! ID: {pedidoId}" é exibida
    E o botão volta ao estado normal

  Cenário: Botão de compra desabilitado durante request em andamento
    Dado que o cliente clicou em "Comprar 1 item"
    E a resposta da API ainda não chegou
    Então o botão exibe "Processando..." e está desabilitado
    E não é possível disparar um segundo pedido para o mesmo produto

  Cenário: Falha na compra com serviço indisponível (503)
    Dado que o webshop-api retorna 503 ao criar pedido
    Quando o cliente clica em "Comprar 1 item"
    Então uma mensagem de erro amigável é exibida sem stack trace
    E o botão volta ao estado normal
