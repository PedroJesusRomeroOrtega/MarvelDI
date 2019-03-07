# MarvelDI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.
It uses [Bulma CSS framework](https://bulma.io/).

I used this app to practice with dependency injection.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build to [Github pages](https://pedrojesusromeroortega.github.io/MarvelDI)

``` bash
npm run build-gh
npx angular-cli-ghpages --dir=dist/MarvelDI
```

## Application View (generated with [ngrev](https://github.com/mgechev/ngrev))

![ngrev image](docs/images/application-view.png)

## Dependency injection explanation

![old way DI](https://g.gravizo.com/source/svg?https://raw.githubusercontent.com/PedroJesusRomeroOrtega/MarvelDI/master/docs/diagrams/old-way-DI.plantuml)

![new way DI](https://g.gravizo.com/source/svg?https://raw.githubusercontent.com/PedroJesusRomeroOrtega/MarvelDI/master/docs/diagrams/new-way-DI.plantuml)

> Bubling up throught the injector tree until it reaches the root injector

## Eager modules

### AppModule

### AppRoutingModule

### CoreModule

#### CredentialsService

It will be instantiated when _ComicsService_ or _CharactersService_ are instantiated.

* Global singleton.
* Lazy.

#### HttpErrorHandler

It will be instantiated when _ComicsService_ or _CharactersService_ are instantiated.

* Global singleton.
* Lazy.

#### MessageService

It will be instantiated with CoreModule.
Is better to use providein:'root' in messageService.

* Global singleton.
* Eager.
* No treeshake.

### SharedModule

## Lazy modules

### ComicsModule

#### ComicService

provideIn: ComicsServiceModule.
It will be instantiated when ComicsComponent load.
We can´t used ComicsModule directly because it generates circular dependencys. That´s why we use _ComicsServiceModule.

* Singleton in ComicsModule.
* Not accesible from another module

### CharactersModule

#### CharacterService

providedIn: 'root'.
It will be instantiated when CharactersComponent load.

* Global singleton
* Lazy until a eager Component instantiate it.

#### CharactersComponent

_MessageService_ has it´s own instance for this component using _providers_.
In this way the opinions are particular to this component, not shared with Comics.
Try to comment to see that all opinions are shown without taking into account if you are in characters or comics.
