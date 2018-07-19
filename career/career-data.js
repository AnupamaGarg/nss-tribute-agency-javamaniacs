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
    content1: "Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer-songwriter, multi-instrumentalist, and composer. He gained worldwide fame as the bass guitarist and singer for the rock band the Beatles, widely considered the most popular and influential group in the history of pop music. His songwriting partnership with John Lennon was the most successful of the post-war era. After the group disbanded in 1970, he pursued a solo career and formed the band Wings with his first wife, Linda, and Denny Laine.",
    content2 :"McCartney is one of the most successful composers and performers of all time. More than 2,200 artists have covered his Beatles song 'Yesterday', making it one of the most covered songs in popular music history. Wings' 1977 release 'Mull of Kintyre' is one of the all-time best-selling singles in the UK. A two-time inductee into the Rock and Roll Hall of Fame (as a member of the Beatles in 1988, and as a solo artist in 1999), and an 18-time Grammy Award winner, McCartney has written, or co-written, 32 songs that have reached number one on the Billboard Hot 100, and as of 2009 he has 25.5 million RIAA-certified units in the United States. McCartney, Lennon, George Harrison and Ringo Starr all received appointment as Members of the Order of the British Empire in 1965 and, in 1997, McCartney was knighted for services to music. McCartney is also one of the wealthiest musicians in the world, with an estimated net worth of US$1.2 billion."
}

//Skill data
const guitar = {
    skill: "Playing Guitar",
    description: "Paul has been playing guitar for pretty much his entire life.",
    img: "img/guitar.svg"
}

const writing = {
    skill: "Songwriting",
    description: "He's written millions of great songs.",
    img: "img/piano.svg"
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
    about: "The Fireman is the experimental music duo of Paul McCartney and Youth formed in the early 1990s. Their music catalogue ranges from rock to electronica, evolving over more than two decades and three albums. Although officially anonymous until 2008 with the release of the album Electric Arguments, the group members' names had been known to the public since soon after the release of their first album."
}

//Collaborations
const kanye = {
    name: "Kanye West",
    image: "img/kanye.jpg"
}

const michael = {
    name: "Michael Jackson",
    image: "img/michael.jpg"
}

const stevie = {
    name: "Stevie Wonder",
    image: "img/stevie.jpg"
}

//Awards
const award1 = {
    award : "Best Pop Performance",
    song: "Band on the Run",
    year: "1975"
}

const award2 = {
    award: "Best Rock Song",
    song: "Cut Me Some Slack",
    year: "2014"
}

const award3 = {
    award: "Song of the Year",
    song: "Michelle",
    year: "1967"
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