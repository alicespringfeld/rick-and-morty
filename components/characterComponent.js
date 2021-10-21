import { createElement } from "../lb/elements";
import styles from "./characterComponent.module.css";

export default function createCharacterComponent({
  name,
  image,
  status,
  species,
  location,
  episode,
}) {
  const lastLocation = location[0];
  const lastKnownLocationElement = createElement("p", {
    textContent: location.name,
  });

  const firstEpisode = episode[0];
  const firstEpisodeElement = createElement("p", { textContent: firstEpisode });

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
      createElement("h2", {
        textContent: name,
        className: styles.headline,
      }),
      createElement("p", { textContent: `${status} - ${species}` }),
      createElement("h4", { textContent: "Last known location: " }),
      lastKnownLocationElement,
      createElement("h4", { textContent: "First seen in: " }),
      firstEpisodeElement,
    ]
  );
  fetch(lastLocation)
    .then((response) => response.json())
    .then((body) => {
      /*console.log(body.name);*/
      lastKnownLocationElement.textContent = body.name;
    });

  fetch(firstEpisode)
    .then((response) => response.json())
    .then((body) => {
      /*console.log(body.name);*/
      firstEpisodeElement.textContent = body.name;
    });

  return characterElement;
}
