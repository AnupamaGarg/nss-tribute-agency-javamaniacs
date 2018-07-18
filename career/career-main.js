const careerContent = document.getElementById("careerContent");

//Makes a function that creates a div with the class container for Bootstrap layout
const createContainer = () => {
    let container = document.createElement("div");
    container.className = "container";
    return container
}

const createDiv = () => {
    let div = document.createElement("div");
    return div;
}


//Creates the div and stores it in introHeader
const introHeader = createContainer();
//Gets value from database and sets it to the value of the introHeader
introHeader.innerHTML = "<h2>" + careerDatabase.intro[0].title + "</h2>";
//Appends the introHeader to the page as a child of the careerContent article
careerContent.appendChild(introHeader)

const introText = createContainer();
introText.innerHTML = careerDatabase.intro[0].content;

introHeader.appendChild(introText);

//Skills section
const skills = createContainer();

careerContent.appendChild(skills);

const skill1 = createDiv();
const skill2 = createDiv();
const skill3 = createDiv();

skill1.innerHTML = "<h3>" + careerDatabase.skills[0].skill + "</h3>" + "<p>" + careerDatabase.skills[0].description + "</p>";
skills.appendChild(skill1);

skill2.innerHTML = "<h3>" + careerDatabase.skills[1].skill + "</h3>" + "<p>" + careerDatabase.skills[1].description + "</p>";
skills.appendChild(skill2);

skill3.innerHTML = "<h3>" + careerDatabase.skills[2].skill + "</h3>" + "<p>" + careerDatabase.skills[2].description + "</p>";
skills.appendChild(skill3);


//Creates the 'works' cards
const works = createContainer();
works.innerHTML = `<div class="card-group">
    <div class="card">
        <img class="card-img-top" src="https://placeimg.com/251/180/nature" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${careerDatabase.works[0].bandName}</h5>
                <p class="card-text">${careerDatabase.works[0].about}</p>
            </div>
</div>
        <div class="card">
            <img class="card-img-top" src="https://placeimg.com/251/180/arch" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${careerDatabase.works[1].bandName}</h5>
                    <p class="card-text">${careerDatabase.works[1].about}</p>

                </div>
</div>
            <div class="card">
                <img class="card-img-top" src="https://placeimg.com/251/180/tech" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${careerDatabase.works[2].bandName}</h5>
                        <p class="card-text">${careerDatabase.works[2].about}</p>
                    </div>
</div>
            </div>`;

//Appends works cards to the page
careerContent.appendChild(works);
