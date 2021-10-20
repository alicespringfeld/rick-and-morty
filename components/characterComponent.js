import { createElement } from "../lb/elements";
import styles from "./characterComponent.module.css";

export default function createCharacterComponent({
  name,
  image,
  status,
  race,
  location,
}) {
  const characterElement = createElement(
    "article",
    {
      className: styles.card,
    },
    [
      createElement("img", {
        src: image,
        alt: "",
        className: styles.image,
      }),
      createElement(
        "h2",
        {
          textContent: name,
          className: styles.headline,
        },
        [
          createElement("p", { textContent: `${status}- ${race}` }),
          createElement("h4", {
            textContent: "Last known location: " + location,
            className: styles.subhead,
          }),
        ]
      ),
      /*createElement("h4", {
        textContent: location,
        className: styles.subhead,
      }),*/
    ]
  );
  return characterElement;
}
