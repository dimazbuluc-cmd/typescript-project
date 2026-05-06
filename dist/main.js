"use strict";
var PageColor;
(function (PageColor) {
    PageColor["\u0411\u043B\u0430\u043A\u0438\u0442\u043D\u0438\u0439"] = "lightblue";
    PageColor["\u0417\u0435\u043B\u0435\u043D\u0438\u0439"] = "lightgreen";
    PageColor["\u0416\u043E\u0432\u0442\u0438\u0439"] = "lightyellow";
})(PageColor || (PageColor = {}));
const userName = "Олена";
const userAge = 25;
function greet(name, age) {
    return `Привіт, ${name}! Тобі ${age} років.`;
}
const btn = document.getElementById("runBtn");
const select = document.getElementById("colorSelect");
const result = document.getElementById("result");
btn.addEventListener("click", () => {
    const greeting = greet(userName, userAge);
    const enumValues = Object.values(PageColor);
    const listItems = enumValues.map((val) => `<li>${val}</li>`).join("");
    result.innerHTML = `
      <p><strong>${greeting}</strong></p>
      <p>Доступні кольори (з Enum):</p>
      <ul>${listItems}</ul>
    `;
    const selectedColor = select.value;
    if (selectedColor) {
        document.body.style.backgroundColor = selectedColor;
    }
});
