# tv-guide

This tv guide uses the tv maze api to get back a list of shows. The shows are sorted in genre and rating (with highest rating at the top), in horizontal list. When selecting a show, the user is shown a simple details page about that tv show.

## npm version used in development
11.1.0

## node version used in development
23.8.0

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

## Architectural setup

- This project uses vue 3 with the composition api and het setup() hook.
- Localhost is served using vite in its standard setup.
- Unit testing is done using vitest.

