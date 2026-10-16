
const movies = {
    "inception": {
        title: "Inception",
        year: 2010,
        rating: "8.8/10",
        genre: "Sci-Fi, Action, Thriller",
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        duration: "148 minutes",
        story: "Dom Cobb is a skilled thief who steals secrets from people's dreams. He is offered a chance to clear his past by performing an almost impossible task: planting an idea in someone's mind."
    },

    "interstellar": {
        title: "Interstellar",
        year: 2014,
        rating: "8.7/10",
        genre: "Sci-Fi, Adventure, Drama",
        director: "Christopher Nolan",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        duration: "169 minutes",
        story: "As Earth becomes increasingly uninhabitable, a former pilot joins a mission through a wormhole to search for a planet where humanity can survive."
    },

    "gladiator": {
        title: "Gladiator",
        year: 2000,
        rating: "8.5/10",
        genre: "Action, Drama, History",
        director: "Ridley Scott",
        cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        duration: "155 minutes",
        story: "Betrayed by a corrupt emperor, Roman general Maximus is forced into slavery and becomes a gladiator seeking justice and revenge."
    },

    "the-devil-wears-prada": {
        title: "The Devil Wears Prada",
        year: 2006,
        rating: "6.9/10",
        genre: "Comedy, Drama",
        director: "David Frankel",
        cast: ["Meryl Streep", "Anne Hathaway", "Emily Blunt"],
        duration: "109 minutes",
        story: "A young aspiring journalist becomes an assistant to a demanding editor at a leading fashion magazine and struggles to balance her career with her personal life."
    },

    "rocky-ii": {
        title: "Rocky II",
        year: 1979,
        rating: "7.3/10",
        genre: "Sports, Drama",
        director: "Sylvester Stallone",
        cast: ["Sylvester Stallone", "Talia Shire", "Burgess Meredith"],
        duration: "119 minutes",
        story: "After his first fight with Apollo Creed, Rocky Balboa attempts to build a life outside boxing before deciding to return to the ring for a rematch."
    },

    "die-hard": {
        title: "Die Hard",
        year: 1988,
        rating: "8.2/10",
        genre: "Action, Thriller",
        director: "John McTiernan",
        cast: ["Bruce Willis", "Alan Rickman", "Bonnie Bedelia"],
        duration: "132 minutes",
        story: "New York police officer John McClane fights a group of armed criminals who take control of a Los Angeles skyscraper during a Christmas party."
    },

    "top-gun": {
        title: "Top Gun",
        year: 1986,
        rating: "6.9/10",
        genre: "Action, Drama",
        director: "Tony Scott",
        cast: ["Tom Cruise", "Kelly McGillis", "Val Kilmer"],
        duration: "110 minutes",
        story: "A talented but impulsive naval aviator attends an elite fighter-pilot school, where he faces fierce competition and personal challenges."
    },

    "the-sheep-detective": {
        title: "The Sheep Detective",
        year: 2026,
        rating: "N/A",
        genre: "Mystery, Comedy",
        director: "Details to be verified",
        cast: ["Details to be verified"],
        duration: "Not verified",
        story: "A detective investigates mysterious events in a small town. Replace this placeholder with the verified plot and film credits."
    },

    "tenet": {
        title: "Tenet",
        year: 2020,
        rating: "7.3/10",
        genre: "Sci-Fi, Action, Thriller",
        director: "Christopher Nolan",
        cast: ["John David Washington", "Robert Pattinson", "Elizabeth Debicki"],
        duration: "150 minutes",
        story: "An operative becomes involved in a mission involving time inversion, attempting to prevent a global catastrophe."
    },

    "dune": {
        title: "Dune",
        year: 2021,
        rating: "8.0/10",
        genre: "Sci-Fi, Adventure, Drama",
        director: "Denis Villeneuve",
        cast: ["Timothée Chalamet", "Rebecca Ferguson", "Zendaya"],
        duration: "155 minutes",
        story: "Paul Atreides travels with his family to the desert planet Arrakis, where political betrayal and the struggle for control of a precious resource change his destiny."
    },

    "ford-vs-ferrari": {
        title: "Ford vs. Ferrari",
        year: 2019,
        rating: "8.1/10",
        genre: "Biography, Drama, Sport",
        director: "James Mangold",
        cast: ["Matt Damon", "Christian Bale", "Jon Bernthal"],
        duration: "152 minutes",
        story: "Automotive designer Carroll Shelby and fearless driver Ken Miles work together to build a racing car capable of challenging Ferrari at Le Mans in 1966."
    },

    "2012": {
        title: "2012",
        year: 2009,
        rating: "5.8/10",
        genre: "Action, Sci-Fi, Disaster",
        director: "Roland Emmerich",
        cast: ["John Cusack", "Chiwetel Ejiofor", "Amanda Peet"],
        duration: "158 minutes",
        story: "As a global catastrophe threatens civilization, a struggling writer tries to save his family while governments race to protect humanity."
    },

    "night-crawler": {
        title: "Night Crawler",
        year: 2014,
        rating: "7.3/10",
        genre: "Crime, Thriller, Drama",
        director: "Dan Gilroy",
        cast: ["Jake Gyllenhaal", "Rene Russo", "Riz Ahmed"],
        duration: "117 minutes",
        story: "Lou Bloom enters the world of freelance crime journalism in Los Angeles, becoming increasingly ruthless in his pursuit of shocking footage."
    },

    "transporter": {
        title: "Transporter",
        year: 2002,
        rating: "6.4/10",
        genre: "Action, Crime, Thriller",
        director: "Louis Leterrier and Corey Yuen",
        cast: ["Jason Statham", "Shu Qi", "François Berléand"],
        duration: "92 minutes",
        story: "A professional driver who follows strict rules for transporting packages discovers that his latest delivery hides a dangerous secret."
    },

    "seven": {
        title: "Seven",
        year: 1995,
        rating: "8.6/10",
        genre: "Crime, Mystery, Thriller",
        director: "David Fincher",
        cast: ["Brad Pitt", "Morgan Freeman", "Gwyneth Paltrow"],
        duration: "127 minutes",
        story: "Two detectives investigate a serial killer whose murders are inspired by the seven deadly sins."
    },

    "dead-poet-society": {
        title: "Dead Poet Society",
        year: 1989,
        rating: "8.1/10",
        genre: "Drama",
        director: "Peter Weir",
        cast: ["Robin Williams", "Robert Sean Leonard", "Ethan Hawke"],
        duration: "128 minutes",
        story: "An unconventional English teacher inspires students at a strict boarding school to think independently and pursue their passions."
    },

    "the-meg": {
        title: "The Meg",
        year: 2018,
        rating: "5.9/10",
        genre: "Action, Sci-Fi, Horror",
        director: "Jon Turteltaub",
        cast: ["Jason Statham", "Li Bingbing", "Rainn Wilson"],
        duration: "113 minutes",
        story: "A deep-sea rescue mission encounters a gigantic prehistoric shark, forcing a team of scientists and specialists to fight for survival."
    },

    "the-expendables": {
        title: "The Expendables",
        year: 2010,
        rating: "6.4/10",
        genre: "Action, Adventure, Thriller",
        director: "Sylvester Stallone",
        cast: ["Sylvester Stallone", "Jason Statham", "Jet Li"],
        duration: "103 minutes",
        story: "A team of elite mercenaries accepts a dangerous mission to overthrow a ruthless dictator and faces unexpected complications."
    },

    "bad-boys": {
        title: "Bad Boys",
        year: 1995,
        rating: "7.0/10",
        genre: "Action, Comedy, Crime",
        director: "Michael Bay",
        cast: ["Will Smith", "Martin Lawrence", "Tea Leoni"],
        duration: "119 minutes",
        story: "Two Miami detectives must recover stolen drugs and protect a witness while navigating a case that threatens their partnership."
    },

    "john-wick": {
        title: "John Wick",
        year: 2014,
        rating: "7.4/10",
        genre: "Action, Crime, Thriller",
        director: "Chad Stahelski",
        cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"],
        duration: "101 minutes",
        story: "A retired hitman returns to the criminal underworld after a brutal attack brings his past back into his life."
    }
};


const moviePosters = {
    "inception": "Images/Inception.jpg",
    "interstellar": "Images/Intersteller.jpg",
    "gladiator": "Images/gladiator.jpg",
    "the-devil-wears-prada": "Images/Devilswearprada.jpg",
    "rocky-ii": "Images/Rocky2.jpg",
    "die-hard": "Images/diehard.jpg",
    "top-gun": "Images/topgun.jpg",
    "the-sheep-detective": "Images/SheepDetective.jpg",
    "tenet": "Images/tenet.jpg",
    "dune": "Images/dune1.jpg",
    "ford-vs-ferrari": "Images/FordVsFerrari.jpg",
    "2012": "Images/2012.jpg",
    "night-crawler": "Images/NightCrawler.jpg",
    "transporter": "Images/Transporter.jpg",
    "seven": "Images/Seven.jpg",
    "dead-poet-society": "Images/deadpoetesociety.jpg",
    "the-meg": "Images/the-meg.jpg",
    "the-expendables": "Images/the-expandables.jpg",
    "bad-boys": "Images/bad-boys.jpg",
    "john-wick": "Images/john-wick.jpg"
};
