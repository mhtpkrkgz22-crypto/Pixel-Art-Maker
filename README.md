# 🎨 Pixel Art Maker

A simple and interactive **Pixel Art Maker** built with **HTML, CSS, and JavaScript**.
Users can create pixel-based drawings using different tools like paint, eraser, and rainbow mode.

---

## 🚀 Features

* 🖌️ **Paint Mode** – Draw with selected color
* 🧽 **Eraser Mode** – Remove color (paint with white)
* 🌈 **Rainbow Mode** – Draw with random colors
* 🖱️ **Click & Drag Drawing** – Smooth drawing experience
* 🎚️ **Dynamic Grid Size** – Adjustable grid (1x1 to 50x50)
* 🧹 **Clear Grid** – Reset the canvas instantly
* 👁️ **Toggle Grid Lines** – Show / hide cell borders

---

## 🧠 How It Works

### Grid System

The grid is dynamically generated using JavaScript based on user input.

> The grid is recreated every time the slider value changes.

---

### Drawing Logic

Each cell listens for mouse events:

* `mousedown` → start drawing
* `mouseover` → continue drawing while dragging

A global state (`isMouseDown`) is used to track mouse activity.

---

### Mode System

The app uses a **single state variable**:

```js
let currentMode = "paint";
```

This controls how each cell behaves:

* `"paint"` → uses selected color
* `"eraser"` → sets white color
* `"rainbow"` → generates random colors

> This approach keeps the code clean and scalable.

---

## 🛠️ Technologies Used

* HTML5
* CSS3 (Grid Layout)
* JavaScript (DOM Manipulation & Events)

---

## 📂 Project Structure

```
project-folder/
│
├── index.html
├── style.css
├── script.js
└── images/
```

## 📌 Notes

This project was built as a **frontend practice project** to improve JavaScript fundamentals and UI interaction logic.

---

