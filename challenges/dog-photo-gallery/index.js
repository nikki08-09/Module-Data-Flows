async function generate() {
  let image = await fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .catch((error) => {
      throw new Error("Error");
    });
}
