let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    myHeading.textContent = `Yokoso welcome to my soul's site,`
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Yokoso welcome to my soul's site, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Yokoso welcome to my soul's site, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/amechan.jpg") {
    myImage.setAttribute("src", "images/michica.jpg");
  } else if (mySrc === "images/michica.jpg") {
    myImage.setAttribute("src", "images/feet.jpg");
  } else {
    myImage.setAttribute("src", "images/amechan.jpg");
  }




});
