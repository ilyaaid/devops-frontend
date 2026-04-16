# Шаблон пустого проекта

Поддержка:

- Yarn PnP + Zero-installs
- React
- TypeScript
- Webpack
- CSS-in-JS с библиотекой Vanilla-extract в режиме Zero-runtime (генерирует CSS на стадии сборки)
- ESLint (разбит на пресеты) + Prettier

## Настройка IDE

Стратегия кеширования Yarn в проекте: [Zero-installs](https://yarnpkg.com/features/caching#zero-installs). То есть исползующиеся пакеты проекта будут храниться в репозитории. Это избавляет от выполнения команды установки пакетов.

В проекте используется Yarn PnP, поэтому необходимо настроить редактор ([инструкция для VSCode](https://yarnpkg.com/migration/pnp#editor-support))

## Разработка и сборка

Для разработки запустить:

```sh
yarn dev
```

Сборка:

```sh
yarn build
```
# devops-frontend
