# Portfólio pessoal — Lucas de Oliveira Andrade

Portfólio pessoal de carreira de Lucas de Oliveira Andrade. O site apresenta uma trajetória iniciada em 2010 dentro da operação real de empresas, conectando vendas, gestão, marketing, consultoria, direção criativa, conteúdo e experiências digitais.

## Estrutura

- home cinematográfica com apresentação pessoal, trajetória, experiências, parcerias, competências e impacto social;
- cards de carreira com dados centralizados em `app/data/career.ts`;
- página dedicada para cada experiência em `/career/[slug]`;
- galeria separada de trabalhos visuais em `/cases` e `/cases/[slug]`;
- dados visuais centralizados em `app/data/cases.ts`;
- galeria de materiais reais e links para projetos publicados;
- layout responsivo em PT/EN/RU;
- rotas exportadas estaticamente e compatíveis com Vercel e Sites.

## Experiências e trabalhos

As experiências profissionais, consultorias, projetos e marcas autorais usam um modelo próprio. Os trabalhos visuais continuam preservados como arquivo editorial separado, com selos explícitos para projetos realizados, consultorias, conceitos e trabalhos em desenvolvimento.

Períodos, resultados, cargos, parcerias ou métricas não confirmados não são publicados.

## Desenvolvimento

Requisitos: Node.js `>=22.13.0`.

```bash
npm ci
npm run dev
```

## Verificação

```bash
npm run build
```

## Deploy

- Vercel: deploy automático do projeto existente a partir da branch `main`.

Nenhuma chave ou segredo é armazenado no repositório.
