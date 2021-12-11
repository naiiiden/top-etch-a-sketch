let color = ["#f5f972", "#6089cf", "#49ee97", "#c3e085", "#792af9", "#567e9f",
"#e53ba2", "#4f6aa7", "#fe4910", "#13f3cd", "#438331", "#31d086", "#c359f8", "#3b45a9",
"#7fd2bc", "#a10a2d", "#7c4940", "#36f0c9", "#415543", "#975da5", "#138fb9"];

function grid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
      cell.addEventListener("mouseenter", e => {
          e.target.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
      })
    };
  };
  
  grid(64, 100);
