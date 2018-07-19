// inject html for buttons using JavaScript

document.getElementById("Official").innerHTML = `<a href="https://www.paulmccartney.com/">
<button type="button" class="btn off-white">Official Website</button></a>`;

document.getElementById("Wikipedia").innerHTML = `<a href="https://en.wikipedia.org/wiki/Paul_McCartney">
<button type="button" class="btn turquoise">Wikipedia</button></a>`;

document.getElementById("Fan-Forum").innerHTML = `<a href="http://maccaboard.paulmccartney.com//">
<button type="button" class="btn turquoise">Fan Forum</button></a>`;

document.getElementById("iTunes").innerHTML = `<a href="https://itunes.apple.com/us/artist/paul-mccartney/12224">
<button type="button" class="btn off-white btn-block border border-dark">iTunes</button></a>`;

document.getElementById("Spotify").innerHTML = `<a href="https://open.spotify.com/artist/4STHEaNw4mPZ2tzheohgXB">
<button type="button" class="btn tangerine btn-block border border-dark">Spotify</button></a>`;

//  makes div for tour dates

const createDiv = () => {
let div = document.createElement("div")
return div;
}

// create for loop to populate tour dates on Document

let tourSchedule = createDiv();
for (let i = 0; i < TourDatabase.TourDates.length; i++) {
    tourSchedule.innerHTML += `<p class="d-inline mx-2 border border-dark">${TourDatabase.TourDates[i].city} ${TourDatabase.TourDates[i].date}</p>`;
    document.getElementById("Tour-Schedule").appendChild(tourSchedule);
}

