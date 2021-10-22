import { createElement } from "./lb/elements.js";
import { createHeaderComponent } from "./lb/titleComponent.js";
import "./style.css";
import createCharacterComponent from "./components/characterComponent.js";
import { fetchCharacter } from "./lb/fetchCharacters.js";
import { createSearchBarComponent } from "./lb/createSearchBar.js";

async function createApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createHeaderComponent();

  async function handleSubmit(searchQuery) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
    );
    const body = await response.json();
    const characters = body.results;
    const characterComponents = characters.map((character) =>
      createCharacterComponent(character)
    );
    console.log(characterComponents);
    mainElement.innerHTML = "";

    mainElement.append(...characterComponents);
  }

  const formElement = createSearchBarComponent(handleSubmit);

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
  appElement.append(headerElement, formElement, mainElement, footerElement);
}
createApp();
