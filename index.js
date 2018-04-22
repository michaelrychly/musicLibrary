
//why can I not do this.playlist.push(thePlaylist)?
const date = require('datejs');

class Library {
  constructor (name, creator, playlist){
    this.name = name;
    this.creator = creator;
    this.playlist = [];
  };

  get name() {
    return this._name;
  }

  get creator() {
    return this._creator;
  }

  get playlist() {
    return this._playlist;
  }

  set name(theName) {
    if(theName !== "") {
      this._name = theName;
    } else {
      throw "The name can not be empty!";
    }
  }

  set creator(theCreator) {
    if(theCreator !== "") {
      this._creator = theCreator;
    } else {
      throw "The creator can not be empty!";
    }
  }

  set playlist(thePlaylist) {
    if(thePlaylist !== "") {
      //this.playlist.push(thePlaylist);
      this._playlist = thePlaylist;
    } else {
      throw "The playlist can not be empty!";
    }
  }
}

class Playlist {
  constructor(name, track){
    this.name = name;
    this.track = [];
  };

  get name() {
    return this._name;
  }

  get tracks() {
    return this.track;
  }

  set name(theName) {
    if(theName !== "") {
      this._name = theName;
    } else {
      throw "The name can not be empty!";
    }
  }

  set tracks(theTrack) {
    if(theTrack !== "") {
      this.track.push(theTrack);
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

  set rating(theRating) { // Sets this._email, but only if email is valid
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
  this.track.map((singleTrack) => {
    ratingsOfTracks += singleTrack.rating;
    numberOfTracks += 1;
  })
  return ratingsOfTracks / numberOfTracks;
};

//sum the duration of all of its tracks
Playlist.prototype.totalDuration = function (){
  let sumOfTracks = 0;
  this.track.map((singleTrack) => {
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

let firstList = new Playlist;
firstList.name = 'Michaels playlist';
firstList.tracks = partyRock;
firstList.tracks = eyeTiger;
firstList.tracks = everyBreath;
firstList.tracks = rolling;

let secondList = new Playlist;
secondList.name = 'Pauls playlist';
secondList.tracks = feeling;
secondList.tracks = maca;
secondList.tracks = unBreak;
secondList.tracks = howDeep;

let musicLib = new Library("the one and only", "Michael", firstList);
//musicLib.name = "the one and only";
//musicLib.creator = "Michael";
//musicLib.playlist = firstList;
musicLib.playlist = secondList;

//console.log(musicLib.playlist);
console.log(firstList);
console.log(firstList.totalDuration());
console.log(firstList.overallRating());

