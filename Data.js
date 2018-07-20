 const personalPage = {

    PaulMcCartneyInfo:{
        image:"images/PaulImage.jpg",
        Born: " 18 June 1942 ",
        city: "Liverpool", 
        country: "England"
         },
         PaulMcCartneyParents: {
            image: "images/paul-mccartney-family.jpg",
        parentsName: ["James McCartney (father), Mary Mohin (mother)"]},

        PaulMcCartneyWifes: { 
            image: "images/wifes-paul-mccartney-family-7-768x161.jpg",
             wifes:  [" Linda McCartney (1969-1998 till her death)", " Heather Mills (2002-2008)",
        " Nancy Shevell"]
        },

        PaulMcCartneyChildern: {
            image: "images/kids.jpg",
            
            childern: [" Mary McCartney (daughter with Linda McCartney)",
            " Stella McCartney (daughter with Linda McCartney)",
            " James Louis McCartney (son with Linda McCartney)",
            " Heather McCartney (adopted)",
            " Beatrice Milly McCartney (daughter with Heather Mills)"]
            
             
             }



 }

 const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
} 
saveDatabase (personalPage, "personalInfo");

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
console.log(loadDatabase("personalInfo"));


