async function generate() {
  let image = await fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .catch((error) => {
      throw new Error("Error");
    });
  img.src = image.message;
}

const btn = document.getElementById("generate-btn");
const list = document.getElementById("list");
const img = document.createElement("img");
img.style.border = "2px solid black";
img.style.height = "100%";
img.style.width = "600px";
list.append(img);
list.style.height = "300px";
list.style.width = "600px";
btn.addEventListener("click", generate);
