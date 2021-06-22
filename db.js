let movieDb = [
  {
    year: 2013,
    title: "Rush",
    info: {
      directors: ["Ron Howard"],
      release_date: "2013-09-02T00:00:00Z",
      rating: 8.3,
      genres: ["Action", "Biography", "Drama", "Sport"],
      image_url:
        "https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      plot:
        "A re-creation of the merciless 1970s rivalry between Formula One rivals James Hunt and Niki Lauda.",
      rank: 2,
      running_time_secs: 7380,
      actors: ["Daniel Bruhl", "Chris Hemsworth", "Olivia Wilde"],
    },
  },

  {
    year: 2013,
    title: "This Is the End",
    info: {
      directors: ["Evan Goldberg", "Seth Rogen"],
      release_date: "2013-06-03T00:00:00Z",
      rating: 7.2,
      genres: ["Comedy", "Fantasy"],
      image_url:
        "https://occ-0-300-299.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABR5yMp5rCC3AXTH_vkizEn9n8PVck3KPEfypEFyWCqvh0O9oucREImp5Eh3pSJh0u7_ojY9LDoeS8HayoDyO8np5c_MUIYjL7A.jpg",
      plot:
        "While attending a party at James Franco's house, Seth Rogen, Jay Baruchel and many other celebrities are faced with the apocalypse.",
      rank: 6,
      running_time_secs: 6420,
      actors: ["James Franco", "Jonah Hill", "Seth Rogen"],
    },
  },
  {
    year: 2014,
    title: "X-Men: Days of Future Past",
    info: {
      directors: ["Bryan Singer"],
      release_date: "2014-05-21T00:00:00Z",
      genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
      image_url:
        "https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      plot:
        "The X-Men send Wolverine to the past to change a major historical event that could globally impact man and mutant kind.",
      rank: 9,
      actors: ["Jennifer Lawrence", "Hugh Jackman", "Michael Fassbender"],
    },
  },
  {
    year: 2014,
    title: "Transformers: Age of Extinction",
    info: {
      directors: ["Michael Bay"],
      release_date: "2014-06-25T00:00:00Z",
      genres: ["Action", "Adventure", "Sci-Fi"],
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Transformers_Age_of_Extinction_Poster.jpeg/220px-Transformers_Age_of_Extinction_Poster.jpeg",
      plot:
        "A mechanic and his daughter make a discovery that brings down Autobots and Decepticons - and a paranoid government official - on them.",
      rank: 10,
      actors: ["Mark Wahlberg", "Nicola Peltz", "Jack Reynor"],
    },
  },
  {
    year: 2013,
    title: "Now You See Me",
    info: {
      directors: ["Louis Leterrier"],
      release_date: "2013-05-21T00:00:00Z",
      rating: 7.3,
      genres: ["Crime", "Mystery", "Thriller"],
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/c/c7/Now_You_See_Me_Poster.jpg",
      plot:
        "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.",
      rank: 11,
      running_time_secs: 6900,
      actors: ["Jesse Eisenberg", "Common", "Mark Ruffalo"],
    },
  },
  {
    year: 2013,
    title: "Gravity",
    info: {
      directors: ["Alfonso Cuaron"],
      release_date: "2013-08-28T00:00:00Z",
      rating: 8.2,
      genres: ["Drama", "Sci-Fi", "Thriller"],
      image_url:
        "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_.jpg",
      plot:
        "A medical engineer and an astronaut work together to survive after an accident leaves them adrift in space.",
      rank: 12,
      running_time_secs: 5400,
      actors: ["Sandra Bullock", "George Clooney", "Ed Harris"],
    },
  },
  {
    year: 2013,
    title: "We're the Millers",
    info: {
      directors: ["Rawson Marshall Thurber"],
      release_date: "2013-08-03T00:00:00Z",
      rating: 7.2,
      genres: ["Comedy", "Crime"],
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMjA5Njc0NDUxNV5BMl5BanBnXkFtZTcwMjYzNzU1OQ@@._V1_.jpg",
      plot:
        "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
      rank: 13,
      running_time_secs: 6600,
      actors: ["Jason Sudeikis", "Jennifer Aniston", "Emma Roberts"],
    },
  },
  {
    year: 2013,
    title: "Riddick",
    info: {
      directors: ["David Twohy"],
      release_date: "2013-09-04T00:00:00Z",
      rating: 6.8,
      genres: ["Action", "Sci-Fi", "Thriller"],
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/6/69/Riddick_poster.jpg",
      plot:
        "Left for dead on a sun-scorched planet, Riddick finds himself up against an alien race of predators. Activating an emergency beacon alerts two ships: one carrying a new breed of mercenary, the other captained by a man from Riddick's past.",
      rank: 14,
      running_time_secs: 7140,
      actors: ["Vin Diesel", "Karl Urban", "Katee Sackhoff"],
    },
  },
  {
    year: 2013,
    title: "The Family",
    info: {
      directors: ["Luc Besson"],
      release_date: "2013-09-10T00:00:00Z",
      rating: 6.5,
      genres: ["Action", "Comedy", "Crime"],
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMjE2MzI0MzkyNV5BMl5BanBnXkFtZTcwMjQ2MDM2OQ@@._V1_.jpg",
      plot:
        "The Manzoni family, a notorious mafia clan, is relocated to Normandy, France under the witness protection program, where fitting in soon becomes challenging as their old habits die hard.",
      rank: 15,
      running_time_secs: 6660,
      actors: ["Robert De Niro", "Michelle Pfeiffer", "Dianna Agron"],
    },
  },
  {
    year: 2013,
    title: "Star Trek Into Darkness",
    info: {
      directors: ["J.J. Abrams"],
      release_date: "2013-05-02T00:00:00Z",
      rating: 7.9,
      genres: ["Action", "Adventure", "Sci-Fi"],
      image_url: "https://flxt.tmsimg.com/assets/p9463958_p_v10_ae.jpg",
      plot:
        "After the crew of the Enterprise find an unstoppable force of terror from within their own organization, Captain Kirk leads a manhunt to a war-zone world to capture a one man weapon of mass destruction.",
      rank: 16,
      running_time_secs: 7920,
      actors: ["Chris Pine", "Zachary Quinto", "Zoe Saldana"],
    },
  },
];
