# Guia de estilo e padrões de código - Beirando App

## 1. Comentário e código
- Todo o código deve ser escrito em inglês, incluindo comenários, variáveis, funções, etc.
- Comentários devem preferencialmente explicar o "porquê" do código, quando necessário, e não o que o código faz (todos já sabemos programar).
- Prefira código legível do que código compacto.

## 2. Estrutura de pastas
- `/api`: Módulos e rotas para comunicação com a API.
- `/assets`: Imagens, fontes e outros arquivos estáticos.
- `/screens`: Telas do aplicativo.
- `/styles`: Estilos globais e tema.
- `/utils`: Funções utilitárias.

## 3. Convenções de nomenclatura
- **Variáveis e Funções:** `camelCase`
- **Classes, Métodos e Componentes React:** `PascalCase`
- **Constantes:** `UPPER_SNAKE_CASE`
- **Pastas e arquivos:** `snake_case`

## 4. Nomenclatura de branches
- `feature/nome-da-branch`: Branch para desenvolver novas funcionalidades.
- `experiment/nome-da-branch`: Branch para fazer testar funcionalidades ou soluções que não necessáriamente irão para a dev.
- `bugfix/nome-da-branch`: Branch para correção de erros.

## 5. Nomenclatura de commits
Não economizem commits, dessa forma é sempre possível voltar para um estado passado do código, como um checkpoint.
- `feat: descrição do commit`: Padrão para adição de novas funcionalidades.
- `fix: descrição do commit`: Padrão para correção de problemas.

