class Tueur {

    constructor(name, hp,) {
        this.name = name;
        this.hp = hp
    }
}

let assasin = new Tueur("Jason", 50); 

class Stats {

    constructor (name, probaDammage, probaDeath, probaDeathWithDammage) {
        this.name = name;
        this.probaDammage = probaDammage;
        this.probaDeath = probaDeath;
        this.probaDeathWithDammage = probaDeathWithDammage
    }

}

/// je crée ma liste de caracteristique avec les stats de chaque 'classe'
let blonde = new Stats("blonde", 0.3, 0.4, 0.2);
let sportif = new Stats("sportif", 0.7, 0.7, 0.6);
let geek = new Stats("geek", 0.2, 0.3, 0.2);
let drogue = new Stats("drogue", 0.5, 0.2, 0.5);
let militaire = new Stats("militaire", 0.3, 0.7, 0.5);
let kamikaze = new Stats("kamikaze", 0.3, 0.7, 0.5);
let leboss = new Stats("le boss", 0.9, 0.1, 0.8);
let boulanger = new Stats("boulanger", 0.3, 0.7, 0.5);
let vieux = new Stats("vieux", 0.3, 0.7, 0.5);
let prisonnier = new Stats("prisonnier", 0.5, 0.6, 0.5);


let listClichés = [blonde, sportif, geek, drogue, militaire, kamikaze, leboss, boulanger, vieux, prisonnier];

// liste de prenoms
let prenoms = ["Fabrice", "Muazu", "Aimé", "Nourredine", "Boris", "Morgan", "Sheima", "RoxaNe", "Lena la goat", "Peiju"];


// il me faut 5 survivants
// leur noms seront aléatoire basé sur mon tableau de prénom
let survivors = [];

// Création de 5 survivants avec des carac aléatoires : 

for (let i=0; i<5; i++) {
    let randomPrenom = Math.floor(Math.random() * prenoms.length);
    let survivor = prenoms[randomPrenom];
    console.log(survivor);

    prenoms.splice(randomPrenom, 1)  // le prenom que je veux retirer viens de ma liste
}


/// Boucle principal du jeux 