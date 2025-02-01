<h1>Todo App</h1>

<div align="center">
	<img src="https://github.com/user-attachments/assets/c04dba06-f4b8-485f-b8d0-5c8ccea8eaef" />
</div>

---

![Frame 2](https://github.com/user-attachments/assets/fd3febc5-2df8-44c4-800a-1246128a088d)

<h1>Technologies</h1>

![React](https://ziadoua.github.io/m3-Markdown-Badges/badges/React/react2.svg)
![TypeScript](https://ziadoua.github.io/m3-Markdown-Badges/badges/TypeScript/typescript1.svg)
![Redux](https://ziadoua.github.io/m3-Markdown-Badges/badges/Redux/redux1.svg)
![RTK Query](https://pouch.jumpshare.com/preview/EPynaohHPfxdU_Tg_C_9BwrbQy_b9OWLItpg99XtXlf3h3KadbRQwI8Q8Gtfb5Wy_EAB_U0cRr0bl7YrexV9GqBPyILTCSV7h8axZIyNUyY)
![TailwindCSS](https://ziadoua.github.io/m3-Markdown-Badges/badges/TailwindCSS/tailwindcss2.svg)
![ReactRouter](https://pouch.jumpshare.com/preview/nonjL1vVCNUR7LL7hG120mfc2SWYCX0iLx2BpJN53X3eemAr7euITWVuTbXpcV28_EAB_U0cRr0bl7YrexV9GkGlfgkq85NJIZktRTGkUO0)
![ViteJS](https://ziadoua.github.io/m3-Markdown-Badges/badges/ViteJS/vitejs1.svg)
![Frame 5](https://github.com/user-attachments/assets/08da467d-4533-4ba7-94d3-c0ec24ab8ce5)
![Frame 3](https://github.com/user-attachments/assets/de9b79c6-4c7c-4485-9690-37c96eac5ae7)
![Frame 4](https://github.com/user-attachments/assets/4fcf22c7-5e32-40b5-bdcc-0a09571236ea)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
