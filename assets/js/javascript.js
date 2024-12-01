var menu = document.getElementById("dropdownMenu");
menu.style.display = "none";
function toggleMenu() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function translateText() {
  var language = document.getElementById("languageSelect").value;
  //   var textElements = [
  //     { id: "#company-name-1", text: "ABDI" },  ini jika memakai id
  //     { id: ".company-name-2", text: "SEJAHTERA" }, ini jika memakai class
  //     { id: "p", text: "SEJAHTERA" }, ini jika memakai tag
  //   ];
  var textElements = [];

  textElements.forEach(function (element) {
    var url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${language}&dt=t&q=${encodeURI(
      element.text
    )}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(element.id).innerText = data[0][0][0];
      })
      .catch((error) => console.error("Error:", error));
  });
}
