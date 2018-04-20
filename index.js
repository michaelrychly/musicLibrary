
var Library = function (name, creator, playlist){
  name = "";
  creator = "";
  tracks: { // ...
          },

  playlists: [],
};

var Playlist = function(name, track){
  this.name = name;
  tracks = [];
};

var Track = function(title, rating, length){
  this.title = title;
  this.rating = rating;
  this.length = length;
};

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