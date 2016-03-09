"use strict";

let $ = require('jquery');

function makeSongList(songList) {
  $(".song-list").html("");
  for (var song in songList ) {
    let currentSong = songList[song];
    var $songListItem = $(`<li class="song-list__item"/>`),
        $title = $("<span/>", {class: "song-title"}).text(currentSong.title),
        $songListData = $("<ul/>", {class: "song-list__item--data"}),
        $songListDelete = $(`<a id="${song}" class="delete-btn waves-effect waves-light btn">delete</a>`);

    $songListData.append(
      `<li>${currentSong.artist}</li>
      <li>${currentSong.album}</li>
      <li>${currentSong.year}</li>`);

    $(".song-list").append($songListItem.append($title));
    $(".song-list").append($songListItem.append($songListData).append($songListDelete));
  }
}

module.exports = makeSongList;
