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
