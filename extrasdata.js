 // Define the database as an object -->
        const TourDatabase = {}
        
// <!-- Define the arrays (a.k.a. tables) in the database to store each type of items -->
       
    TourDatabase.TourDates = []

 // city  and dates objects -->
        const Quebec = {
            city: "Quebec",
            date: "9-17-18",
        }

        const Montreal = {
            city: "Montreal",
            date: "9-20-18",
        }

        const Winnipeg = {
            city: "Winnipeg",
            date: "9-28-18",
        }

        const Edmonton = {
            city: "Edmonton",
            date: "9-30-18",
        }

        const Liverpool = {
            city: "Liverpool",
            date: "12-12-18",
        }

        const Glascow = {
            city: "Glascow",
            date: "12-14-18",
        }

        const London = {
            city: "London",
            date: "12-16-18",
        }
       

        TourDatabase.TourDates.push(Quebec, Montreal, Winnipeg, Edmonton, Liverpool, Glascow, London)
       

        console.log(TourDatabase)
       

        const saveDatabase = function (localStorageKey, TourDatabase) {
            /*
                Convert the Object into a string.
            */
            const stringifiedDatabase = JSON.stringify(TourDatabase)
        
            /*
                Create a key in local storage, and store the string
                version of your inventory database as the value
            */
            localStorage.setItem(localStorageKey, stringifiedDatabase)
        }

        saveDatabase("Tour" , TourDatabase );

        const loadDatabase = function (localStorageKey) {
            // Get the string version of the database
            const databaseString = localStorage.getItem(localStorageKey)
        
            // Use JSON.parse() to convert the string back into an object
            return JSON.parse(databaseString)
        }
        console.log(loadDatabase("Tour"));
        
        