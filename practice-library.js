/*Task 1: Create Base Class*/

class LibraryItem {
    constructor(title, id, isAvailable = true) {
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }
    checkOut() {
        this.isAvailable = false;
        console.log(`${this.title} has been checked out. Please return in 2 weeks.`)
    }
    returnItem() {
        this.isAvailable = true;
        console.log(`${this.title} has been returned. Thank you!`)
    }
}

/*Task 2: Extend the Base Class*/

class Book extends LibraryItem {
    constructor(title, id, author, genre, isAvailable = true) {
        super(title, id, isAvailable = true)
        this.author = author;
        this.genre = genre;
    }
}

class DVD extends LibraryItem {
    constructor(title, id, director, duration, isAvailable = true) {
        super(title, id, isAvailable = true)
        this.director = director;
        this.duration = duration;
    }
}

class Magazine extends LibraryItem {
    constructor(title, id, issueNumber, publisher, isAvailable = true) {
        super(title, id, isAvailable = true)
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
}

/*Task 3: Instantiate Objects*/

let classic = new Book("Project Hail Mary", 213496, "Andy Weir", "Science-Fiction");
let gamerMag = new Magazine("PC Gamer", 38308, 416, "Future Publishing");
let movies = [
    new DVD("FernGully: The Last Rainforest", 458766, "Bill Kroyer", "76 minutes", false),
    new DVD("Hook", 458797, "Steven Spielberg", "142 minutes", false),
    new DVD("Treasure Planet", 458845, "John Musker", "95 minutes", false)
];

/*Task 4: Test the Inheritance*/
console.log([classic, gamerMag]);
classic.checkOut();
gamerMag.checkOut();
console.log([classic, gamerMag]);
console.log(movies);
movies.forEach(movie => {movie.returnItem()});


