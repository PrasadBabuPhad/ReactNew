# 📦 Project Setup Guide (React + Parcel + Tailwind CSS)

## 🚀 Overview

This project uses:

* **React** for UI
* **ReactDOM** for rendering
* **Parcel** as the bundler
* **Tailwind CSS** for styling

Cards UI components are built using Tailwind utility classes.

---

## 📥 Installation

### 1. Initialize project

```bash
npm init -y
```

---

### 2. Install Dependencies

#### Core Dependencies

```bash
npm install react react-dom
```

#### Dev Dependencies

```bash
npm install -D parcel tailwindcss postcss autoprefixer
```

---

### 3. Initialize Tailwind CSS

```bash
npx tailwindcss init -p
```

This creates:

* `tailwind.config.js`
* `postcss.config.js`

---

## ⚙️ Tailwind Configuration

Update `tailwind.config.js`:

```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## 🎨 Add Tailwind to CSS

Create `src/index.css` and add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 📁 Project Structure

```
project/
│── src/
│   ├── App.jsx
│   ├── index.css
│── index.html
│── package.json
│── tailwind.config.js
│── postcss.config.js
```

---

## ⚠️ Important Note

❌ **Remove `main.js` if present**

* Parcel automatically handles entry via `index.html`
* React entry should be inside JSX (e.g., `App.jsx`)

---

## 🧠 React Entry Example

Inside `index.html`:

```html
<script type="module" src="./src/App.jsx"></script>
```

---

## 🧩 Example Card Component

```jsx
export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80">
        <h2 className="text-xl font-bold mb-2">Card Title</h2>
        <p className="text-gray-600">
          This is a simple Tailwind card component.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Click Me
        </button>
      </div>
    </div>
  );
}
```

---

## ▶️ Run the Project

```bash
npx parcel index.html
```

OR add script in `package.json`:

```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
```

Then run:

```bash
npm run start
```

---

## 📦 package.json Example

```json
{
  "name": "tailwind-react-app",
  "version": "1.0.0",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  }
}
```

---

## ✅ Summary

* Install React + Parcel + Tailwind
* Configure Tailwind properly
* Use JSX instead of `main.js`
* Build UI with Tailwind utility classes
* Run using Parcel

---

## 💡 Tip

Tailwind works best with:

* reusable components
* utility-first styling
* responsive design classes (`md:`, `lg:`)

---

🔥 Your cards UI is now ready to scale cleanly with React + Tailwind + Parcel!
