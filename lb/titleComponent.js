import { createElement } from "./elements";

export function createHeaderComponent() {
  const headerElement = createElement("header", { className: "header" }, [
    createElement("h1", {
      textContent: "Rick and Morty",
    }),
  ]);
  return headerElement;
}
