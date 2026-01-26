# Tutorial: Adicionando Novos Cases

Este guia explica como adicionar novos cases de sucesso ao site da Mira Marketing.

---

## Passo 1: Editar o arquivo de dados

Abra o arquivo `src/data/cases.json`. Este arquivo contém todos os cases do site em formato JSON. Para adicionar um novo case, insira um novo objeto dentro do array `cases`, seguindo a estrutura abaixo:

O campo `id` é o identificador único do case e será usado na URL (exemplo: `/pt/cases/nome-do-projeto`). Use sempre letras minúsculas e hífens no lugar de espaços.

O campo `image` é a imagem que aparece no card da home. O campo `heroImage` é a imagem principal da página do case. O campo `solutionImage` é a imagem que aparece na seção "Nossa Solução".

O campo `projectLink` é o link externo para o projeto (site, Instagram, LinkedIn, etc).

Os campos `name`, `description`, `heroDescription`, `problem`, `solution` e `resultsDescription` devem conter as versões em português (`pt`) e espanhol (`es`).

O campo `solutionPoints` é um array com os pontos principais da solução implementada, também em português e espanhol.

O campo `results` é um array com até 4 métricas de resultado. Cada métrica tem um `number` (o valor) e um `label` com as traduções.

O campo `tags` é um array com as categorias do projeto (exemplo: Branding, Digital, SEO).

Exemplo de estrutura:
```json
{
  "id": "nome-do-projeto",
  "image": "/cases/nome-do-projeto.jpg",
  "heroImage": "/cases/nome-do-projeto-hero.jpg",
  "solutionImage": "/cases/nome-do-projeto-solution.jpg",
  "projectLink": "https://linkdoprojeto.com",
  "name": {
    "pt": "Nome do Projeto",
    "es": "Nombre del Proyecto"
  },
  "description": {
    "pt": "Descrição curta para o card",
    "es": "Descripción corta para el card"
  },
  "heroDescription": {
    "pt": "Descrição completa do projeto",
    "es": "Descripción completa del proyecto"
  },
  "problem": {
    "pt": "Descrição do problema do cliente",
    "es": "Descripción del problema del cliente"
  },
  "solution": {
    "pt": "Descrição da solução implementada",
    "es": "Descripción de la solución implementada"
  },
  "solutionPoints": {
    "pt": ["Ponto 1", "Ponto 2", "Ponto 3"],
    "es": ["Punto 1", "Punto 2", "Punto 3"]
  },
  "resultsDescription": {
    "pt": "Resumo dos resultados alcançados",
    "es": "Resumen de los resultados alcanzados"
  },
  "results": [
    { "number": "+300%", "label": { "pt": "Leads", "es": "Leads" } },
    { "number": "R$2M", "label": { "pt": "Faturamento", "es": "Facturación" } }
  ],
  "tags": ["Branding", "Digital"]
}
```

---

## Passo 2: Adicionar as imagens

Coloque as imagens do case na pasta `public/cases/`. São necessárias 3 imagens:

A primeira imagem é `nome-do-projeto.jpg` com tamanho recomendado de 800x600 pixels. Esta imagem aparece no card da seção de cases na home.

A segunda imagem é `nome-do-projeto-hero.jpg` com tamanho recomendado de 1200x800 pixels. Esta imagem aparece no hero da página individual do case.

A terceira imagem é `nome-do-projeto-solution.jpg` com tamanho recomendado de 1200x800 pixels. Esta imagem aparece na seção "Nossa Solução".

Importante: o nome dos arquivos de imagem deve corresponder exatamente ao `id` definido no JSON.

---

## Passo 3: Testar

Após fazer todas as alterações, reinicie o servidor de desenvolvimento com o comando `npm run dev`.

Acesse a página do novo case em português: `http://localhost:4321/pt/cases/nome-do-projeto`

Acesse a página do novo case em espanhol: `http://localhost:4321/es/cases/nome-do-projeto`

Verifique se todas as informações estão corretas e se as imagens estão carregando.

---

## Estrutura de arquivos - Cases
```
src/
  data/
    cases.json              # dados de todos os cases
  i18n/
    pt/
      casePage.json         # textos fixos da página (PT)
    es/
      casePage.json         # textos fixos da página (ES)
  pages/
    pt/
      cases.astro           # página de listagem (PT)
      cases/
        [slug].astro        # template da página (PT)
    es/
      cases.astro           # página de listagem (ES)
      cases/
        [slug].astro        # template da página (ES)
public/
  cases/
    nome-do-projeto.jpg           # imagem do card
    nome-do-projeto-hero.jpg      # imagem do hero
    nome-do-projeto-solution.jpg  # imagem da solução
```

---

## Checklist - Cases

Antes de publicar, verifique se você completou todos os passos:

1. Adicionou o objeto completo no arquivo `src/data/cases.json`
2. Colocou as 3 imagens na pasta `public/cases/`
3. Testou a página em português e espanhol
4. Verificou se o card aparece na home

---

## Dicas - Cases

Use no máximo 4 métricas no campo `results` para manter o layout equilibrado.

