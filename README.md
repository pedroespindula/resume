# Resume

Resume rendering in ReactJS made by @pedroespindula. It renders a `info.json` that is stored in `src/lib/` directory.

![](https://github.com/pedroespindula/resume/raw/master/Pedro%20Esp%C3%ADndula.png)

## Deploy

O deploy é automatizado via GitHub Actions (`.github/workflows/deploy.yml`):

- Todo push na `main` gera o build e publica na branch `gh-pages`, servida em https://pedro.espindula.me.
- Pull requests para a `main` rodam apenas o build, para validar as mudanças antes do merge.
- Também é possível disparar o deploy manualmente pela aba **Actions** (`workflow_dispatch`).

O deploy manual via `npm run deploy` continua disponível.
