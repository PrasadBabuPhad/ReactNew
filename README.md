# ⚡ React + Redux Project (Quick Commands README)

## 📥 Setup

```bash
npm init -y
npm install react react-dom redux react-redux
npm install -D parcel tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 📁 Folder Structure

```bash
src/
  components/
  redux/
    store.js
    slice.js
  App.jsx
  index.css
index.html
package.json
tailwind.config.js
```

---

## ⚙️ Tailwind Setup

```bash
# index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```bash
# tailwind.config.js
content: ["./index.html","./src/**/*.{js,jsx}"]
```

---

## 🧠 Redux Setup

```bash
# store.js
import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";

export const store = configureStore({
  reducer: { app: slice }
});
```

```bash
# slice.js
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "app",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; }
  }
});

export const { increment } = slice.actions;
export default slice.reducer;
```

---

## 🔗 Connect Redux

```bash
# App.jsx
import { Provider } from "react-redux";
import { store } from "./redux/store";

<Provider store={store}>
  <App />
</Provider>
```

---

## ▶️ Run Project

```bash
npx parcel index.html
```

OR

```bash
npm start
```

---

## 📦 Scripts

```bash
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
```

---

## ⚠️ Notes

```bash
# remove if exists
rm main.js
```

```bash
# clear cache if error
rm -rf .parcel-cache dist
```

---

## ✅ Build

```bash
npm run build
```
