//Initalizes the databse object which will hold all of the info
const careerDatabase = {};

//Initilize all of the tables (i.e. arrays) that you want to use in your database.
careerDatabase.intro = [];
careerDatabase.skills = [];
careerDatabase.works = [];
careerDatabase.collabs = [];
careerDatabase.awards = [];

/*****************
Creating that data
******************/

//Intro paragraph data
const introP = {
    title: "Intro",
    content: "Lorem ipsum dolor amet af wayfarers fam hoodie aesthetic. Aesthetic selfies adaptogen stumptown fashion axe. Chillwave tacos prism keytar umami taxidermy hell of gentrify small batch wolf pitchfork narwhal. Migas succulents street art beard hell of gluten-free. Hashtag pok pok chartreuse mustache vexillologist freegan vaporware hammock succulents meggings flexitarian master cleanse narwhal sartorial. Chicharrones typewriter locavore subway tile tumeric stumptown yr 3 wolf moon taxidermy polaroid austin humblebrag twee ethical lumbersexual. Wayfarers bespoke typewriter microdosing freegan fingerstache. Craft beer tilde tattooed, wolf schlitz cliche semiotics vaporware heirloom leggings gastropub. Before they sold out kale chips typewriter, tattooed snackwave fixie enamel pin retro palo santo pabst whatever normcore. Kogi irony offal ethical single-origin coffee adaptogen affogato pinterest prism tousled. Craft beer vape plaid, street art hashtag chartreuse fingerstache trust fund typewriter vice pug. Leggings cornhole tofu tattooed semiotics sustainable, brooklyn waistcoat. Beard fam activated charcoal, green juice single-origin coffee salvia meh crucifix cronut keffiyeh locavore VHS offal godard. Fingerstache copper mug retro post-ironic, deep v etsy yuccie you probably haven't heard of them tbh leggings shabby chic chambray try-hard beard."
}

//Skill data
const guitar = {
    skill: "Playing Guitar",
    description: "Paul has been playing guitar his entire life."
}

const singing = {
    skill: "Singing",
    description: "Mr. McCartney has a mean set of pipes."
}

const writing = {
    skill: "Songwriting",
    description: "He's written millions of great songs."
}

//Works data
const quarrymen = {
    bandName: "The Quarrymen",
    about: "McCartney's first band"
}

const beatles = {
    bandName: "The Beatles",
    about: "The biggest rock band in the world"
}

const wings = {
    bandName: "Wings",
    about: "Paul's band after The Beatles"
}

//Collaborations
const kanye = {
    name: "Kanye West",
    image: ""
}

const michael = {
    name: "Michael Jackson",
    image: ""
}

const stevie = {
    name: "Stevie Wonder",
    image: ""
}

//Awards
const award1 = {
    award : "Best Pop Performance",
    song: "Band on the Run"
}

const award2 = {
    award: "Best Rock Song",
    song: "Cut Me Some Slack"
}

const award3 = {
    award: "Song of the Year",
    song: "Michelle"
}

//Push data in to the appropriate array
careerDatabase.intro.push(introP);
careerDatabase.skills.push(guitar, singing, writing);
careerDatabase.works.push(quarrymen, beatles, wings);
careerDatabase.collabs.push(kanye, michael, stevie);
careerDatabase.awards.push(award1, award2, award3);

//Creates function to save the database to local storage
const saveDatabase = function (databaseObject, localStorageKey) {
    //Convert the Object into a string.
    const stringifiedDatabase = JSON.stringify(databaseObject)
    //Create a key in local storage, and store the string
    //version of your inventory database as the value
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

//Creates function to load database from local storage
const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)
    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

// Persist the database to localStorage
saveDatabase(careerDatabase, "Career");

//Loads database data and stores it in the variable career
const career = loadDatabase("Career");
