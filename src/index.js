import { UI } from "./models/UI.js";

const button = document.getElementById("btnAdd");

const handleClick = () => {
  const ui = new UI();
  ui.QuestionsRender(2);
  ui.Render();
};

button.addEventListener("click", handleClick);
