//  theme variables
var themeLight = document.querySelector("#themeLight");
var themeDark = document.querySelector("#themeDark");
var theme = document.querySelector(".theme");
var charBox = document.querySelector('#charBox');
// set default to light mode
var mode = "lightMode";

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }

    function closeModal($el) {
      $el.classList.remove('is-active');
    }

    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);

      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-overlay, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');

      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;

      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
    // theme function
    themeLight.addEventListener("click", function() {
      if (mode === "lightMode") {
        closeAllModals();
      } else {
        mode = "lightMode";
        theme.setAttribute("class", "lightMode");
        charBox.removeAttribute("class", "charStyleDark");
        charBox.setAttribute("class", "charStyleLight");
        localStorage.setItem("savedTheme", mode);
        closeAllModals();
      }
      });
    themeDark.addEventListener("click", function() {
      if (mode === "lightMode") {
        mode = "darkMode";
        theme.setAttribute("class", "darkMode");
        charBox.removeAttribute("class", "charStyleLight");
        charBox.setAttribute("class", "charStyleDark");
        localStorage.setItem("savedTheme", mode);
        closeAllModals();
      } else {
        closeAllModals();
      }
      });

  });

var charInfo = document.querySelector('.charInfo');
var charName = document.querySelector('.charName');
var charGender = document.querySelector('.charGender');
var charHeight = document.querySelector('.charHeight');
var charEyes = document.querySelector('.charEyes');
var charHair = document.querySelector('.charHair');

function imgClickHandler(cosPerson) {
    var url= "https://swapi.dev/api/people/";
    url = url + cosPerson;
    console.log(url)



    fetch(url)
    .then (function (response){
        return response.json();
    })
    .then (function (data){
        console.log(data);
        charName.textContent = "Name:   " + data.name;
        charGender.textContent = "Gender:   " + data.gender;
        charHeight.textContent = "Height:   " + data.height + " cm";
        charEyes.textContent = "Eye Color:   " + data.eye_color;
        charHair.textContent = "Hair Color:   " + data.hair_color;
    })
    charInfo.style.display = 'block'

}

var videoResults = document.querySelector('.youtubeResults');

function youtubeResults(cosName) {
  var youtubeURL = "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBM6aAEk3xfoLSP_eQq1EkOsTuVOxalyAw&type=video&part=snippet&q=";
  youtubeURL = youtubeURL + cosName;
  console.log(youtubeURL);

  fetch(youtubeURL)
  .then (function (response) {
    return response.json();
  })
  .then (function (data) {
    console.log(data);
    videoResults.innerHTML= "";

    for (i=0; i<data.items.length; i++) {
      
      var newImgA = document.createElement("a");
      var newImg = document.createElement("img");
      var youtubeURL = 'https://www.youtube.com/watch?v='

      newImgA.setAttribute('href', youtubeURL + data.items[i].id.videoId)
      newImg.setAttribute('src', data.items[i].snippet.thumbnails.default.url);
      videoResults.append(newImgA);
      newImgA.appendChild(newImg);

      newImg.classList.add('thumbnails');


      // newImgA.append(newImg);
    
      
      

    }
  })
}






// onClick="imgClickHandler('13')" - chewie
// onClick="imgClickHandler('14')" - hansolo
// onClick="imgClickHandler('12')" - wilhuff
// onClick="imgClickHandler('1')" - luke
// onClick="imgClickHandler('2')" - c3po
// onClick="imgClickHandler('3')" - r2d2
// onClick="imgClickHandler('4')" - darth vader
// onClick="imgClickHandler('5')" - leia
// onClick="imgClickHandler('10')" - obi wan
// onClick="imgClickHandler('11')" - anakin
// onClick="imgClickHandler('20')" - yoda
// onClick="imgClickHandler('22')" - boba fett
// onClick="imgClickHandler('35')" - padme
// onClick="imgClickHandler('44')" - darth maul
// onClick="imgClickHandler('79')" - general grievous