# Local OBC — BI-01: Compra de 1 item por Pix via Listagem

**Produto:** webshop (front-end / Value Stream)
**Global OBC:** [global-bi-01-compra-pix-listagem.md](https://github.com/produtoreativo/prodops-portfolio/blob/prodops-workspace/prodops/artifacts/obcs/global-bi-01-compra-pix-listagem.md)
**Release:** 1.0.0
**Portfolio Issue:** [prodops-portfolio#5](https://github.com/produtoreativo/prodops-portfolio/issues/5)

---

## Status

Draft. Aguardando refinamento pelo Tech Lead. Rastreado em [webshop#3](https://github.com/produtoreativo/webshop/issues/3).

---

## Business Outcome

O webshop exibe a listagem de produtos e conduz o cliente pelo fluxo completo de compra — seleção de item, criação de pedido e visualização do detalhe do pedido — de forma que o cliente consiga concluir uma compra com 1 item sem fricção.

### Em linguagem executiva

É a vitrine e o caixa da loja: o cliente vê os produtos, escolhe um, e acompanha o pedido. Tudo em uma experiência contínua, sem redirecionamentos ou erros visíveis.

---

## Observable Events

| Event | Meaning | Required dimensions |
|---|---|---|
| `listagem.visualizada` | Cliente acessou a tela de listagem de produtos | `sessionId`, `correlationId` |
| `compra.iniciada` | Cliente selecionou um item e iniciou o fluxo de compra | `productId`, `sessionId`, `correlationId` |
| `pedido.confirmado` | Cliente visualizou o detalhe do pedido após criação | `pedidoId`, `sessionId`, `correlationId` |
| `compra.falhou` | Erro durante o fluxo de compra visível ao cliente | `step`, `reason`, `correlationId` |

---

## Initial SLIs

| SLI | Initial target |
|---|---|
| Listagem de produtos carregada em menos de 2s (p95) | 99% |
| Fluxo seleção → pedido criado sem erro | 99.5% |
| Detalhe do pedido acessível após criação | 100% |
| Erro de API do webshop-api não exposto ao cliente sem tratamento | 100% |

---

## Reliability Rules

- Em falha do webshop-api na listagem, exibir mensagem de indisponibilidade sem expor detalhes técnicos.
- O botão de compra é desabilitado após o primeiro clique até a resposta do webshop-api (prevenção de duplo clique).
- Nenhum dado de pagamento ou sessão é logado no front-end.
- O correlationId é gerado no front-end e propagado em todas as chamadas ao webshop-api.

---

## Related Artifacts

- BDD: `prodops/artifacts/bdd/bi-01-compra-pix-listagem.feature` *(a criar)*
- Iteration Plan: `prodops/artifacts/plans/iteration-plan.md`
- OBCs relacionados: [local-bi-01-webshop-api](https://github.com/produtoreativo/webshop-api/blob/prodops-workspace/prodops/artifacts/obcs/local-bi-01-webshop-api.md)
