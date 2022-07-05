class Song {
    constructor(name, author) {
        this.name = name;
        this.author = author;
    }
}

const allSongs = [
    new Song("Purple Rain", "Prince"),
    new Song("Beat It", "Michael Jackson"),
    new Song("I Wanna Dance with Somebody", "Whitney Houston"),
    new Song("Straight Outta Compton", "NWA"),
    new Song("Fight the Power", "Public Enemy"),
    new Song("Express Yourself", "Madonna"),
];

exports.getRandomSong = () => {
    return allSongs[Math.floor(Math.random() * allSongs.length)];
}

exports.allSongs = allSongs;

exports.getFavouriteSong = () => {
    return allSongs[2];
}

