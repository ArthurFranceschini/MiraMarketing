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

## Passo 3: Registrar o slug nas rotas

Para que a página do case seja gerada, é necessário registrar o `id` do case nos arquivos de rota.

Abra o arquivo `src/pages/pt/cases/[slug].astro` e localize a função `getStaticPaths`. Adicione o novo `id` no array `cases`:
```javascript
export function getStaticPaths() {
  const cases = [
    { id: "projeto-alpha" },
    { id: "projeto-beta" },
    { id: "projeto-gamma" },
    { id: "nome-do-projeto" }  // novo case
  ];
  
  return cases.map(c => ({
    params: { slug: c.id }
  }));
}
```

Repita o mesmo processo no arquivo `src/pages/es/cases/[slug].astro`.

---

## Passo 4: Testar

Após fazer todas as alterações, reinicie o servidor de desenvolvimento com o comando `npm run dev`.

Acesse a página do novo case em português: `http://localhost:4321/pt/cases/nome-do-projeto`

Acesse a página do novo case em espanhol: `http://localhost:4321/es/cases/nome-do-projeto`

Verifique se todas as informações estão corretas e se as imagens estão carregando.

---

## Estrutura de arquivos
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
      cases/
        [slug].astro        # template da página (PT)
    es/
      cases/
        [slug].astro        # template da página (ES)
public/
  cases/
    nome-do-projeto.jpg           # imagem do card
    nome-do-projeto-hero.jpg      # imagem do hero
    nome-do-projeto-solution.jpg  # imagem da solução
```

---

## Checklist

Antes de publicar, verifique se você completou todos os passos:

1. Adicionou o objeto completo no arquivo `src/data/cases.json`
2. Colocou as 3 imagens na pasta `public/cases/`
3. Registrou o id em `src/pages/pt/cases/[slug].astro`
4. Registrou o id em `src/pages/es/cases/[slug].astro`
5. Testou a página em português e espanhol
6. Verificou se o card aparece na home

---

## Dicas

Use no máximo 4 métricas no campo `results` para manter o layout equilibrado.

Use no máximo 5 pontos no campo `solutionPoints` para não sobrecarregar a seção.

O campo `projectLink` aceita qualquer URL válida: site, Instagram, LinkedIn, YouTube, etc.

As tags são exibidas no card da home e no hero da página do case.

Mantenha as descrições concisas e objetivas para melhor leitura.

Os 3 últimos cases adicionados aparecem automaticamente no menu mobile, abaixo de "Cases". Não é necessário configurar nada extra para isso funcionar.

A ordem dos cases no menu é baseada na posição no array do `cases.json`. O último case adicionado aparece primeiro no menu.