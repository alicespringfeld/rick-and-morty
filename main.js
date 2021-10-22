import { createElement } from "./lb/elements";
import { createHeaderComponent } from "./lb/titleComponent";
import "./style.css";
import createCharacterComponent from "./components/characterComponent";
import { fetchCharacter } from "./lb/fetchCharacters.js";

async function createApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createHeaderComponent();

  const characters = await fetchCharacter(
    "https://rickandmortyapi.com/api/character"
  );

  // turned this into new function fetchCharacter in fetchCharacters.js

  /*const response = await fetch("https://rickandmortyapi.com/api/character");
  const body = await response.json();
  const characters = body.results;*/

  const characterElements = characters.map((character) =>
    createCharacterComponent(character)
  );

  const mainElement = createElement(
    "main",
    { className: "main" },
    characterElements
  );

  const footerElement = createElement("footer", { className: "footer" }, [
    createElement("p", {
      textContent: "footerbar",
    }),
  ]);
  appElement.append(headerElement, mainElement, footerElement);
}
createApp();
