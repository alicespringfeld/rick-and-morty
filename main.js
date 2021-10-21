import { createElement } from "./lb/elements";
import { createHeaderComponent } from "./lb/titleComponent";
import "./style.css";
import createCharacterComponent from "./components/characterComponent";

async function createApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createHeaderComponent();

  const response = await fetch("https://rickandmortyapi.com/api/character");
  const body = await response.json();
  const characters = body.results;

  const characterElement = characters.map((character) =>
    createCharacterComponent(character)
  );

  const mainElement = createElement(
    "main",
    { className: "main" },
    characterElement
  );

  const footerElement = createElement("footer", { className: "footer" }, [
    createElement("p", {
      textContent: "footerbar",
    }),
  ]);
  appElement.append(headerElement, mainElement, footerElement);
}
createApp();
