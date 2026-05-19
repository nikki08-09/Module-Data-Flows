async function xkcd() {
  let data = await fetch(`https://xkcd.now.sh/?comic=latest`);
  if (!data.ok) {
    throw new Error(`HTTP error! status: ${data.status}`);
  }
  let jsonData = await data.json();
  console.log(jsonData);
  const generateButton = document.createElement("button");
  generateButton.id = "generate";
  generateButton.innerText = "Generate XKCD";
  document.body.appendChild(generateButton);
  const imageDiv = document.createElement("div");
  document.body.appendChild(imageDiv);
  imageDiv.style.backgroundColor = "lightgray";
  imageDiv.style.height = "400px";
  generateButton.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = jsonData.img;
    img.alt = jsonData.alt;
    imageDiv.appendChild(img);
  });
}
xkcd();

async function randomFox() {
  let data = await fetch(`https://randomfox.ca/floof/`);
  let jsonData = await data.json();
  console.log(jsonData);
  const generateButton = document.createElement("button");
  generateButton.id = "generateFox";
  generateButton.innerText = "Generate Random Fox";
  document.body.appendChild(generateButton);
  const imageDiv = document.createElement("div");
  document.body.appendChild(imageDiv);
  imageDiv.style.backgroundColor = "lightgray";
  imageDiv.style.height = "400px";
  generateButton.addEventListener("click", () => {
    const img = document.createElement("img");
    img.style.maxHeight = "100%";
    imageDiv.style.maxWidth = jsonData.image.length + "px";
    img.src = jsonData.image;
    img.alt = "Random Fox";
    imageDiv.appendChild(img);
  });
}
randomFox();
