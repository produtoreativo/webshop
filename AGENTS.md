# webshop — Guia do Agente

## AÇÃO OBRIGATÓRIA — execute antes de responder qualquer mensagem

Este repositório usa o **ProdOps Framework**. Você **não tem contexto suficiente**
para classificar ou executar nenhum pedido sem ler os arquivos abaixo.

**Leia agora, nesta ordem, antes de responder:**

```
1. prodops/exec/manifest.yaml
2. prodops/framework/principles.md
3. prodops/README.md
```

Não pule essa etapa. Não responda ao usuário antes de completar essas leituras.
Se qualquer um dos arquivos não existir, informe e aguarde instrução.

Após as leituras, use o protocolo de recebimento de trabalho abaixo.
Nas etapas seguintes da mesma sessão, não releia — o contexto já está estabelecido.

## Permissões pré-autorizadas para subagentes

Todas as operações abaixo estão pré-autorizadas pelo operador para esta sessão.
Subagentes **não devem pausar para solicitar confirmação** dessas operações:

- **Read** — qualquer arquivo do repositório, incluindo:
  - `prodops/artifacts/bdd/*.feature`
  - `prodops/artifacts/obcs/*.md`
  - `prodops/runtime/**`
  - `prodops/skills/**`
  - `prodops/framework/**`
- **Bash** — comandos de leitura, git local, gh CLI e scripts do runtime, conforme
  prescrito pelas Skills.

---

## Protocolo de recebimento de trabalho

**Antes de qualquer ação**, classificar o pedido e propor a jornada adequada.
Nunca iniciar implementação, refatoração, correção ou criação de artefatos sem
passar por este protocolo — independentemente de quem solicita ou como.

### Passo 0 — Classificar o trabalho

| Tipo de pedido | Jornada | Skill de entrada |
|---|---|---|
| Nova feature, endpoint, comportamento de negócio | **Delivery** | `/downstream` |
| Correção de bug com impacto em contrato ou comportamento | **Delivery** | `/downstream` |
| Atualização de dependência com impacto em runtime | **Delivery** | `/downstream` |
| Correção de vulnerabilidade de segurança | **Delivery** | `/downstream` |
| Investigação, descoberta, análise técnica | **Upstream** | `/upstream` |
| Auditoria, risco, conformidade, sinal de negócio | **Diligence** | `/diligence` |
| Pergunta, explicação, leitura de código | nenhuma jornada | responder diretamente |

### Passo 1 — Verificar artefatos de produto

Para pedidos do tipo **Delivery**, antes de propor execução, verificar:

1. Existe OBC em `prodops/artifacts/obcs/<capability>.md`?
2. Existe BDD Feature em `prodops/artifacts/bdd/<capability>.feature`?
3. Risco documentado em `prodops/artifacts/risks/risks.md`?
4. Item no Iteration Plan com status `Entrou`?

### Passo 2 — Propor, não executar

Apresentar ao operador:

```
Jornada identificada: <Delivery | Upstream | Diligence>
Skill de entrada: <skill>
Artefatos presentes: <lista>
Artefatos ausentes: <lista — bloqueia readiness>
Próxima ação proposta: <descrição>
```

Aguardar confirmação **exceto** quando o pedido já invocou explicitamente um
skill (`/downstream`, `/upstream`, `/hack`, etc.) — nesse caso executar
diretamente sem parar para propor.

### Passo 3 — Executar via skill

Após confirmação, executar exclusivamente via skill correspondente.
Nunca implementar código de produção fora do ciclo Bootstrap → Hack → Sync → Finish.

---

## Como trabalhar

1. **Trabalho de Delivery:** invoque o skill da fase — `/bootstrap`, `/hack`,
   `/sync`, `/finish`, `/ship`, `/validate`, `/promote`.
2. **Exploração:** `/upstream`. **Implementação governada:** `/downstream`.
3. **Paths canônicos, quality gates e vocabulário:** `prodops/exec/manifest.yaml`
