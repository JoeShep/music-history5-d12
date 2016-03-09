"use strict";

let $ = require('jquery'),
    db = require("./db-interaction"),
    makeSongList = require("./data-interaction");

db.getSongs(makeSongList);

$(document).on("click", ".delete-btn", function () {
  console.log("btn clicked", this.id);
  db.deleteSong(this.id);
});
