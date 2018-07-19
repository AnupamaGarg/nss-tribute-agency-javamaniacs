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
introText.innerHTML = careerDatabase.intro[0].content;

introHeader.appendChild(introText);

const skillContainer = createDiv();
skillContainer.classList.add("bg-secondary", "py-1", "my-4");
careerContent.appendChild(skillContainer);

//Skills section
const skillsHeader = createContainer();
skillsHeader.classList.add("text-light")
skillsHeader.innerHTML = `<h2>Skills</h2>`;

skillContainer.appendChild(skillsHeader)

const skills = createContainer();
skills.classList.add("bg-secondary", "my-3");
skills.innerHTML = `<div class="card-deck border-0 py-1 text-light">
<div class="card border-0 bg-transparent">
  <img class="card-img-top icon mx-auto" src=${careerDatabase.skills[0].img} alt="Card image cap">
  <div class="card-body pb-0">
    <h5 class="card-title text-center">${careerDatabase.skills[0].skill}</h5>
    <p class="card-text">${careerDatabase.skills[0].description}</p>
  </div>
</div>
<div class="card border-0 bg-transparent">
  <img class="card-img-top icon mx-auto" src=${careerDatabase.skills[1].img} alt="Card image cap">
  <div class="card-body text-center pb-0">
    <h5 class="card-title">${careerDatabase.skills[1].skill}</h5>
    <p class="card-text">${careerDatabase.skills[1].description}</p>
  </div>
</div>
<div class="card border-0 text-center bg-transparent">
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



works.innerHTML = `<div class="card-group shadows my-3">
    <div class="card">
            <div class="card-body">
                <h5 class="card-title">${careerDatabase.works[0].bandName}</h5>
                <p class="card-text">${careerDatabase.works[0].about}</p>
            </div>
    </div>
        <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${careerDatabase.works[1].bandName}</h5>
                    <p class="card-text">${careerDatabase.works[1].about}</p> 

                </div>
    </div>
            <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${careerDatabase.works[2].bandName}</h5>
                        <p class="card-text">${careerDatabase.works[2].about}</p>
                    </div>
    </div>
        <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${careerDatabase.works[3].bandName}</h5>
                        <p class="card-text">${careerDatabase.works[3].about}</p>
                    </div>
        </div>
            </div>`;





const cardColumns = createContainer();
const collabs = createDiv();
collabs.innerHTML = `<h2 class = "container">Collaborations</h2>`;

careerContent.appendChild(collabs);
collabs.appendChild(cardColumns);

cardColumns.classList.add("my-3");
cardColumns.innerHTML = `<div class="card-columns bg-info p-2">
<div class="card">
  <img class="card-img-top" src="https://placeimg.com/225/160/animals" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title that wraps to a new line</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</div>
<div class="card p-3">
  <blockquote class="blockquote mb-0 card-body">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer">
      <small class="text-muted">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </small>
    </footer>
  </blockquote>
</div>
<div class="card">
  <img class="card-img-top" src="https://placeimg.com/225/160/nature" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card bg-primary text-white text-center p-3">
  <blockquote class="blockquote mb-0">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
    <footer class="blockquote-footer">
      <small>
        Someone famous in <cite title="Source Title">Source Title</cite>
      </small>
    </footer>
  </blockquote>
</div>
<div class="card text-center">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This card has a regular title and short paragraphy of text below it.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card">
  <img class="card-img" src="https://placeimg.com/225/260/arch" alt="Card image">
</div>
<div class="card p-3 text-right">
  <blockquote class="blockquote mb-0">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer">
      <small class="text-muted">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </small>
    </footer>
  </blockquote>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
</div>`

careerContent.appendChild(cardColumns);