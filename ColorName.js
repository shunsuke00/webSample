["second", "third"].forEach(grade => {
    let node_grade = document.querySelector(`#box-${grade}`);
    node_grade.addEventListener("click", () => {
        document.querySelectorAll(`.${grade}`).forEach(element_grade => {
            element_grade.classList.toggle("invisible_grade", !node_grade.checked);
        });
        node_checkbox = document.querySelector(`#checkbox-${grade}`);
        node_checkbox.classList.toggle("unchecked");
    });
});

["japanese-name", "english-name"].forEach(name => {
    let node_name = document.querySelector(`#box-${name}`);
    node_name.addEventListener("click", () => {
        document.querySelectorAll(`.${name}`).forEach(element_name => {
            element_name.classList.toggle("invisible_name", !node_name.checked);
        });
        node_checkbox = document.querySelector(`#checkbox-${name}`);
        node_checkbox.classList.toggle("unchecked");
    });
});