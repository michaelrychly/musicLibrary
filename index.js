
const date = require('datejs');

class Library {
  constructor (name, creator){
    this.names = name;
    this.creators = creator;
    this.playlists = [];
  };

  get name() {
    return this._names;
  }

  get creator() {
    return this._creators;
  }

  get playlist() {
    return this._playlists;
  }

  set name(theName) {
    if(theName !== "") {
      this._names = theName;
    } else {
      throw "The name can not be empty!";
    }
  }

  set creator(theCreator) {
    if(theCreator !== "") {
      this._creators = theCreator;
    } else {
      throw "The creator can not be empty!";
    }
  }

  set playlist(thePlaylist) {
    if(thePlaylist !== "") {
      this.playlists.push(thePlaylist);
    } else {
      throw "The playlist can not be empty!";
    }
  }
}

class Playlist {
  constructor(name){
    this.names = name;
    this.tracks = [];
  };

  get name() {
    return this._names;
  }

  get track() {
    return this._tracks;
  }

  set name(theName) {
    if(theName !== "") {
      this._names = theName;
    } else {
      throw "The name can not be empty!";
    }
  }

  set track(theTrack) {
    if(theTrack !== "") {
      this.tracks.push(theTrack);
    } else {
      throw "The track can not be empty!";
    }
  }
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
    if(theTitle !== "") {
      this._title = theTitle;
    } else {
      throw "The title can not be empty!";
    }
  }

  set rating(theRating) {
    // Sets this._email, but only if email is valid
    if (String(theRating).match(/^[1-5]$/)) {
      this._rating = theRating;
    }
    else {
      throw "Rating must be between 1 and 5";
    }
  }

  set length(theLength) {
    if (String(theLength).match(/^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$/)) {
      this._length = theLength;
    }
    else {
      throw "Length must be in seconds, e.g. 120";
    }
  }
}

//calculate the rating by averaging the rating of its tracks
Playlist.prototype.overallRating = function (){
  let ratingsOfTracks = 0;
  let numberOfTracks = 0;
  this.tracks.map((singleTrack) => {
    ratingsOfTracks += singleTrack.rating;
    numberOfTracks += 1;
  })
  return ratingsOfTracks / numberOfTracks;
};

//sum the duration of all of its tracks
Playlist.prototype.totalDuration = function (){
  let sumOfTracks = 0;
  this.tracks.map((singleTrack) => {
    sumOfTracks += singleTrack.length;
  })
  return (new Date).clearTime().addSeconds(sumOfTracks).toString('H:mm:ss');
};

//create instances of one library and then add new tracks and playlists to the library
let partyRock = new Track('Party Rock Anthem', 5, 120);
let feeling = new Track('I Gotta Feeling', 4, 155);
let maca = new Track('Macarena', 3, 90);
let unBreak = new Track('Un-Break My Heart', 4, 140);
let doIt = new Track('(Everything I Do) I Do It For You', 2, 111);
let howDeep = new Track('How Deep Is Your Love', 1, 100);
let eyeTiger = new Track('Eye Of The Tiger', 1, 85);
let everyBreath = new Track('Every Breath You Take', 2, 133);
let rolling = new Track('Rolling In The Deep', 1, 205);

let firstList = new Playlist('Michaels playlist');
firstList.track = partyRock;
firstList.track = eyeTiger;
firstList.track = everyBreath;
firstList.track = rolling;

let secondList = new Playlist('Pauls playlist');
secondList.track = feeling;
secondList.track = maca;
secondList.track = unBreak;
secondList.track = howDeep;

let musicLib = new Library("the one and only", "Michael");
musicLib.playlist = firstList;
musicLib.playlist = secondList;

console.log(musicLib);
console.log(firstList.totalDuration());
console.log(firstList.overallRating());

