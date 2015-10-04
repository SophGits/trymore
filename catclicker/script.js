"use strict"

window.onload = function () {

  var catpic = document.getElementById('cat-image');

  // function handleClick() {

  // }

  // function selectCat() {

  // }

  var cats = [
  {
    uri: "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg",
    nom: "Suki",
    num: 0
  },
  {
    uri: "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/7/30/1406736497600/Black-cats-are-being-over-012.jpg",
    nom: "Sweden",
    num: 0
  },
  {
    uri: "http://www.vetprofessionals.com/catprofessional/images/home-cat.jpg",
    nom: "Sierra",
    num: 0
  },
  {
    uri: "http://purrfectcatbreeds.com/wp-content/uploads/2014/06/siberian-cat1.jpg",
    nom: "Solomon",
    num: 0
  },
  {
    uri: "http://weknowyourdreams.com/images/cat/cat-01.jpg",
    nom: "Sandy",
    num: 0
  }
];

  function displayCatGallery() {
    cats.map(function(cat, i){
     var image = document.createElement("img");
     image.setAttribute("src", cat.uri);
     image.setAttribute("data-id", i);
     image.setAttribute("data-name", cat.nom);

     var thisCat = document.getElementById("gallery").appendChild(image);
     thisCat.addEventListener("click", handleGalleryClick);
   });
  }

  function handleGalleryClick(e) {
    var catNumber = parseInt(e.target.attributes["data-id"].value);
    var catName = e.target.attributes["data-name"].value;
    var catImage = e.target.attributes.src.value;

    displayCat(catImage, catName);

    incrementClickcount(catNumber);
  }

  function displayCat(catImage, catName) {
    var displayCat = document.getElementById('cat-image');
    displayCat.getElementsByTagName('img')[0].src = catImage;
    var displayCatName = document.getElementById('catname');
    displayCatName.innerHTML = catName;
  }

  function incrementClickcount(catNumber) {
    var clickcount = ++ cats[catNumber].num;
    var clickEl = document.getElementById('number-of-clicks');
    clickEl.innerHTML = String(clickcount);
  }

  displayCatGallery();

};