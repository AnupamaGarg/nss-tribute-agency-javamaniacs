const artistCollaborations = {}


artistCollaborations.collaboration=[];



const collab1 ={
artist:' Micheal Jackson',
song: '"Say Say Say" and "The Man" by Paul McCartney with Michael Jackson.',
album:"Thriller"}

const collab2 ={
artist: 'Johnny Cash',
album:'Water from the Wells of Home (1988)',
song: '"New Moon over Jamaica", a duet by Johnny Cash and Paul McCartney (with harmonies by June Carter Cash, Linda McCartney, and Tom T. Hall).'}

const collab3={
artist:"Elvis Costello",
album:'Flowers in the Dirt (1989)',
song:' "You Want Her Too", a duet by Paul McCartney and Elvis Costello one of their songwriting collaborations also on "My Brave Face" and "That Day is Done"'}

const collab4 ={
artist:'Spike (1989)',
album: '"Veronica", a collaboration by Elvis Costello and Paul McCartney.',
song:'" Mojo Filters" (a.k.a. "Paul Weller & Friends")'}

const collab5 ={
artist: 'Carl Perkins',
song:'Go Cat Go (1996),',
album: '"My Old Friend" by Carl Perkins & Paul McCartney.'}

const collab6={
artist: 'Heather Mills',
song:'"Vo!ce" (CD single) (1999)',
album:'The record is credited to "Heather Mills featuring Paul McCartney." McCartney co-wrote the song with Mills, and he provided the backing vocals and guitar.'}

const collab7 ={
artist: 'Lindsay Pagano',
song:'Love & Faith & Inspiration (2001)',
album:'Contains a version of the McCartney composed "So Bad", by Lindsay Pagano with accompanying vocals by Paul McCartney.'}

const collab8 ={
artist:' Lulu',
song:'Together (2002)',
album:'"Inside Thing (Let em In)", a duet by Lulu & Paul McCartney.'}

const collab9 = {
artist:'Brian Wilson',
song:' in Over My Head (2004)',
album:' "A Friend Like You", a duet by Brian Wilson and Paul McCartney.'}

const collab10 = {
artist:' George Michael',
song:'Twentyfive (2006)',
album:' "Heal the Pain" by George Michael and Paul McCartney.'}

const collab11 ={
artist:'Tony Bennett',
song: 'An American Classic (2006)',
album:' "The Very Thought of You", a duet by Tony Bennett and Paul McCartney'}

artistCollaborations.collaboration.push(collab1,collab2,collab3,collab4,collab5,collab6,collab7,collab8,collab9,collab10,collab11);

console.log(artistCollaborations);

function localStoreMe(){
    const sendToStorage = JSON.stringify(artistCollaborations);
    localStorage.setItem("myData",sendToStorage);
}
localStoreMe()

function loadStoreMe (myData){
    const infoToString = localStorage.getItem(myData);
    return JSON.parse(infoToString);
}
    const loadMe=loadStoreMe('myData');
    console.log(loadMe);
    
    let collabs = () => {
        let collabs2 = "";
        for (let i = 0; i < artistCollaborations.collaboration.length; i++) {
        collabs2 += 
                `<div class="card border-0">
                    <div class="card-body">
                        <h5 class="card-title">Artist: ${ artistCollaborations.collaboration[i].artist}</h5>
                        <p class="card-text">Song: ${ artistCollaborations.collaboration[i].song}</p>
                        <p class="card-text">Album: ${ artistCollaborations.collaboration[i].album}</p>
                    </div>
                </div>`
    }
    return collabs2;
    }
    let newColl= collabs()
    document.getElementById('collabs').innerHTML=newColl;

    

    

    
  