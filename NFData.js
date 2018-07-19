let events = {

    artistEvents: [
        {
            image: "images/grimeys.png",
            date: "August 3, 2018",
            location: "Grimey's",
            type: "Cover Artist Preforming Paul McCartney's Hit Singles",
            buytickets: "https://ticketfly.tickets-online.com/",
            relevance: "Relevance to artist 6 out of 10"
        },
        {
            image: "images/bridgestone.jpeg",
            date: "September 17, 2018",
            location: "Bridgestone",
            type: "Beatles Convention Cosplay Welcomed",
            buytickets: "https://www.ticketmaster.com/?tm_link=tm_homeA_logo",relevance: "Relevance to artist 8 out of 10"
        },
        {
            image: "images/MMW.jpeg",
            date: "November 30, 2018",
            location: "Marathon Music Works",
            type: "Drinks and Karaoke to Paul McCartney",
            buytickets: "https://gametime.co/",
            relevance: "Relevance to artist 3 out of 10"
        }
    ],
    artistHeadlines: [
        {
            image: "images/lifemag.jpeg",
            date: "November 11, 1971",
            location: "Los Angeles, CA",
            title: "The Beatles Experience",
            content: "PAUL: 'The whole Beatle thing -- it's like it was all years ago -- like going back a distance more than anything. And that's the whole point. The Beatles are really finished, over with, and it's just each of us alone now, living our lives the way we choose. I think while the Beatles were on -- I can't really use any other word -- while they were just on, there was no question of any of these normal hangups interfering with it because we just had an understanding. It's like a married couple. When we started off we were all aiming for pretty much the same thing. I think the troubles really began when we weren't aiming anymore for the same thing, which began, I think, when we stopped touring in 1966. During the making of the White Album, Ringo left the group saying he wasn't 'getting through' to the rest of us. But he came back in two days. By the time we made Abbey Road, John and I were openly critical of each other's music and I felt John wasn't much interested in performing anything he hadn't written himself. When we made the 'Let It Be' album, George walked out over a row about the performance of some songs -- and said he was leaving the group. A few days later there was a meeting at Ringo's house, and he agreed to come back at least until the recording was finished.",
            relevance: "Relevance to artist 10 out of 10"
        }, 
        {
            image: "images/newsPaper.jpeg",
            date: "June 22, 2018",
            location: "New York, NY",
            title: "The Playlist: Paul McCartney’s Smooth Tunes, and 13 More New Songs",
            content: "Paul McCartney still makes everything sound easy on the two-sided single that previews  “Egypt Station,” his album due in September. “Come on to Me” is a jovial four-chord ditty about a flirtatious glance, promising, “If you come on to me/Well I’ll come on to you.” It starts out with a basic guitar-and-drum stomp recalling the home-recorded charms of his 1970 solo debut, “McCartney,” but by the time it’s done the track has piled on horns, two-fisted piano, an electric sitar and a bunch of gleefully whooping McCartneys. “I Don’t Know” flips to melancholy and reassurance. Over stately piano chords hinting at both “Hey Jude” and “A Day in the Life,” Mr. McCartney contemplates mortality and pain while still trying to offer love and strength. Its refrain is “What am I doing wrong? I don’t know”; at “wrong,” it skips a beat.",
            relevance: "Relevance to artist 10 out of 10"
        },
        {
            image: "images/beatles.jpeg",
            date: "Jun 15, 2018",
            location: "Liverpool, England",
            title: "Paul McCartney, British Musician",
            content: "Paul McCartney, in full Sir James Paul McCartney, (born June 18, 1942, Liverpool, England), British vocalist, songwriter, composer, bass player, poet, and painter whose work with the Beatles in the 1960s helped lift popular music from its origins in the entertainment business and transform it into a creative, highly commercial art form. He is also one of the most popular solo performers of all time in terms of both sales of his recordings and attendance at his concerts.",
            relevance: "Relevance to artist 9 out of 10"
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