# Next Level Week 2 - RocketSeat

## Dia 1

Criar projeto Proffy usando o modelo **mobile first**, em que é construído primeiramente para acesso através de celulares, para então adequar a visualização quando acessado por dispositivos com telas maiores, como por exemplo computadores e tablets.

### Ambiente de desenvolvimento

- SO: Windows 10 + Ubuntu App
- IDE: Visual Studio Code
- layout: figma.com
  - arquivos [Proffy_Mobile](Proffy_Mobile.fig) e [Proffy_Web](Proffy_Web.fig)

### Criar o projeto react

`yarn create react-app web --template typescript`

ou

`[] npx create-react-app web --template typescript`

inicia a criação do projeto:

```
Creating a new React app in /mnt/c/git/next-level-week2/web.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template-typescript...
...
Created git commit.

Success! Created web at /mnt/c/git/next-level-week2/web
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd web
  yarn start

Happy hacking!
```

### Adicionar fontes do Google

Adicionar a partir de fonts.google.com:

- Archivo regular e bold
- Poppins regular

Passos:

1. Abrir fonts.google.com
1. Buscar pela fonte, e selecionar os estilos selecionados
1. Visualizar as famílias de fonte selecionadas
1. _Embed_
1. Copiar a tag _link_
1. Usar no CSS

### Adicionar pacote para navegar entre as páginas

`yarn add react-router-dom`

Instalar dependência somente para desenvolvimento:

`yarn add @types/react-router-dom -D`

Este pacote navega entre as páginas baseado no endereço.

### Criar páginas

- página inicial: landing page
- Estudar => lista de professores: teacher list
- Ensinar => cadastro de professor: teacher form
