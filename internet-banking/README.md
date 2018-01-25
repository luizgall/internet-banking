# NG Banking Line

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Requisitos

NodeJS instalado na última versão, MongoDB, AngularCLI

## Passo a passo da instalação do ambiente

* Primeiro clonem o repositório e dentro dele executem o código na linha de comando:

..* `npm install` (para rodar as dependências do projeto)

* Depois, rode o MongoDB. É preciso ir até a pasta onde você instalou o MongoDB, acessar a pasta .bin e rodar o comando:

..* `mongod`

* Para iniciar o servidor, vá até a pasta server (..\internet-banking\src\server) e rode o seguinte comando:

..* `nodemon app.js`

* Por último, execute:

..* `ng serve` (Irá abrir o App na porta do servidor que aparecerá na linha de comando ("localhost:8000" por exemplo))

**Obs:** É necessário que os três comandos (mongod, nodemon app.js e ng serve estejam rodando em janelas diferentes da linha de comando).


**ATENÇÃO** "Sempre que houver mudança na seed, é necessário resetar o banco de dados"