const myImage = document.querySelector("img");

myImage.addEventListener("click", runEvent);

function runEvent() {
  const mySrc = myImage.getAttribute("src");

//   mySrc === "images/firefox-icon.png" ? myImage.setAttribute("src", "images/firefox-2.png") : myImage.setAttribute("src", "images/firefox-icon.png");

  if(mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox-2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
}

let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if(!myName) {
    setUserName();
  }

  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
}

if(!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function() {
  setUserName();
}