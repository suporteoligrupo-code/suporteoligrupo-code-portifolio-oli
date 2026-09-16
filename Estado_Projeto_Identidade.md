# Lucas + OLI — rascunho de posicionamento v01

## Estado e autorização

- Modo: continuação do portfólio existente; rascunho de site solicitado em 16/09/2026.
- Fonte principal: instruções de Lucas, dados confirmados no repositório e produção existente.
- Base: `main` em `a52db88fb56492be3312f933262c06167f992e6d`.
- Branch: `draft/games-tech-oli-positioning`.
- Estado: em revisão. A formulação Lucas + OLI é uma proposta, não aprovação de identidade ou de publicação em produção.
- Entrega: preview navegável no projeto Vercel `portfolio-oli`; sem novo repositório, domínio ou projeto.
- Aprovação necessária: Lucas avaliar o posicionamento e a função proposta para OLI antes de integrar à main.
- Drive: fora do escopo desta entrega de código; nenhuma pasta externa alterada.

## Direção do rascunho

“Estratégia, marketing e negócios para games e tecnologia.”

Lucas permanece o sujeito da narrativa e a origem da experiência. A OLI é apresentada como a marca que organiza sua atuação. A proposta não atribui à OLI a fundação em 2010, equipe, contratos, resultados ou clientes próprios.

Tecnologia aparece ao lado de games, especialmente em varejo, eletrônicos, celulares, acessórios, presença digital e comunicação de serviços especializados. Não há alegação de especialização universal em engenharia, programação, hardware ou desenvolvimento de jogos.

## Apontamentos: o que muda e por quê

| Área | Mudança | Motivo |
|---|---|---|
| Hero | Posicionamento games + tecnologia, experiência na Rico e ligação com OLI | Explicar rapidamente foco, base profissional e forma de atuação |
| Trajetória | “Antes da campanha, o balcão.” e progressão desde 2010 | Diferenciar vivência operacional de uma oferta apenas visual |
| Lucas + OLI | Nova seção, com três públicos prioritários | Integrar as duas identidades sem aparência de agência genérica |
| Experiências da home | Rico, Toy Show, Josucas, Metro | Quatro provas com relação direta ou adjacente ao foco |
| Projetos da home | Rico, Josucas, Metro, Eletrotech ISA | Mostrar games, eletrônicos e serviços especializados com material existente |
| Índices | Novo foco primeiro; outros setores preservados | Mudar a hierarquia, não apagar a trajetória |
| Parcerias | Relações contextualizadas na Rico; não clientes da OLI | Evitar transferência indevida de credenciais |
| Como contribuo | Oferta, operação, conteúdo e presença digital | Conectar competências a necessidades concretas |
| Urly Marketing | Nota compacta com link para a experiência completa | Preservar o compromisso de 10% da renda bruta, sem confundir Urly com OLI |
| Contato e metadados | Linguagem coerente com o novo foco | Concluir a narrativa e manter a identidade pessoal |

## Ativos bloqueados e preservados

- Base editorial grafite/off-white/laranja, fontes e enquadramentos aprovados.
- Nenhum arquivo de imagem removido, substituído ou criado artificialmente.
- Capa do Manifesto sai somente da home; capa existente da Eletrotech entra com seu tratamento individual original.
- Retrato preservado, com tamanho menor no mobile; focal point intacto.
- Sistema `MediaFrame`: fit, position, scale, inset, limites, frame, overlay, motion e configuração mobile intactos.
- Dez experiências e dez projetos continuam disponíveis. Status de conceito, consultoria e desenvolvimento não foram promovidos.
- Rico Games: 2010–atual. Toy Show: aproximadamente dois anos, sem datas inventadas.
- Urly: marca distinta, com compromisso de 10% da renda bruta para proteção animal.
- Experiências sem confirmação, incluindo música, continuam ocultas.
- Seleção editorial isolada em `app/data/positioning.ts`; carreira não foi convertida em `PortfolioCase`.
- CSS da home mantido em `editorial-cleanup.css`; CSS antigo da grande seção de impacto removido de `globals.css`, sem empilhar overrides.

## Verificações e limites

- TypeScript e build local: aprovados na primeira validação; repetir no fechamento.
- Lint: não configurado no projeto. Não declarar como aprovado.
- Regressão automatizada: `node scripts/check-positioning.mjs`, após o build.
- Produção existente: home, índices e vinte rotas internas acessados antes da publicação do rascunho.
- Mobile: regras de 320–430 px revisadas no código; o navegador disponível não oferece alteração de viewport. Validação visual nesses tamanhos e em tablet permanece pendente, sem alegação de teste real.
- Preview Vercel e revisão visual desktop: a confirmar após deploy da branch.
- Produção: não alterar nesta etapa.

## Pendências reais

1. Aprovar ou ajustar a frase central e a apresentação de OLI como marca de atuação.
2. Validar o recorte inicial de públicos; não há preço, pacote ou promessa comercial publicados.
3. Conferir o preview em celular real e tablet antes da publicação definitiva.
4. Se necessário, fornecer ativo oficial da OLI para futura integração visual. Este rascunho usa apenas menção textual, sem desenhar um novo logo.
5. A imagem social original foi preservada; avaliar eventual nova capa após aprovação do posicionamento.

## Próxima ação autorizada

Publicar e verificar apenas o preview da branch. Não integrar à main nem promover o deploy sem aprovação do rascunho.
