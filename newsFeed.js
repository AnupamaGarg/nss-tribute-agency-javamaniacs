
let mainContent = document.getElementById("main-content");

mainContent.innerHTML += `<h2 class="headLine">Articles</h2>`

function writeMoreToDom(items, arg1, arg2, arg3, arg4, arg5, arg6) {

    let newContent1 = `<div class="articles">`

    for (let i = 0; i < events[items].length; i++) {
        let currentEvent = events[items][i];
        
        newContent1 +=
        `<div class="media my-3">
        <img class="align-self-center mr-3" src="${currentEvent[arg1]}" alt="${currentEvent[arg2]}">
        <div class="media-body my-auto">
        <h3 class="mt-0">${currentEvent[arg2]}</h3>
        <h4 class="mt-0">${currentEvent[arg3]} - ${currentEvent[arg4]}</h4>
        <p>${currentEvent[arg5]}</p>
        <p>${currentEvent[arg6]}</p>
        </div>
        </div>`
    }
    newContent1 += `</div>`
    mainContent.innerHTML += newContent1

}
writeMoreToDom("artistHeadlines", "image", "title", "date", "location", "content", "relevance");

mainContent.innerHTML += `<h2 class="headLine">Upcoming Events in Nashville</h2>`

function writeToDom(items) {
    let newContent2 = `<div class="flex-row d-flex justify-content-around">`

    // this loop runs though the things in the key I passed my function. Using [] for the items instead of items. tells it to evaluate what is in there instead of trying to find an items key.
    for (let i = 0; i < events[items].length; i++) {
        // currentEvents variable it holding the results of my loop.
        let currentEvent = events[items][i];
        // Using my variable target to enter in my html using += so it will add to whatever is in my html 
        newContent2 +=
        `<div class="card" style="width: 18rem;">
              <img class="card-img-top" src="${currentEvent.image}" alt="${currentEvent.location}">
              <div class="card-body">
              <h5 class="card-title">${currentEvent.location} - ${currentEvent.date}</h5>
              <p class="card-text">${currentEvent.type}</p>
              <a href="${currentEvent.buytickets}" class="btn btn-primary">Buy Tickets</a>
              </div>
        </div>`
    }
    newContent2 += `</div>`
    mainContent.innerHTML += newContent2
}
writeToDom("artistEvents");