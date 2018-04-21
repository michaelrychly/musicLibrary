
class Library {
  constructor (name, creator, playlist){
    name = "";
    creator = "";
    tracks = { // ...
            };

    playlists = [];
  };
}

class Playlist {
  constructor(name, track){
  this.name = name;
  tracks = [];
  };
}

class Track {
  constructor(title, rating, length){
  this.title = title;
  //rating from 1 to 5
  this.rating = rating;
  //length in seconds
  this.length = length;
  };

  get title() {
    return this._title;
  }

  get rating() {
    return this._rating;
  }

  get length() {
    return this._length;
  }

  set title(theTitle) {
    this._title = theTitle;
  }

  set rating(theRating) { // Sets this._email, but only if email is valid
    if (String(theRating).match(/^[1-5]$/)) {
      this._rating = theRating;
    }
    else {
      throw "Rating must be between 1 and 5";
    }
  }

  set length(theLength) {
    this._length = theLength;
  }
}

Library.prototype.addPlaylist = function (){

};

Playlist.prototype.addTrack = function (){

};

//calculate the rating by averaging the rating of its tracks
Playlist.prototype.overallRating = function (){

};

//sum the duration of all of its tracks
Playlist.prototype.totalDuration = function (){

};

//create instances of one library and then add new tracks and playlists to the library
let partyRock = new Track('Party Rock Anthem', 5, 120);
let feeling = new Track('I Gotta Feeling', '4', 155);
let maca = new Track('Macarena', '3', 90);
let unBreak = new Track('Un-Break My Heart', '4', 140);
let doIt = new Track('(Everything I Do) I Do It For You', '2', 111);
let howDeep = new Track('How Deep Is Your Love', '1', 100);
let eyeTiger = new Track('Eye Of The Tiger', '1', 85);
let everyBreath = new Track('Every Breath You Take', '2', 133);
let rolling = new Track('Rolling In The Deep', '1', 205);
console.log(partyRock);
