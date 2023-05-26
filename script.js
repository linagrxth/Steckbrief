console.log("hello world")

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM CONTENT LOADED")
})
function addHobby() {

    var hobbyInput = document.getElementById("hobby-input");
    var hobbyList = document.getElementById("hobby-list");
    var newHobby = document.createElement("li");
    var hobbyText = document.createTextNode(hobbyInput.value);
    newHobby.appendChild(hobbyText);
    hobbyList.appendChild(newHobby);
    hobbyInput.value = "";
  }
  function addErfahrung() {

    var erfahrungInput = document.getElementById("erfahrung-input");
    var erfahrungList = document.getElementById("erfahrung-list");
    var newErfahrung = document.createElement("li");
    var erfahrungText = document.createTextNode(erfahrungInput.value);
    newErfahrung.appendChild(erfahrungText);
    erfahrungList.appendChild(newErfahrung);
    erfahrungInput.value = "";
  }