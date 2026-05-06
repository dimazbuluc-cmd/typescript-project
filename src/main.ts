enum PageColor {
    Блакитний = "lightblue",
    Зелений = "lightgreen",
    Жовтий = "lightyellow",
  }
  
  const userName: string = "Олена";
  const userAge: number = 25;
  
  function greet(name: string, age: number): string {
    return `Привіт, ${name}! Тобі ${age} років.`;
  }
  
  const btn = document.getElementById("runBtn") as HTMLButtonElement;
  const select = document.getElementById("colorSelect") as HTMLSelectElement;
  const result = document.getElementById("result") as HTMLDivElement;
  
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
