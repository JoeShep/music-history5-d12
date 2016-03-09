"use strict";

let $ = require('jquery');

function makeSongList(songList) {

  for (var song in songList ) {
    let currentSong = songList[song];
    var $songListItem = $("<li/>", {class: "song-list__item"}),
        $title = $("<span/>", {class: "song-title"}).text(currentSong.title),
        $songListData = $("<ul/>", {class: "song-list__item--data"});

    $songListData.append(
      `<li>${currentSong.artist}</li>
      <li>${currentSong.album}</li>
      <li>${currentSong.year}</li>`);

    $(".song-list").append($songListItem.append($title));
    $(".song-list").append($songListItem.append($songListData));
  }
}

module.exports = makeSongList;
