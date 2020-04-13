var inputName = document.body.querySelector(".nameInput");
var inputPass = document.body.querySelector(".passwordInput");
var buttonEle = document.body.querySelector(".submit");
var errorDiv = document.body.querySelector(".error");

var list = [];

buttonEle.addEventListener("click", function () {
  if (validation(inputName) && inputPass.value === "coolPassword") {
    list.push({
      name: inputName.value
    });

    errorDiv.innerHTML = "" 
    function app(){
  nav();
  initRoot();
  homePage();
}

function nav(){
  var navEle = document.createElement("nav");
  var homeButton = document.createElement("button");
  homeButton.innerHTML="Display Notes";
  homeButton.addEventListener("click", function(){
    homePage();
  })
  var aboutButton = document.createElement("button");
  aboutButton.innerHTML="Add Notes";
  aboutButton.addEventListener("click", function(){
    aboutPage();
  })
  navEle.appendChild(homeButton);
  navEle.appendChild(aboutButton);
  document.body.appendChild(navEle);
}

function initRoot(){
  var root = document.createElement("div")
  root.classList.add("root");
  root.innerHTML="Stuff"
  document.body.appendChild(root);
}

function homePage(){
  document.body.querySelector(".root").innerHTML=""
}

function aboutPage(){
  document.body.querySelector(".root").innerHTML="Add Notes Here"
}

app();;
  } else {
    if (!validation(coolStudent123) && inputPass.value === "coolPassword") {
      errorDiv.innerHTML = "Name has no text";
    } else if (validation(inputName) && inputPass.value !== "coolPassword") {
      errorDiv.innerHTML = "Password is wrong";
    } else {
      errorDiv.innerHTML = "You suck";
    }
  }

  console.log(list);
});

function validation(ele) {
  if (ele.value !== "") {
    return true;
  } else {
    return false;
  }
}