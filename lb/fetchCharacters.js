export async function fetchCharacter(url) {
  const response = await fetch(url);
  const body = await response.json();
  const characters = body.results;

  return characters;
}
