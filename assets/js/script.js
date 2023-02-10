
var charInfo = document.querySelector('.charInfo');
var charName = document.querySelector('.charName');
var charGender = document.querySelector('.charGender');
var charHeight = document.querySelector('.charHeight');
var charEyes = document.querySelector('.charEyes');
var charHair = document.querySelector('.charHair');

function imgClickHandler(cosPerson) {
    var url= "https://swapi.dev/api/people/";
    url = url + cosPerson;
    // url += cosPerson;
    console.log(url)

    // charInfo.style.display = 'block'
    

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

// https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyB-mNwZfjJuYhs9x6mfbONsGVi0PbUQ-5Q&type=video&part=snippet

