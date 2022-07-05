const songs = require("songs");

const chosenSong = songs.getRandomSong();
console.log(`Escuche ${chosenSong.name} de ${chosenSong.author}`);
const favouriteSong = songs.getFavouriteSong();
console.log(`Mi canción favorita es ${favouriteSong.name} de ${favouriteSong.author}`)