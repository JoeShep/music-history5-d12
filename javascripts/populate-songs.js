"use strict";

let $ = require('jquery');

function getSongs(callback) {
  $.ajax({
    url: 'https://nss-nc02-ng-music.firebaseio.com/songs/.json',
    dataType: "json",
  }).done(function(songData) {
    console.log("data",songData );
    callback(songData);
  });
}

module.exports = getSongs;