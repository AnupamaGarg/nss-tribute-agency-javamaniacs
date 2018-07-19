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
    description: "Paul has been playing guitar his entire life.",
    img: "img/electric-guitar.svg"
}

const writing = {
    skill: "Songwriting",
    description: "He's written millions of great songs.",
    img: "img/vinyl.svg"
}

const singing = {
    skill: "Singing",
    description: "Mr. McCartney has a mean set of pipes.",
    img: "img/microphone.svg"
}

//Works data
const quarrymen = {
    bandName: "The Quarrymen",
    about: "The Quarrymen are a British skiffle rock and roll group which eventually evolved into the Beatles in 1960. Originally consisting of Lennon and several schoolfriends, the Quarrymen took their name from a line in the school song of Quarry Bank High School, which they attended. Lennon's mother, Julia Lennon, taught her son to play the banjo and then showed Lennon and Eric Griffiths how to tune their guitars in a similar way to the banjo, and taught them simple chords and songs."
}

const beatles = {
    bandName: "The Beatles",
    about: "The Beatles were an English rock band formed in Liverpool in 1960. With members John Lennon, Paul McCartney, George Harrison and Ringo Starr, they became widely regarded as the foremost and most influential music band in history Rooted in skiffle, beat and 1950s rock and roll, the Beatles later experimented with several musical styles, ranging from pop ballads and Indian music to psychedelia and hard rock, often incorporating classical elements and unconventional recording techniques in innovative ways."
}

const wings = {
    bandName: "Wings",
    about: "Paul McCartney and Wings, also known simply as Wings, were a rock band formed in 1971 by former Beatle Paul McCartney with his wife Linda on keyboards, session drummer Denny Seiwell, and former Moody Blues guitarist Denny Laine. Wings were noted for frequent personnel changes as well as commercial success, going through three lead guitarists and four drummers. However, the core trio of the McCartneys and Laine remained intact throughout the group's existence."
}

const fireman = {
    bandName: "The Fireman",
    about: "The Fireman is the experimental music duo of Paul McCartney and Youth formed in the early 1990s. Their music catalogue ranges from rock to electronica, evolving over more than two decades and three albums. Although officially anonymous until 2008 with the release of the album Electric Arguments,[1] the group members' names had been known to the public since soon after the release of their first album."
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
careerDatabase.skills.push(guitar, writing, singing);
careerDatabase.works.push(quarrymen, beatles, wings, fireman);
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