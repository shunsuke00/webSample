["second", "third"].forEach(grade => {
    let checkboxNodeOfGrade = document.querySelector(`#box-${grade}`);
    checkboxNodeOfGrade.addEventListener("click", () => {
        document.querySelectorAll(`.${grade}`).forEach(colorItemNodeWithGrade => {
            colorItemNodeWithGrade.classList.toggle("invisible_grade", !checkboxNodeOfGrade.checked);
        });
        document.querySelector(`#checkbox-${grade}`).classList.toggle("unchecked");
    });
});

["japanese-name", "english-name"].forEach(name => {
    let checkboxNodeOfNameType = document.querySelector(`#box-${name}`);
    checkboxNodeOfNameType.addEventListener("click", () => {
        document.querySelectorAll(`.${name}`).forEach(colorItemNodeWithName => {
            colorItemNodeWithName.classList.toggle("invisible_name", !checkboxNodeOfNameType.checked);
        });
        document.querySelector(`#checkbox-${name}`).classList.toggle("unchecked");
    });
});