function grid(rows) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', rows);
  for (i = 0; i < (rows * rows); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseenter", e => {
        let randomNumber1 = Math.floor(Math.random() * 256);
        let randomNumber2 = Math.floor(Math.random() * 256);
        let randomNumber3 = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3}`;
    });
  };
};
grid(16);

