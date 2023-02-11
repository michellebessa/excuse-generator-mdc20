/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function excuseGenerator(array) {
  return array[Math.floor(array.length * Math.random())];
}

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed on", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here
  console.log(
    excuseGenerator(who) +
      " " +
      excuseGenerator(action) +
      " " +
      excuseGenerator(what) +
      " " +
      excuseGenerator(when)
  );
  console.log("Hello Rigo from the console!");
};
