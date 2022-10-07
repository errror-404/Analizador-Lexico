let lexr = require("lexr");
let palabras = require("./palabras");
const { STRING } = require("./tokens");
let tokens = require("./tokens");

let tokenizer = new lexr.Tokenizer("");

tokenizer.addTokenSet(tokens);

let input = "var nombre = Juan;";

let output = tokenizer.tokenize(input);
let symbolTable = {};
for (let i = 0; i < output.length; i++) {
  if (tokens[output[i].token]) {
    symbolTable[output[i].value] = output[i].token;
  }
}
console.log(symbolTable);
