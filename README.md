# Ajudai (React Native)

Projeto migrado do React Web para React Native.

## Scripts

- `npm start` — inicia o Metro Bundler
- `npm run android` — executa no Android
- `npm run ios` — executa no iOS (MacOS)

## Estrutura

- `App.js`: ponto de entrada
- `src/`: código fonte
- `assets/`: imagens e recursos

## Estilos Globais

Centralizamos estilos reutilizáveis em `src/styles/global.js`.

- Importação: `import g, { colors, spacing, radius } from "../styles/global";`
- Use-os compondo com `StyleSheet.create` no arquivo local, por exemplo:

```
const localStyles = StyleSheet.create({
	container: { ...g.container },
	title: { ...g.title },
	card: { ...g.card },
	button: { ...g.button, ...g.buttonPrimary },
	buttonText: { ...g.buttonText, ...g.buttonTextPrimary },
});
```

Tokens disponíveis: `colors`, `spacing`, `radius`.
