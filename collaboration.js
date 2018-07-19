const artistCollaborations = {}


artistCollaborations.collaboration=[];



const collab1 ={
artist:' Micheal Jackson',
Songs: '"Say Say Say" and "The Man" by Paul McCartney with Michael Jackson.'}

const collab2 ={
artist: 'Johnny Cash',
albulm:'Water from the Wells of Home (1988)',
Songs: '"New Moon over Jamaica", a duet by Johnny Cash and Paul McCartney (with harmonies by June Carter Cash, Linda McCartney, and Tom T. Hall).'}

const collab3={
artist:"Elvis Costello",
albulm:'Flowers in the Dirt (1989)',
Songs:' "You Want Her Too", a duet by Paul McCartney and Elvis Costello one of their songwriting collaborations also on "My Brave Face" and "That Day is Done"'}

const collab4 ={
artist:'Spike (1989)',
songs: '"Veronica", a collaboration by Elvis Costello and Paul McCartney.',
songs:'" Mojo Filters" (a.k.a. "Paul Weller & Friends")'}

const collab5 ={
artist: 'Carl Perkins',
songs:'Go Cat Go (1996),',
albulm: '"My Old Friend" by Carl Perkins & Paul McCartney.'}

const collab6={
artist: 'Heather Mills',
songs:'"Vo!ce" (CD single) (1999)',
albulm:'The record is credited to "Heather Mills featuring Paul McCartney." McCartney co-wrote the song with Mills, and he provided the backing vocals and guitar.'}

const collab7 ={
artist: 'Lindsay Pagano',
songs:'Love & Faith & Inspiration (2001)',
albulms:'Contains a version of the McCartney composed "So Bad", by Lindsay Pagano with accompanying vocals by Paul McCartney.'}

const collab8 ={
artist:' Lulu',
song:'Together (2002)',
albulm:'"Inside Thing (Let em In)", a duet by Lulu & Paul McCartney.'}

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
    
    