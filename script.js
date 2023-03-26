const snare = new Audio("./sounds/snare.mp3");
const crashl = new Audio("./sounds/crashl.mp3");
const crashm = new Audio("./sounds/crashm.mp3");
const crashr = new Audio("./sounds/crashr.mp3");
const floor = new Audio("./sounds/floor.mp3");
const kick = new Audio("./sounds/kick.mp3");
const openhh = new Audio("./sounds/openhh.mp3");
const closehh = new Audio("./sounds/closehh.mp3");
const ride = new Audio("./sounds/ride.mp3");
const tom1 = new Audio("./sounds/tom1.mp3");
const tom2 = new Audio("./sounds/tom2.mp3");
const tom3 = new Audio("./sounds/tom3.mp3");

snare.volume = 0.85;
crashl.volume = 0.6;
crashm.volume = 0.6;
crashr.volume = 0.6;
floor.volume = 0.5;
kick.volume = 0.6;
openhh.volume = 0.6;
closehh.volume = 0.6;
ride.volume = 0.6;
tom1.volume = 0.5;
tom2.volume = 0.5;
tom3.volume = 0.5;

const element = document.documentElement;

// Preload dos arquivos de áudio
snare.preload = "auto";
crashl.preload = "auto";
crashm.preload = "auto";
crashr.preload = "auto";
floor.preload = "auto";
kick.preload = "auto";
openhh.preload = "auto";
closehh.preload = "auto";
ride.preload = "auto";
tom1.preload = "auto";
tom2.preload = "auto";
tom3.preload = "auto";

element.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "v":
    case "b":
      snare.currentTime = 0;
      snare.play();
      break;
    case "a":
    case "n":
    case "m":
      e.preventDefault();
      kick.currentTime = 0;
      kick.play();
      break;
    case "c":
    case "x":
      closehh.currentTime = 0;
      closehh.play();
      openhh.pause();
      break;
    case "z":
    case "s":
      openhh.currentTime = 0;
      openhh.play();
      break;
    case "q":
    case "w":
      e.preventDefault();
      crashl.currentTime = 0;
      crashl.play();
      break;
    case "d":
    case "f":
      e.preventDefault();
      tom1.currentTime = 0;
      tom1.play();
      break;
    case "g":
    case "h":
      e.preventDefault();
      tom2.currentTime = 0;
      tom2.play();
      break;
    case "j":
    case "k":
      e.preventDefault();
      tom3.currentTime = 0;
      tom3.play();
      break;
    case ".":
    case ",":
      e.preventDefault();
      floor.currentTime = 0;
      floor.play();
      break;
    case "e":
    case "r":
      e.preventDefault();
      crashm.currentTime = 0;
      crashm.play();
      break;
    case "t":
    case "y":
      e.preventDefault();
      crashr.currentTime = 0;
      crashr.play();
      break;
    case "u":
    case "i":
      e.preventDefault();
      ride.currentTime = 0;
      ride.play();
  }
});
