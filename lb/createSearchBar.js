import { createElement } from "./elements.js";

export function createSearchBarComponent(onSubmit) {
  const searchBarInput = createElement("input", {
    type: "name",
    placeholder: "search...",
  });
  const submitButton = createElement("button", { type: "submit" }, ["Submit"]);

  const formElement = createElement(
    "form",
    {
      className: "searchBar",
      onsubmit: function (event) {
        event.preventDefault();
        onSubmit(searchBarInput.value);
      },
    },
    [searchBarInput, submitButton]
  );
  return formElement;
}
