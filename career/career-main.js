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
introHeader.innerHTML = `<h2 class = "text-center">${careerDatabase.intro[0].title}</h2>`;
//Appends the introHeader to the page as a child of the careerContent article
careerContent.appendChild(introHeader)

const introText = createContainer();
introText.innerHTML = `<p>${careerDatabase.intro[0].content1}</p>` + `<p>${careerDatabase.intro[0].content2}</p>`;

introHeader.appendChild(introText);

const skillContainer = createDiv();
skillContainer.classList.add("bg-secondary", "py-1", "my-4");
careerContent.appendChild(skillContainer);

//Skills section
const skillsHeader = createContainer();
skillsHeader.classList.add("text-light")
skillsHeader.innerHTML = `<h2 class = "text-center">Skills</h2>`;

skillContainer.appendChild(skillsHeader)

const skills = createContainer();
skills.classList.add("bg-secondary", "my-3");


skills.innerHTML = `
<div class="card-deck border-0 py-1 text-light">
    <div class="card border-0 bg-transparent">
        <img class="card-img-top icon mx-auto" src=${careerDatabase.skills[0].img} alt="Card image cap">
        <div class="card-body pb-0">
            <h5 class="card-title">${careerDatabase.skills[0].skill}</h5>
            <p class="card-text">${careerDatabase.skills[0].description}</p>
        </div>
    </div>
    <div class="card border-0 bg-transparent">
        <img class="card-img-top icon mx-auto" src=${careerDatabase.skills[1].img} alt="Card image cap">
        <div class="card-body pb-0">
            <h5 class="card-title">${careerDatabase.skills[1].skill}</h5>
            <p class="card-text">${careerDatabase.skills[1].description}</p>
        </div>
    </div>
    <div class="card border-0 bg-transparent">
        <img class="card-img-top icon mx-auto" src=${careerDatabase.skills[2].img} alt="Card image cap">
        <div class="card-body pb-0">
            <h5 class="card-title">${careerDatabase.skills[2].skill}</h5>
            <p class="card-text">${careerDatabase.skills[2].description}</p>
        </div>
    </div>
</div>`

skillContainer.appendChild(skills);


//Creates the 'works' cards
const works = createContainer();
const worksHeader = createContainer();
worksHeader.innerHTML = `<h2 class = "text-right">Notable Work</h2>`;
//Appends works cards to the page
careerContent.appendChild(worksHeader);
worksHeader.appendChild(works)

// works.innerHTML = 
// `<div class="card-group shadows my-3 ">
//     <div class="card">
//             <div class="card-body">
//                 <h5 class="card-title">${careerDatabase.works[0].bandName}</h5>
//                 <p class="card-text">${careerDatabase.works[0].about}</p>
//             </div>
//     </div>
//         <div class="card">
//                 <div class="card-body">
//                     <h5 class="card-title">${careerDatabase.works[1].bandName}</h5>
//                     <p class="card-text">${careerDatabase.works[1].about}</p> 

//                 </div>
//     </div>
//             <div class="card">
//                     <div class="card-body">
//                         <h5 class="card-title">${careerDatabase.works[2].bandName}</h5>
//                         <p class="card-text">${careerDatabase.works[2].about}</p>
//                     </div>
//     </div>
//         <div class="card">
//                     <div class="card-body">
//                         <h5 class="card-title">${careerDatabase.works[3].bandName}</h5>
//                         <p class="card-text">${careerDatabase.works[3].about}</p>
//                     </div>
//         </div>
// </div>`;

let worksLoop = () => {
    let loop = "";
    for (let i = 0; i < careerDatabase.works.length; i++) {
    loop += 
            `<div class="card">
                <div class="card-body">
                    <h5 class="card-title">${careerDatabase.works[i].bandName}</h5>
                    <p class="card-text">${careerDatabase.works[i].about}</p>
                </div>
            </div>`
}
return loop;
}

let worksCards = worksLoop();
let worksContent = `<div class="card-group shadows my-3 rounded">${worksCards}</div>`
let worksParent = createContainer();
worksParent.innerHTML = worksContent;

careerContent.appendChild(worksParent);


