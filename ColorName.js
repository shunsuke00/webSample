["first", "second", "third"].forEach(grade => {
    node = document.querySelector(`#box-${grade}`);
    node.addEventListener("click", () => {
        document.querySelectorAll(`.${grade}`).forEach(element => {
            element.classList.toggle("invisible");
        })
    })
});