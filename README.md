# 💚 Giovana Wrapped

Uma experiência romântica personalizada inspirada no Spotify Wrapped.

---

## 📁 Estrutura do Projeto

```
giovana-wrapped/
├── index.html
├── style.css
├── script.js
├── README.md
│
├── photos/
│   ├── minha-foto.jpg        ← Sua foto (abre na tela de abertura)
│   ├── foto-dela.jpg         ← Foto dela (abre na tela de abertura)
│   ├── album-cover.jpg       ← Capa do álbum da música (slide 12)
│   │
│   ├── timeline-1.jpg        ← Polaroid 1 (linha do tempo)
│   ├── timeline-2.jpg        ← Polaroid 2
│   ├── timeline-3.jpg        ← Polaroid 3
│   ├── timeline-4.jpg        ← Polaroid 4
│   ├── timeline-5.jpg        ← Polaroid 5
│   │
│   ├── gallery-1.jpg         ← Galeria - foto principal (slide 8)
│   ├── gallery-2.jpg         ← Galeria - miniatura 2
│   ├── gallery-3.jpg         ← Galeria - miniatura 3
│   └── gallery-4.jpg         ← Galeria - miniatura 4
│
└── music/
    └── borboletas.mp3        ← Arquivo de áudio da música
```

---

## 🖼️ Imagens necessárias

| Arquivo | Dimensão recomendada | Uso |
|---------|----------------------|-----|
| `photos/minha-foto.jpg` | 600×800px | Tela de abertura (esquerda) |
| `photos/foto-dela.jpg` | 600×800px | Tela de abertura (direita) |
| `photos/album-cover.jpg` | 400×400px | Slide da música |
| `photos/timeline-1.jpg` a `5.jpg` | 400×300px | Linha do tempo Polaroid |
| `photos/gallery-1.jpg` a `4.jpg` | 800×600px | Galeria |

> **Dica:** As imagens que não existirem aparecem como placeholder com emoji — o site funciona mesmo sem elas.

---

## 🎵 Música

Coloque o arquivo MP3 da música em:
```
music/borboletas.mp3
```

Formatos aceitos: `.mp3`, `.ogg`, `.webm`

> **Atenção:** Por causa de restrições de autoplay dos navegadores, a música inicia automaticamente após o clique no botão "Abrir presente". O usuário pode pausar/retomar tocando no vinil no canto inferior direito.

---

## ✏️ Como personalizar

Abra o arquivo `script.js` e edite o objeto `CONFIG` no topo do arquivo:

```javascript
const CONFIG = {
  nomeEle:  'Filipe',     // ← mude para seu nome
  nomeDela: 'Giovana',    // ← nome dela

  dataNamero:   '2026-04-09',   // ← data do início do namoro
  dataContagem: '2027-04-10',   // ← data alvo da contagem regressiva
  labelContagem:'10/04/2027',   // ← como mostrar essa data

  // Mensagem final completamente editável
  final: {
    mensagem: `Sua mensagem aqui...`,
  },

  // E muito mais — tudo está no objeto CONFIG!
}
```

---

## 🚀 Publicar no GitHub Pages

### Passo 1 — Criar repositório
1. Acesse [github.com](https://github.com) e clique em **New repository**
2. Nome: `giovana-wrapped` (ou qualquer nome)
3. Marque como **Public**
4. Clique em **Create repository**

### Passo 2 — Fazer upload
**Opção A — Interface web:**
1. Clique em **uploading an existing file**
2. Arraste todos os arquivos e pastas do projeto
3. Clique em **Commit changes**

**Opção B — Git:**
```bash
git init
git add .
git commit -m "💚 Giovana Wrapped"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/giovana-wrapped.git
git push -u origin main
```

### Passo 3 — Ativar GitHub Pages
1. Vá em **Settings** do repositório
2. Clique em **Pages** (menu lateral)
3. Em **Source**, selecione **Deploy from a branch**
4. Branch: **main**, pasta: **/ (root)**
5. Clique em **Save**

### Passo 4 — Acessar
Após ~2 minutos, o site estará disponível em:
```
https://SEU-USUARIO.github.io/giovana-wrapped/
```

---

## 📱 Otimizar para compartilhar

Para compartilhar via link, basta enviar a URL do GitHub Pages para ela acessar pelo celular.

Para uma experiência ainda melhor, você pode adicionar ao `<head>` do `index.html`:
```html
<meta property="og:title" content="Um presente pra você 💚" />
<meta property="og:description" content="Toca aqui pra abrir ✨" />
<meta property="og:image" content="photos/foto-dela.jpg" />
```

---

## 💚 Créditos

Feito com amor — inspirado no Spotify Wrapped.
```
