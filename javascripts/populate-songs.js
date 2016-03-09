"use strict";

let $ = require('jquery');

function getSongs(callback) {
  $.ajax({
    url: 'songs.json',
    dataType: "json",
  }).done(function(songData) {
    callback(songData.songs);
  });
}

module.exports = getSongs;