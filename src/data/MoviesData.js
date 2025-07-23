const MoviesData = [
  {
    id: 1,
    title: "Inception",
    genre: "science fiction",
    language: "english",
    releaseYear: 2010,
    duration: 148,
    posterUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw"
  },
  {
    id: 2,
    title: "Interstellar",
    genre: "science fiction",
    language: "english",
    releaseYear: 2014,
    duration: 123,
    posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX"
  },
  {
    id: 3,
    title: "The Godfather",
    genre: "drama",
    language: "english",
    releaseYear: 1972,
    duration: 148,
    posterUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAY2xsJVIZxm3K0gNtOMr9CSCvLdr5kdo3V3pv2HMuUkTBhFzRe5-b8NDRmO1mt5S5Xp_YyQ"
  },
  {
    id: 4,
    title: "Parasite",
    genre: "thriller",
    language: "korean",
    releaseYear: 2019,
    duration: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
  },
  {
    id: 5,
    title: "The Dark Knight",
    genre: "action",
    language: "english",
    releaseYear: 2008,
    duration: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    id: 6,
    title: "Joker",
    genre: "drama",
    language: "english",
    releaseYear: 2019,
    duration: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
  },
  {
    id: 7,
    title: "Avengers: Endgame",
    genre: "action",
    language: "english",
    releaseYear: 2019,
    duration: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  },
  {
    id: 8,
    title: "Spirited Away",
    genre: "fantasy",
    language: "japanese",
    releaseYear: 2001,
    duration: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg"
  },
  {
    id: 9,
    title: "Titanic",
    genre: "romance",
    language: "english",
    releaseYear: 1997,
    duration: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
  },
  {
    id: 10,
    title: "The Matrix",
    genre: "science fiction",
    language: "english",
    releaseYear: 1999,
    duration: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
    id: 11,
    title: "La La Land",
    genre: "romance",
    language: "english",
    releaseYear: 2016,
    duration: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"
  },
  {
    id: 12,
    title: "Whiplash",
    genre: "drama",
    language: "english",
    releaseYear: 2014,
    duration: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/oPxnRhyAIzJKGUEdSiwTJQBa2xj.jpg"
  },
  {
    id: 13,
    title: "Fight Club",
    genre: "thriller",
    language: "english",
    releaseYear: 1999,
    duration: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg"
  },
  {
    id: 14,
    title: "Forrest Gump",
    genre: "drama",
    language: "english",
    releaseYear: 1994,
    duration: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg"
  },
  {
    id: 15,
    title: "The Shawshank Redemption",
    genre: "drama",
    language: "english",
    releaseYear: 1994,
    duration: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  },
  {
    id: 16,
    title: "Coco",
    genre: "animation",
    language: "english",
    releaseYear: 2017,
    duration: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg"
  },
  {
    id: 17,
    title: "Frozen",
    genre: "animation",
    language: "english",
    releaseYear: 2013,
    duration: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg"
  },
  {
    id: 18,
    title: "Black Panther",
    genre: "action",
    language: "english",
    releaseYear: 2018,
    duration: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
  },
  {
    id: 19,
    title: "Your Name",
    genre: "romance",
    language: "japanese",
    releaseYear: 2016,
    duration: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg"
  },
  {
    id: 20,
    title: "The Lion King",
    genre: "animation",
    language: "english",
    releaseYear: 1994,
    duration: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg"
  }
];


export default MoviesData;