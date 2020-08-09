# Next Level Week 2 - RocketSeat

Criação do projeto _Proffy_ que permite o cadastro de aulas.

Evolução dos dias:

1. Desenvolvimento do front-end
1. Desenvolvimento do back-end
1. Finalizando o front-end, conectado ao back-end
1. Desenvolvimento do mobile
1. Finalizadno o mobile, conectado ao back-end

## Dia 1: Front-end

Criar o projeto front-end _Proffy_ usando o modelo **mobile first**, em que é construído primeiramente para acesso através de celulares, para então adequar a visualização quando acessado por dispositivos com telas maiores, como por exemplo computadores e tablets.

### Ambiente de desenvolvimento

- SO: Windows 10 + Ubuntu App
  - todos os comandos yarn e install devem ser feitos pelo Ubuntu
- IDE: Visual Studio Code
- layout: figma.com
  - arquivos [Proffy_Mobile](Proffy_Mobile.fig) e [Proffy_Web](Proffy_Web.fig)

### Criar o projeto react

`yarn create react-app web --template typescript`

ou

`[] npx create-react-app web --template typescript`

inicia a criação do projeto, gerando o log no terminal:

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

## Dia 2: Back-end

Criar o projeto do servidor com:

- typescript
- configurações typescript (tsc)
- reinicia o servidor automaticamente após alterações no código (ts-node-dev)
- banco de dados relacional (sqlite3)
- construtor de consultas SQL no formato javascript (knex)
- permitir que aplicações em endereços diferentes acessem esta API (cors)

```
mkdir server
cd server
yarn init -y

yarn add typescript -D

yarn tsc --init

yarn add ts-node-dev -D

yarn add express

yarn add @types/express -D

yarn add knex sqlite3

yarn add cors

yarn add @types/cors -D
```

Alterar a versão alvo javascript do typescript para a versão que o NodeJS entende (es2017).

Adicionar script para rodar o servidor conforme desejado:

`"start": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"`

### Base de dados

Adicionar script para criar o esquema na base de dados:

`"knex:migrate": "knex --knexfile knexfile.ts migrate:latest"`

Adicionar script para desfazer as alterações na base de dados:

`"knex:migrate:rollback": "knex --knexfile knexfile.ts migrate:rollback"`

Adicionar a extensão _Sqlite_ no VSCode para poder acessar a base de dados para poder verificar as ações executadas durante o desenvolvimento.

Clique com o botão direito no arquivo _database.sqlite_ e escolha _Open database_. Será aberto no VSCode Explorer a seção _SQLITE EXPLORER_.

> Caso ocorra o problema _"Failed to open database: Database failed to open: SQLite process failed to start. The argument 'file' cannot be empty. Received."_:
>
> 1.  Adicione nas configurações JSON do VSCode a linha
>
>     `"sqlite.logLevel": "DEBUG"`
>
> 1.  Anote o caminho do arquivo (exemplo: `/home/.../sqlite-v3.26.0-linux-x64`)
> 1.  Abra o terminal e adicione permissão para execução deste arquivo através do o comando
>
>     `chmod +x <caminho completo do arquivo>`

Após criar os arquivos para criar as tabelas na base de dados (migrations), executar:

`yarn knex:migrate`

### Criar as rotas

[API](../server/API.md)

## Dia 3: Finalizando o front-end

### Finalizar páginas

- Ensinar => cadastro de professor: teacher form
- Estudar => lista de professores: teacher list
- Componentes:
  - Input
  - TextArea
  - Select
- Link para whatsapp

### Conectar com o back-end

- cliente REST (axios)
- useState
- useHistory

```
yarn add axios
```

## Dia 4: Mobile

É necessário que o Expo Client esteja instalado no aparelho celular ou que tenha um emulador instalado.

- O emulador precisa de uma máquina mais parruda, com no mínimo 8GB de memória RAM e um processador core-i3 mais recente ou core-i5 mais antigo.

Verificar se o expo-cli deve ser atualizado.

> Para atualizar, o faça pelo Windows PowerShell. Mas o projeto deve ser criado pelo Ubuntu.

Criar o projeto mobile:

`expo init mobile`

> Selecionar template \*blank (TypeScript)

Entrar no diretório do projeto: `cd mobile`

Abrir o expo: `yarn start`

Conectar o celular na mesma rede wi-fi do computador, abrir o Expo no celular e ler o QRCode para baixar a aplicação. A aplicação será atualizada a cada alteração nos arquivos.

> O comando `expo init` inicia o projeto como um projeto _git_. Se for colocar dentro de um _monorepo_, será necessário apagar o diretório `./git` de dentro do diretório `mobile`.

### Instalar fontes

Usando [Expo Google fonts](https://github.com/expo/google-fonts). Por exemplo, para instalar o pacote que carrega as fontes e também as fontes _archivo_ e _poppins_:

`expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins`

### Particularidades do ReactNative

- Cada estilo no seu elemento. Não há herança de estilos CSS.

  > A exceção a essa regra é a tag Text.
  > Pode haver uma Text dentro da outra, então aquela herda desta.

- Não pode usar hifen nos atributos, tem que usar camelCase, e os valores entre aspas.
- Não tem grid, não tem gradiente, não lê imagens em svg.
- No mobile há conceito de densidade de pixel, pois depende do dispositivo. Por isso há mais de um arquivo para a mesma imagem. É necessário lembrar de exportar 3 arquivos de diferentes tamanos para a mesma imagem.
- Todos os elementos vem com display:flex por padrão.
- No ReactNative o flexDirection é column por padrão.

### Criar páginas

- landing
- dar aulas
- estudar
- lista de professores
- favoritos

### Navegação

De acordo com https://reactnavigation.org/docs/getting-started/

```
yarn add @react-navigation/native
```

No [expo](https://reactnavigation.org/docs/getting-started/#installing-dependencies-into-an-expo-managed-project):

```
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

Tipos:

- stack: em pilha, quando há um botão de voltar
- abas
- drawer: menu hamburguer

Instalar stack e abas:

```
yarn add @react-navigation/stack

yarn add @react-navigation/bottom-tabs
```

## Dia 5: Finalizando mobile, conectado ao back-end

Páginas de estudo:

- lista de professores
- lista de professores favoritos

### Conectar com o back-end

- cliente REST (axios)

```
yarn add axios
```

- whatsapp deep linking

- expo async storage para controle dos favoritos

```
expo install @react-native-community/async-storage
```
