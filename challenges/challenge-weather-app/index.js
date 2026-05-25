async function getWeather() {
  let city = "london";
  let info = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=969fa34b02ab608d01f8c8e40a7011c4`
  )
    .then((response) => response.json())
    .catch((error) => {
      throw new Error("Error");
    });
  let query = info.weather[0].description;
  let images = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=w9d_ywUCdJbJ1ccO5M4rFZpyQbs1mgnXwOStnXskuI0`
  )
    .then((response) => response.json())
    .catch((error) => {
      throw new Error("Error");
    });

  let imageArray = [];

  let links = images.results;
  for (let i = 0; i < links.length; i++) {
    imageArray.push(links[i].urls.full);
  }
  const figure = document.getElementById("photo");
  const button = document.createElement("button");
  document.querySelector(".info").append(button);
  document.querySelector("#conditions").innerText =
    info.weather[0].description + "\n" + city;
  button.innerText = "Next";
  button.style.position = "absolute";
  button.style.left = "50%";
  button.style.bottom = "40px";
  button.style.borderRadius = "10px";
  const imageFigure = document.createElement("img");
  imageFigure.id = "imageFigure";
  figure.append(imageFigure);
  imageFigure.style.height = "100%";
  imageFigure.style.width = "100%";
}
getWeather();