Use no máximo 5 pontos no campo `solutionPoints` para não sobrecarregar a seção.

O campo `projectLink` aceita qualquer URL válida: site, Instagram, LinkedIn, YouTube, etc.

As tags são exibidas no card da home e no hero da página do case.

Mantenha as descrições concisas e objetivas para melhor leitura.

---

## Observações - Cases

Os 3 últimos cases adicionados aparecem automaticamente no menu mobile, abaixo de "Cases". Não é necessário configurar nada extra para isso funcionar.

A ordem dos cases no menu é baseada na posição no array do `cases.json`. O último case adicionado aparece primeiro no menu.

As rotas são geradas automaticamente a partir do `cases.json`. Não é necessário editar os arquivos `[slug].astro` para adicionar novos cases.

---
---

# Tutorial: Adicionando Novos Posts no Blog

Este guia explica como adicionar novos posts ao blog do site da Mira Marketing.

---

## Passo 1: Editar o arquivo de dados

Abra o arquivo `src/data/blog.json`. Este arquivo contém todos os posts do blog em formato JSON. Para adicionar um novo post, insira um novo objeto dentro do array `posts`, seguindo a estrutura abaixo:

O campo `id` é o identificador único do post e será usado na URL (exemplo: `/pt/blog/titulo-do-post`). Use sempre letras minúsculas e hífens no lugar de espaços.

O campo `image` é a imagem que aparece no card e no topo do post.

O campo `date` é a data de publicação no formato `YYYY-MM-DD` (exemplo: `2025-01-20`).

Os campos `name`, `excerpt` e `content` devem conter as versões em português (`pt`) e espanhol (`es`).

O campo `tags` é um array com as categorias do post (exemplo: Marketing, Vendas, Branding).

Exemplo de estrutura:
```json
{
  "id": "titulo-do-post",
  "image": "/blog/titulo-do-post.jpg",
  "date": "2025-01-20",
  "name": {
    "pt": "Título do Post em Português",
    "es": "Título del Post en Español"
  },
  "excerpt": {
    "pt": "Resumo curto do post que aparece no card. Máximo de 2-3 linhas.",
    "es": "Resumen corto del post que aparece en el card. Máximo de 2-3 líneas."
  },
  "content": {
    "pt": "Conteúdo completo do post em português. Pode ser um texto longo com vários parágrafos.",
    "es": "Contenido completo del post en español. Puede ser un texto largo con varios párrafos."
  },
  "tags": ["Marketing", "Vendas", "Estratégia"]
}
```

---

## Passo 2: Adicionar a imagem

Coloque a imagem do post na pasta `public/blog/`. É necessária apenas 1 imagem:

A imagem é `titulo-do-post.jpg` com tamanho recomendado de 1200x800 pixels. Esta imagem aparece no card da listagem e no topo da página do post.

Importante: o nome do arquivo de imagem deve corresponder exatamente ao `id` definido no JSON.

---

## Passo 3: Testar

Após fazer todas as alterações, reinicie o servidor de desenvolvimento com o comando `npm run dev`.

Acesse a página do novo post em português: `http://localhost:4321/pt/blog/titulo-do-post`

Acesse a página do novo post em espanhol: `http://localhost:4321/es/blog/titulo-do-post`

Verifique se todas as informações estão corretas e se a imagem está carregando.

---

## Estrutura de arquivos - Blog
```
src/
  data/
    blog.json               # dados de todos os posts
  i18n/
    pt/
      blog.json             # textos fixos da seção (PT)
    es/
      blog.json             # textos fixos da seção (ES)
  components/
    Blog.astro              # componente da seção de blog
    BlogCard.astro          # componente do card de post
  pages/
    pt/
      blog.astro            # página de listagem (PT)
      blog/
        [slug].astro        # template da página (PT)
    es/
      blog.astro            # página de listagem (ES)
      blog/
        [slug].astro        # template da página (ES)
public/
  blog/
    titulo-do-post.jpg      # imagem do post
```

---

## Checklist - Blog

Antes de publicar, verifique se você completou todos os passos:

1. Adicionou o objeto completo no arquivo `src/data/blog.json`
2. Colocou a imagem na pasta `public/blog/`
3. Testou a página em português e espanhol
4. Verificou se o card aparece na listagem do blog

---

## Dicas - Blog

A data deve estar no formato `YYYY-MM-DD` para ser formatada corretamente em cada idioma.

O campo `excerpt` deve ser curto (2-3 linhas) pois aparece no card com limite de texto.

O campo `content` pode ser longo e será exibido completo na página do post.

As tags são exibidas no topo da página do post.

Mantenha os títulos claros e objetivos para melhor SEO.

---

## Observações - Blog

Os posts são ordenados pela ordem no array do `blog.json`. Os primeiros posts do array aparecem primeiro na listagem.

As rotas são geradas automaticamente a partir do `blog.json`. Não é necessário editar os arquivos `[slug].astro` para adicionar novos posts.

Os cards de blog têm o mesmo estilo visual dos cards de cases, com stroke gradiente e animações de fade-in.