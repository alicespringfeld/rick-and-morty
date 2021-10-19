import { createElement } from "./lb/elements";
import { createHeaderComponent } from "./lb/titleComponent";
import "./style.css";

function createApp() {
  const appElement = document.querySelector("#app");

  const headerElement = createHeaderComponent();

  const mainElement = createElement("main", { className: "main" }, [
    createElement("p", {
      textContent: "there will soon be cards...",
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
