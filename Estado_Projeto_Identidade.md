# Lucas + OLI — rascunho de posicionamento v04

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
- Nenhum arquivo de imagem original removido ou criado artificialmente. Na v04, logos e peças reais adicionais passam a compor as capas e galerias.
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

## v04 — capas com marcas e seleção de conteúdo

Solicitação de Lucas: substituir capas pouco representativas pelos logos das empresas e mostrar conteúdos com mais interesse dentro dos projetos. A execução continua na mesma branch e no mesmo PR de rascunho.

- Dez capas de projetos passam a usar logos completos, centralizados, com `contain`, fundo de contraste adequado, sem zoom e com proporção compacta de 2:1. Home, arquivo e cards relacionados usam o mesmo componente.
- Marcas preservadas do acervo: GRU KPOP Anime, Studio E, Josucas Eletrônicos, Metro Case, Oliveira Transportes e Score Business School.
- Rico Games: logo exato v05 aprovado, recebido do Drive. A versão anterior de distribuidora não foi reutilizada.
- Eletrotech ISA: vetor original do pacote de logo v01 aprovado, recebido do Drive.
- Manifesto Bar e Dona Girafa: marcas verificadas nos respectivos sites oficiais. As capas identificam as empresas; os trabalhos de site continuam identificados como conceitos.
- Duas peças adicionais da Rico: Dia do Cliente e convite ao grupo de promoções. Duas da Eletrotech: controle molhado e transporte de console. São arquivos originais do acervo de Lucas; não são prints recriados nem métricas de resultado.
- Conteúdos sociais existentes ganham prioridade nas galerias. Legendas explicam a função de peças da Rico, Eletrotech, GRU, Josucas, Metro e Oliveira.
- Galerias agora permitem abrir o arquivo completo; a hero oferece atalho para os conteúdos e aplicações.
- Na galeria da Josucas, duas cenas genéricas de assistência/atendimento e o logo repetido deixam de ser exibidos. Os arquivos e dados originais permanecem no repositório.
- Na Eletrotech, o painel de feed repetia as peças agora mostradas individualmente. Ele deixa de ser exibido para evitar repetição e favorecer a leitura das duas artes completas; o original permanece preservado.
- Os tratamentos de hero, enquadramentos individuais e páginas de carreira permanecem preservados. Novos materiais têm versões WebP responsivas.
- O logo da Oliveira disponível no acervo tem 150 × 150 px; sua exibição fica limitada ao tamanho original, inclusive no mobile.

### Fontes dos materiais adicionais

- Rico, logo v05: https://drive.google.com/file/d/1tm3aRdGbRhzRAdb7rtOOr6JQ0GlnUy2b/view
- Rico, Dia do Cliente: https://drive.google.com/file/d/14Egy328hBsDyVx4WrCoqrLLZTTi2WEpd/view
- Rico, grupo de promoções: https://drive.google.com/file/d/1HbA2NxJSbFt6_FhvTUBAFNgxV1Q1KuDG/view
- Eletrotech, pacote aprovado: https://drive.google.com/file/d/1eOEQBbRVMT-l3pPQFQuny_j8r6Cn8-LS/view
- Eletrotech, conteúdos originais: “Controle molhado, ação imediata.png” e “Dicas para transportar seu console.png”, acervo Isaiastec de Lucas.
- Manifesto: https://manifestobar.com.br/bar/ — arquivo original https://manifestobar.com.br/bar/wp-content/uploads/2016/11/logo-icone.png
- Dona Girafa: https://donagirafaaventais.com.br/ — arquivo original https://imageswscdn.wslojas.com.br/files/23106/PROD_736964528395.jpg

### Limites da seleção

O Instagram da Rico redirecionou para login, impedindo a captura e a comparação confiável dos posts. A seleção usa materiais próprios e relevantes; não é apresentada como ranking de engajamento. Nenhuma curtida, alcance, comentário ou autoria de terceiros foi atribuída a Lucas. A verificação visual em celular real continua pendente porque o navegador desta sessão não permite alterar o viewport.

### Verificação local v04

- `npm run build`: aprovado, 27 rotas geradas pelo Next.
- `npm run typecheck`: aprovado.
- `node scripts/check-positioning.mjs`: aprovado; 24 páginas HTML, 351 links internos, imagens originais e responsivas, dez capas de marca, destinos das galerias e 23 URLs no sitemap.
- Lint continua sem configuração.
- Deploy: preview automático pela mesma integração GitHub–Vercel; produção permanece em `a52db88fb56492be3312f933262c06167f992e6d`.
- Preview v04: dez logos carregados, dez páginas internas de projetos abertas sem overflow horizontal no desktop, atalhos para as galerias funcionando e abertura da arte em nova aba confirmada. Inspeção visual das capas e dos conteúdos da Rico e Eletrotech realizada. Link temporário sem login aberto com sucesso, sem guardar o token neste arquivo.
