# Loan App Playwright Tests

Автотесты критического пути для [Loan App](https://loan-app.tallinn-learning.ee/small-loan), написанные на Playwright и TypeScript.

## Требования

- Node.js 22 или новее
- npm

## Установка

Установите зависимости из lockfile:

```bash
npm ci
```

Установите браузер Chromium, который используют desktop и mobile проекты:

```bash
npx playwright install chromium
```

## Запуск тестов

Запустить все тесты для Desktop Chrome и Mobile Chrome:

```bash
npm test
```

Запустить только тесты для Desktop Chrome:

```bash
npm run test:desktop
```

Запустить только тесты для Mobile Chrome (профиль Pixel 7):

```bash
npm run test:mobile
```

Запустить тесты в видимом окне браузера:

```bash
npm run test:headed
```

По умолчанию тесты запускаются против `https://loan-app.tallinn-learning.ee`. Чтобы использовать другой стенд, задайте переменную `BASE_URL` перед запуском.

PowerShell:

```powershell
$env:BASE_URL = 'https://example.test'
npm test
```

## Отчёт Playwright

После прогона откройте HTML-отчёт командой:

```bash
npm run report
```

Playwright сохраняет отчёт в папку `playwright-report`. При падении теста в отчёте доступны скриншоты и видео; trace записывается при первом повторном запуске теста в CI.

## Структура проекта

```text
pom/
  atoms/       # атомы: локаторы и действия с элементами
  organisms/   # композиции атомов
  pages/       # Page Objects и BasePage
tests/         # Playwright-спецификации
```
