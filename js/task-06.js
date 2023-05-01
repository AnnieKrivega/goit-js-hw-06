
    const inputEl = document.querySelector("#validation-input")
    inputEl.addEventListener('blur', event => {
    const inputLength = event.target.value.length;
    const dataLength = +event.target.dataset.length;
    if (inputLength === dataLength) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
    } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
    }
});