"use strict";

let $ = require('jquery'),
    makeSongList = require("./data-interaction");

function getSongs(callback) {
  $.ajax({
    url: 'https://nss-nc02-ng-music.firebaseio.com/songs/.json',
    dataType: "json",
  }).done(function(songData) {
    console.log("data",songData );
    callback(songData);
  });
}

function deleteSong(songId) {
  console.log("song id", songId );
  $.ajax({
    url: `https://nss-nc02-ng-music.firebaseio.com/songs/${songId}.json`,
    method: "DELETE"
  }).done(function() {
    getSongs(makeSongList);
  });
}

module.exports = {
  getSongs,
  deleteSong
};