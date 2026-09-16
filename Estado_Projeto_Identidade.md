# Lucas + OLI — rascunho de posicionamento v03

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

“Estratégia e marketing para games, tecnologia e cultura geek e pop.”

Lucas permanece o sujeito da narrativa e a origem da experiência. A OLI é apresentada como a marca que organiza sua atuação. A proposta não atribui à OLI a fundação em 2010, equipe, contratos, resultados ou clientes próprios.

Tecnologia aparece ao lado de games, especialmente em varejo, eletrônicos, celulares, acessórios, presença digital e comunicação de serviços especializados. A pedido de Lucas, cultura geek e pop passa a ser um terceiro público explícito, incluindo negócios de colecionáveis, anime, mangá, quadrinhos, K-pop e entretenimento. São públicos de interesse, não alegações de projetos já realizados em cada categoria. Não há alegação de especialização universal em engenharia, programação, hardware ou desenvolvimento de jogos.

## Apontamentos: o que muda e por quê

| Área | Mudança | Motivo |
|---|---|---|
| Hero | Posicionamento games + tecnologia + cultura geek e pop, experiência na Rico e ligação com OLI | Explicar rapidamente foco, base profissional e forma de atuação |
| Trajetória | “Antes da campanha, o balcão.” e progressão desde 2010 | Diferenciar vivência operacional de uma oferta apenas visual |
| Lucas + OLI | Nova seção, com três públicos prioritários | Integrar as duas identidades sem aparência de agência genérica |
| Experiências da home | Rico, Toy Show, Josucas, Divertida Geek | Quatro provas com relação direta ou adjacente ao foco; Metro continua no índice e nos projetos |
| Projetos da home | Rico, GRU KPOP Anime, Josucas, Metro | Mostrar os três mercados com material existente; Eletrotech ISA continua no arquivo |
| Índices | Novo foco primeiro; outros setores preservados | Mudar a hierarquia, não apagar a trajetória |
| Parcerias | Relações contextualizadas na Rico; não clientes da OLI | Evitar transferência indevida de credenciais |
| Como contribuo | Oferta, operação, conteúdo e presença digital | Conectar competências a necessidades concretas |
| Urly Marketing | Nota compacta com link para a experiência completa | Preservar o compromisso de 10% da renda bruta, sem confundir Urly com OLI |
| Contato e metadados | Linguagem coerente com o novo foco | Concluir a narrativa e manter a identidade pessoal |

## Ativos bloqueados e preservados

- Base grafite/off-white/laranja e enquadramentos preservados. Na v03, Lucas autorizou aproximar a interface de um app gamer/tecnológico discreto, tomando a Rico Games Experience como referência de navegação e organização.
- Nenhum arquivo de imagem removido, substituído ou criado artificialmente.
- Capa do Manifesto sai somente da home. Na v02, GRU KPOP Anime substitui Eletrotech na seleção principal, com o enquadramento individual original. Ambas continuam no arquivo.
- Retrato preservado, com tamanho menor no mobile; focal point intacto.
- Sistema `MediaFrame`: fit, position, scale, inset, limites, frame, overlay, motion e configuração mobile intactos.
- Dez experiências e dez projetos continuam disponíveis. Status de conceito, consultoria e desenvolvimento não foram promovidos.
- Rico Games: 2010–atual. Toy Show: aproximadamente dois anos, sem datas inventadas.
- Urly: marca distinta, com compromisso de 10% da renda bruta para proteção animal.
- Experiências sem confirmação, incluindo música, continuam ocultas.
- Seleção editorial isolada em `app/data/positioning.ts`; carreira não foi convertida em `PortfolioCase`.
- CSS da home consolidado em `editorial-cleanup.css`; header, controles e cards compartilhados em `globals.css`. Regras antigas da hero e do menu suspenso removidas, sem acrescentar mais uma folha de overrides.

## Verificações e limites

- TypeScript e build local: aprovados nas v01/v02; repetidos na v03 antes do deploy.
- Lint: não configurado no projeto. Não declarar como aprovado.
- Regressão automatizada: `node scripts/check-positioning.mjs`, após o build.
- Produção existente: home, índices e vinte rotas internas acessados antes da publicação do rascunho.
- Mobile: regras de 320–430 px revisadas no código; o navegador disponível não oferece alteração de viewport. Validação visual nesses tamanhos e em tablet permanece pendente, sem alegação de teste real.
- Previews anteriores: v01 (`4dddc0a`) e v02 (`b0e78ee`) READY. O acesso sem login foi autorizado por Lucas e testado por link temporário. A v03 usa a mesma branch e terá novo link temporário, sem guardar tokens no repositório.
- Produção: não alterar nesta etapa.

## Pendências reais

1. Aprovar ou ajustar a frase central e a apresentação de OLI como marca de atuação.
2. Validar o recorte inicial de públicos; não há preço, pacote ou promessa comercial publicados.
3. Conferir o preview em celular real e tablet antes da publicação definitiva.
4. Se necessário, fornecer ativo oficial da OLI para futura integração visual. Este rascunho usa apenas menção textual, sem desenhar um novo logo.
5. A imagem social original foi preservada; avaliar eventual nova capa após aprovação do posicionamento.

## Próxima ação autorizada

Publicar e verificar apenas o preview da branch, com acesso temporário sem login já solicitado por Lucas. Não integrar à main nem promover o deploy sem aprovação do rascunho.

## Alterações solicitadas nesta revisão

- 16/09/2026: incluir mercado geek e cultura pop no posicionamento.
- Atualizar hero, públicos da OLI, trajetória, textos de seleção, contato, rodapé e metadados.
- Dar destaque a GRU KPOP Anime nos projetos e Divertida Geek nas experiências, mantendo quatro cards em cada seleção da home.
- Preservar os fatos profissionais, os status de cada trabalho e os tratamentos individuais de mídia.

## v03 — interface de app, autorizada por Lucas

- Referência observada: Rico Games Experience, especialmente barra de navegação, hierarquia dos cards e contraste controlado. Nenhum código ou ativo do outro projeto foi alterado.
- Home em grafite, cards de superfície elevada e acento laranja OLI. Brilho estático discreto em seleção, foco e hover, sem neon espalhado ou loops.
- Header reduzido e navegação inferior persistente com quatro destinos reais: início, trajetória, projetos e contato. Seleção acompanha a rota; contato acompanha a visibilidade da seção na home.
- Navegação compartilhada entre home, índices, vinte páginas internas e 404. Sem menu suspenso ou estado de instalação fictício.
- Áreas de toque confortáveis, safe area do iPhone e espaço no rodapé para a barra não encobrir o fim das páginas. Viewport e theme color definidos sem bloquear zoom.
- Títulos menores e mais legíveis, cards em duas colunas no desktop e uma no celular. Retrato em um bloco compacto no mobile, mantendo seu focal point.
- Ícones pequenos identificam games, tecnologia e cultura pop; não há fotografias novas, carrossel, cursor customizado ou parallax.
- Superfícies claras de leitura nas páginas internas preservadas, com cards e navegação atualizados.
- Verificação automatizada ampliada para destino do atalho de acessibilidade, quatro links da navegação e rota selecionada nos HTML exportados.
- Limite de QA: navegador disponível sem configuração de viewport. Revisão estrutural de mobile realizada; captura real nas larguras 320/360/390/430 px continua pendente.
