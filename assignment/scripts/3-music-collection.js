console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

/* first try

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
   collection['title'] = title;
   collection['artist'] = artist;
   collection['Year published'] = yearPublished;
   return collection;
};

addToCollection(myCollection, 'Brat', 'Charli xcx', 2024);
console.log(myCollection);
*/ 

//second try

let myCollection = [];
 
function addToCollection(collection, title, artist, yearPublished) {
    const album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };

    collection.push(album);
    return album;
};

let albumZero = addToCollection(myCollection, 'Brat', 'Charli xcx', 2024);
let albumOne = addToCollection(myCollection, 'Nurture', 'Porter Robinson', 2022);
let albumTwo = addToCollection(myCollection, 'Case study 01', 'Daniel Caeser', 2019);
let albumThree = addToCollection(myCollection, 'Never Enough', 'Daniel Caeser', 2023);
let albumFour = addToCollection(myCollection, 'This wasnt meant for you anyway', 'Lola Young', 2024);
let albumFive = addToCollection(myCollection, 'Take me back to eden', 'Sleep Token', 2023);
console.table(myCollection);

function showCollection(collection) {
  
};

showCollection(myCollection);


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
