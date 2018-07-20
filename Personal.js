const databaseString = localStorage.getItem("personalInfo")
const data = JSON.parse(databaseString)



var mainContent = document.querySelector(".showinfo")
let PersonalInfo = data.PaulMcCartneyInfo
  console.log(PersonalInfo);  
  console.log(data);


let addPersonalInfo = function(PersonalInfo){

   let PaulInfo = document.querySelector(".personalInfo").innerHTML = `
   <img src = "${PersonalInfo.image}" class="img-fluid " alt="Responsive image">
   <h5 class = "born"><b>Born:    ${PersonalInfo.Born}</b></h5>
   <h5 class = "born"><b>City:    ${PersonalInfo.city}</b></h5>
   <h5 class = "born"><b>Country:    ${PersonalInfo.country}</b></h5>`

 }
 addPersonalInfo(PersonalInfo);
// --------------------------------------------------------parentsInfo----------------


let parents = data.PaulMcCartneyParents
  console.log(parents);  
  console.log(data);


let addparents = function(parents){

   let parentsInfo = document.querySelector(".parents");
   parentsInfo.innerHTML = `<h4 class = "headparents"> <b> Parents </b></h4> <img src="${parents.image}" alt="parent Image" class = "parentsJPG"> <ul class = 
   "parentsName"></ul>`

   for (let index = 0; index <parents.parentsName.length; index++) {
       const parentsboth = parents.parentsName[index];

      document.querySelector(".parentsName").innerHTML += `<li> <b>${parentsboth}</b></li>`
       
   }
 }
  addparents(parents);
// ---------------------------------------------------------wifeInfo-------------------
let wife = data.PaulMcCartneyWifes
  console.log(wife);  
  console.log(data);


let addwife = function(wife){

   let wifeInfo = document.querySelector(".wife");
   wifeInfo.innerHTML = `<h4 class = "headWife"><b> Wives</b> </h4> <img src="${wife.image}" alt="wife Image" class= "wifeJPG"> <ul class = 
   "wifeList"></ul>`

   for (let index = 0; index <wife.wifes.length; index++) {
       const currentWife = wife.wifes[index];

      document.querySelector(".wifeList").innerHTML += `<li> <b>${currentWife}</b></li>`
       
   }
 }
addwife(wife);
// ------------------------------------------------------------childern----------------------
let allChildern = data.PaulMcCartneyChildern;
  console.log(allChildern);  
  console.log(data);


let addChildern = function(allChildern){

   let childernInfo = document.querySelector(".childern");
   childernInfo.innerHTML = `<h4 class = "headchildern"><b> Children </b></h4> <img src="${allChildern.image}" alt="childern Image" childernJPG> <ul class = 
   "childernList"></ul>`

   for (let index = 0; index <allChildern.childern.length; index++) {
       const currentChild = allChildern.childern[index];

      document.querySelector(".childernList").innerHTML += `<li><b> ${currentChild}</b></li>`
       
   }
 }
addChildern(allChildern);