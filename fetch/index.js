async function xkcd() {
  let data = await fetch(`https://xkcd.now.sh/?comic=latest`);
  let jsonData = await data.json();
  console.log(jsonData);
}
