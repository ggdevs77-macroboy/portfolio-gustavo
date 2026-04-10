import os

# 1. Cria a pasta das fontes (src)
os.makedirs('src', exist_ok=True)

# 2. Cria o HTML principal (raiz)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write('''<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio | Analista de Sistemas</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>''')

# 3. Cria a configuração do Tailwind (raiz)
with open('tailwind.config.js', 'w', encoding='utf-8') as f:
    f.write('''export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { hacker: "#10b981", dark: "#0a0a0a" }
    },
  },
  plugins: [],
}''')

# 4. Cria a configuração do PostCSS (raiz)
with open('postcss.config.js', 'w', encoding='utf-8') as f:
    f.write('''export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}''')

# 5. Cria o arquivo de entrada do React (src/main.jsx)
with open('src/main.jsx', 'w', encoding='utf-8') as f:
    f.write('''import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);''')

# 6. Cria o CSS com o Tailwind (src/index.css)
with open('src/index.css', 'w', encoding='utf-8') as f:
    f.write('@tailwind base;\n@tailwind components;\n@tailwind utilities;')

print("✅ Estrutura de arquivos criada! Falta apenas o App.jsx.")