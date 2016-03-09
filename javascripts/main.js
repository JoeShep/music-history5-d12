"use strict";

let $ = require('jquery'),
    getSongs = require("./populate-songs"),
    makeSongList = require("./dom-access");

getSongs(makeSongList);
