let boxTop = 200;
let boxLeft = 200;

document.addEventListener("keydown", (event) => {
  const keyName = event.key;

  switch (keyName) {
    case "ArrowUp":
      boxTop -= 10;
      break;
    case "ArrowDown":
      boxTop += 10;
      break;
    case "ArrowLeft":
      boxLeft -= 10;
      break;
    case "ArrowRight":
      boxLeft += 10;
      break;

    default:
      console.log("tecla inválida");
      break;
  }

  document.getElementById("box").style.top = boxTop + "px";
  document.getElementById("box").style.left = boxLeft + "px";
});
