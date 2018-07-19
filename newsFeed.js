// This creates a div and gives it the class of "container"
// const createContainer = () => {
//      let div = document.createElement("div");
//      div.className("container");
// }
let mainContent = document.getElementById("main-content");
mainContent.innerHTML += `<h2>Articles</h2>`



function writeMoreToDom(items, arg1, arg2, arg3, arg4, arg5, arg6) {

    

    for (let i = 0; i < events[items].length; i++) {
        let currentEvent = events[items][i];
        console.log("Up Coming Events", items);
        mainContent.innerHTML +=
            `<div class='items'>
                <img src="${currentEvent[arg1]}" alt="${currentEvent[arg2]}"> 
                <h2>${currentEvent[arg2]}</h2>
                <h3>${currentEvent[arg3]} - ${currentEvent[arg4]}</h3>
                <p>${currentEvent[arg5]}</p>
                <p>${currentEvent[arg6]}</p>
                
            </div>`;

        console.log(events[items][i]);
    }
}
writeMoreToDom("artistHeadlines", "image", "title", "date", "location", "content", "relevance");


function writeToDom(items) {

    // This variable is holding the spot I want to target/print to later, in my html
    // let mainContent = document.getElementById("main-content");
    // this loop runs though the things in the key I passed my function. Using [] for the items instead of items. tells it to evaluate what is in there instead of trying to find an items key.
    for (let i = 0; i < events[items].length; i++) {
        // currentItem variable it holding the results of my loop.
        let currentEvent = events[items][i];
    
        console.log("Up Coming Events", items);
        // Using my variable target to enter in my html using += so it will add to whatever is in my html 
        mainContent.innerHTML +=
            `<div class='Events'> <img src="${currentEvent.image}"> 
           <h4> ${currentEvent.location} ${currentEvent.date}</h2> <p>${currentEvent.type}</p> <p><a href="${currentEvent.buytickets}">Buy Tickets</a></p> <p>${currentEvent.relevance}</p></div>`;

        console.log(events[items][i]);
    }
}
// I can pass my variable any key I want
writeToDom("artistEvents");


