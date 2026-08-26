# Portfólio OLI

Site comercial da OLI Marketing Digital, criado para apresentar trabalhos por empresa e transformar o portfólio em uma ferramenta de prospecção.

## Estrutura

- home comercial com posicionamento, serviços, processo, impacto social e CTA;
- seção editorial `Cases.` com todos os projetos disponíveis;
- página dedicada para cada cliente em `/cases/[slug]`;
- dados centralizados em `app/data/cases.ts`;
- galeria de materiais reais e links para projetos publicados;
- layout responsivo e rotas estáticas compatíveis com Vercel e Sites.

## Cases publicados no portfólio

1. GRU KPOP Anime
2. Studio E
3. Rico Games
4. Josucas Eletrônicos
5. Manifesto Bar
6. Metro Case
7. Oliveira Transportes
8. Score Business School
9. Eletrotech ISA
10. Dona Girafa
11. Spolpas

Projetos ainda em desenvolvimento são identificados dessa forma; o site não usa métricas ou resultados inventados.

## Desenvolvimento

Requisitos: Node.js `>=22.13.0`.

```bash
npm ci
npm run dev
```

## Verificação

```bash
npm run lint
npm run build
npm run build:sites
node --test tests/*.test.mjs
```

## Deploy

- Vercel: deploy automático a partir da branch `main`.
- Sites: publicação pelo ciclo de checkpoint e deploy configurado em `.openai/hosting.json`.

Nenhuma chave ou segredo é armazenado no repositório.
