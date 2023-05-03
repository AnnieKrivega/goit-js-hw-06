const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

text.style.fontSize = `${fontSizeControl.value}px`; // => to prevent [A FONT SIZE "JUMP"] after initial scale down

fontSizeControl.addEventListener("input", () => {
text.style.fontSize = `${fontSizeControl.value}px`;
});