const collabCards = createContainer();
const collabsTitle = createDiv();
collabsTitle.classList.add("my-5");
collabsTitle.innerHTML = `<h2 class = "container">Collaborations</h2>`;

careerContent.appendChild(collabsTitle);
collabsTitle.appendChild(collabCards);

collabCards.classList.add("my-3");
collabCards.innerHTML = `<div class="card-columns bg-dark p-2 my-3 rounded">
<div class="card">
  <img class="card-img-top" src="${careerDatabase.collabs[0].image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${careerDatabase.collabs[0].name}</h5>
    <p class="card-text">Lorem ipsum dolor amet four dollar toast synth pabst, shabby chic kogi direct trade flexitarian fam. Yr gastropub chambray adaptogen. Food truck af offal, godard celiac vape knausgaard drinking vinegar butcher roof party normcore. Cloud bread tilde paleo coloring book meditation blog.</p>
  </div>
</div>
<div class="card p-3 bg-danger text-white">
  <blockquote class="blockquote mb-0 card-body text-white">
    <p>If he ever runs for president, Paul's got my vote</p>
    <footer class="blockquote-footer text-white">
      <small class="">
        Someone famous in <cite title="Source Title">A magazine</cite>
      </small>
    </footer>
  </blockquote>
</div>
<div class="card">
  <img class="card-img-top" src="${careerDatabase.collabs[1].image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${careerDatabase.collabs[1].name}</h5>
    <p class="card-text">Lorem ipsum dolor amet venmo raclette cornhole lo-fi neutra lyft pitchfork pabst. Bicycle rights taiyaki street art tacos affogato, organic celiac kitsch authentic everyday cliche bushwick kickstarter semiotics adaptogen edison bulb. Squid pok pok glossier craft beer poutine shaman palo santo chillwave</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card bg-warning text-white text-center p-3">
  <blockquote class="blockquote mb-0 text-white">
    <p>Paul is the greatest musician I have ever worked with.</p>
    <footer class="blockquote-footer text-white">
      <small>
        Some famous guy
      </small>
    </footer>
  </blockquote>
</div>
<div class="card">
  <img class="card-img" src="img/dave.png" alt="Card image">
</div>
<div class="card p-3 text-right">
  <blockquote class="blockquote mb-0">
    <p>He founded The Beatles. How much cooler can you get?</p>
    <footer class="blockquote-footer">
      <small class="text-muted">
        Someone famous on <cite title="Source Title">some website</cite>
      </small>
    </footer>
  </blockquote>
</div>
<div class="card">
<img class="card-img-top" src="${careerDatabase.collabs[2].image}">
  <div class="card-body">
    <h5 class="card-title">${careerDatabase.collabs[2].name}</h5>
    <p class="card-text">Lorem ipsum dolor amet lo-fi neutra lyft pitchfork pabst. Bicycle rights taiyaki street art tacos affogato, organic celiac kitsch authentic everyday carry small batch cornhole. Literally pabst Tote bag taxidermy bicycle rights humblebrag vegan chartreuse.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card bg-primary text-white text-right p-3">
  <blockquote class="blockquote mb-0 text-white">
    <p>He's the man</p>
    <footer class="blockquote-footer text-white">
      <small>
        Another famous person
      </small>
    </footer>
  </blockquote>
</div>
</div>`

//Creates the div and stores it in introHeader
const awardHeader = createContainer();
//Gets value from database and sets it to the value of the introHeader
awardHeader.innerHTML = `<h2 class = "text-center">Awards</h2>`;
//Appends the introHeader to the page as a child of the careerContent article
careerContent.appendChild(awardHeader)

let awardsLoop = () => {
    let loop = "";
    for (let i = 0; i < careerDatabase.awards.length; i++) {
    loop += 
            `<div class="card border-0">
                <div class="card-body">
                    <h5 class="card-title">Award: ${careerDatabase.awards[i].award}</h5>
                    <p class="card-text">Song: ${careerDatabase.awards[i].song}</p>
                </div>
            </div>`
}
return loop;
}

let awardCards = awardsLoop();
let awardContent = `<div class="card-group my-3">${awardCards}</div>`
let awardParent = createContainer();
awardParent.innerHTML = awardContent;

careerContent.appendChild(awardParent);