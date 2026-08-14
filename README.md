# Kinoplex — Protótipo de UX

Protótipo navegável em HTML/CSS/JS puro, sem build step. Feito para publicar direto no GitHub Pages.

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub e suba todos os arquivos desta pasta na raiz dele.
2. No repositório: **Settings → Pages → Branch** → selecione `main` (ou `master`) e a pasta `/root`.
3. Salve. Em alguns minutos o GitHub te dá uma URL tipo `https://seu-usuario.github.io/nome-do-repo/`.

Não precisa de nenhuma etapa de build — é só HTML/CSS/JS estático.

## Estrutura

- `index.html` — Home (splash + "Em Cartaz")
- `movie.html` — Fluxo do filme (placeholder — Parte 2)
- `search.html` — Fluxo de busca (placeholder — Parte 3)
- `assets/style.css` — tokens de design e todos os estilos
- `assets/app.js` — dados mock (filmes, cinemas) e ícones compartilhados

## Notas

- Os pôsteres são gradientes placeholder, não imagens reais do filme — como isso fica hospedado publicamente, evitei usar stills protegidos por direito autoral. Se for uma apresentação interna, é só trocar os `background-image` das classes `.poster-a/b/c` por imagens reais.
- Em telas largas (desktop), o app aparece dentro de uma moldura de celular simulada, com barra de status e barra de navegação Android falsas — útil pra apresentar em reunião. Em um celular de verdade, essa moldura some automaticamente e o conteúdo ocupa a tela inteira.
- O badge "★ Em Alta" no filme em destaque substitui o que no print original parecia ser "★ Ação" duplicando a tag de gênero — tratei como inconsistência e troquei por um badge de destaque/tendência com significado próprio.
- Logo real do Kinoplex e fonte Open Sans aplicados a partir do export que você mandou (o zip veio sem 6 das 7 imagens referenciadas — se puder reexportar do Figma com "incluir imagens" marcado, ou me mandar os PNGs, eu ajusto com ainda mais precisão).
