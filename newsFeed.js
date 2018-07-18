// This creates a div and gives it the class of "container"
const createContainer = () => {
     let div = document.createElement("div")
     div.className("container")
}



function writeToDom(items) {

    // This variable is holding the spot I want to target/print to later, in my html
    let allMyStuff = document.getElementById("main-content");
    // this loop runs though the things in the key I passed my function. Using [] for the items instead of items. tells it to evaluate what is in there instead of trying to find an items key.
    for (let i = 0; i < events[items].length; i++) {
        // currentItem variable it holding the results of my loop.
        let currentEvent = events[items][i];
    
        console.log("Up Coming Events", items);
        // Using my variable target to enter in my html using += so it will add to whatever is in my html 
        allMyStuff.innerHTML +=
            `<p class='items'> <img src="${currentEvent.image}"> ${currentEvent.date} ${currentEvent.location} ${currentEvent.collaborators} <a href="${currentEvent.buytickets}">Buy Tickets</a> </p>`;

        console.log(events[items][i]);
    }
}
// I can pass my variable any key I want
writeToDom("artistEvents")
