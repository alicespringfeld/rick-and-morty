import { createElement } from "./lb/elements";
import { createHeaderComponent } from "./lb/titleComponent";
import "./style.css";
import createCharacterComponent from "./components/characterComponent";

function createApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createHeaderComponent();

  const mainElement = createElement("main", { className: "main" }, [
    createCharacterComponent({
      name: "Rick",
      status: "Death",
      race: "Alien",
      location: "Earth",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8OjjdUN8xCiccTkUtcwIHgHaJV%26pid%3DApi&f=1",
    }),
    createCharacterComponent({
      name: "Morty",
      status: "Alive",
      race: "Alien",
      location: "Mars",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.mPRQa5i7FgrOmGOT2mvFNwHaHA%26pid%3DApi&f=1",
    }),
  ]);

  const footerElement = createElement("footer", { className: "footer" }, [
    createElement("p", {
      textContent: "footerbar",
    }),
  ]);
  appElement.append(headerElement, mainElement, footerElement);
}
createApp();
