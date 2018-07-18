/* <a href="https://www.paulmccartney.com/">
<button type="button" class="btn btn-primary">Official Website</button></a>;
<a href="https://en.wikipedia.org/wiki/Paul_McCartney">
<button type="button" class="btn btn-secondary">Wikipedia</button></a>;
<a href="http://maccaboard.paulmccartney.com/">
<button type="button" class="btn btn-success">Fan Forum</button></a>; */

document.getElementById("Official").innerHTML = `<a href="https://www.paulmccartney.com/">
<button type="button" class="btn btn-primary">Official Website</button></a>`;

document.getElementById("Wikipedia").innerHTML = `<a href="https://en.wikipedia.org/wiki/Paul_McCartney">
<button type="button" class="btn btn-secondary">Wikipedia</button></a>`;

document.getElementById("Fan-Forum").innerHTML = `<a href="http://maccaboard.paulmccartney.com//">
<button type="button" class="btn btn-success">Fan-Forum</button></a>`;

document.getElementById("Itunes").innerHTML = `<a href="https://itunes.apple.com/us/artist/paul-mccartney/12224">
<button type="button" class="btn btn-danger">Itunes</button></a>`;

document.getElementById("Spotify").innerHTML = `<a href="https://open.spotify.com/artist/4STHEaNw4mPZ2tzheohgXB">
<button type="button" class="btn btn-warning">Spotify</button></a>`;

//  makes div

const createDiv = () => {
let div = document.createElement("div")
return div;
}

// create for each loop

const tourSchedule = createDiv();
tourSchedule.innerHTML = TourDatabase.TourDates[0].city + " " + TourDatabase.TourDates[0].date;

document.getElementById("Tour-Schedule").appendChild(tourSchedule);