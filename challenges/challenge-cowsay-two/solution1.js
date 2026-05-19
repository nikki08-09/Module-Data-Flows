// =================
// Stripped down cowsayer CLI,
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments

// how will you accept arguments?

// 2. Make supplies for our speech bubble

let topLine = "_";
let bottomLine = "-";
let saying = "";

// 3. Make a cow that takes a string

function cowsay(saying) {
  saying = " " + saying + " ";
  for (let i = 1; i < saying.length; i++) {
    topLine += "_";
    bottomLine += "-";
  }
  let cow = ` ${topLine}\n<${saying} >\n ${bottomLine}\n         \\    ^__^\n          \\   (oo)\\_______\n              (__)\\       )\\/\\ \n                 ||----w |\n                 ||     ||`;
  console.log(cow);
  // how will you make the speech bubble contain the text?

  // where will the cow picture go?

  // how will you account for the parameter being empty?
}
cowsay("Hello Nikita!"); // test your function with a string

//4. Pipe argument into cowsay function and return a cow

// how will you log this to the console?
