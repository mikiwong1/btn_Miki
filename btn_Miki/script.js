const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button2 = document.querySelector(".btn");

button2.addEventListener("click", updateID);

function updateID() {
  const id = prompt("Enter a new ID");
  button2.textContent = `ID: ${id}`;
}
