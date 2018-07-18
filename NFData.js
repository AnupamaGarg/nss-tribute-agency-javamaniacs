let events = {
    artistEvents: [
        {
            image: "images/grimeys.png",
            date: "8/03/2018",
            location: "Grimey's",
            collaborators: "The Lady Bugs",
            buytickets: "https://ticketfly.tickets-online.com/"
        },
        {
            image: "images/bridgestone",
            date: "9/17/2018",
            location: "Bridgestone",
            collaborators: "The Beatles",
            buytickets: "https://www.ticketmaster.com/?tm_link=tm_homeA_logo"
        },
        {
            image: "images/MMW.jpeg",
            date: "11/30/2018",
            location: "Marathon Music Works",
            collaborators: "Kanye West",
            buytickets: "https://gametime.co/"
        }
    ]
}

const saveDatabase = function (databaseObject, localStorageKey) {
    /* Convert the Object into a string. */
    let stringifiedDatabase = JSON.stringify(databaseObject)
    /* Create a key in local storage, and store the string
        version of your inventory database as the value */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(events, "Up Coming Events")

let parsedObject = JSON.parse(localStorage.getItem("Up Coming Events"))

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}