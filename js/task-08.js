const rightEmail = '';
const rightRassword = '';

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;

    if (emailValue === rightEmail && passwordValue === rightRassword) {
        return console.log({
            elementsEmail: rightEmail,
            elementsPassword: rightRassword
        });
    }
    else if (emailValue === "" || passwordValue === "") {
        alert("Fill up all the forms!")
    }
})
