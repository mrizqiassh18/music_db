use music_db

db.createCollection("songs")


db.createCollection("artists")


db.createCollection("popular_songs")


db.songs.insertMany([
    {
  title: "Mungkin",
  artists: ["Potret"],
  album: "Potret"
},
{
  title: "Mungkin Nanti",
  artists: ["Peterpan"],
  album: "Bintang di Surga"
},
{
  title: "Sampai Menutup Mata",
  artists: ["Acha Septriasa"],
  album: "Heart"
},
{
  title: "Cinta Luar Biasa",
  artists: ["Andmesh Kamaleng"],
  album: "Single"
},
{
  title: "Separuhku",
  artists: ["Nano"],
  album: "Nano"
},
{
  title: "Kangen",
  artists: ["Dewa 19"],
  album: "Cintailah Cinta"
},
{
  title: "Cinta Terlarang",
  artists: ["The Virgin"],
  album: "Positive Negative"
},
{
  title: "Hampa",
  artists: ["Ari Lasso"],
  album: "Sendiri Dulu"
},
{
  title: "Tentang Rindu",
  artists: ["Virzha"],
  album: "Seperti Ini"
},
{
  title: "Pergi Pagi Pulang Pagi",
  artists: ["Armada"],
  album: "Pagi Pulang Pagi"
}
  ]);
  
db.artists.insertMany([
    {
    name: "Potret",
    dateOfBirth: new Date("1971-02-12"),
    genres: ["Pop"]
  },
  {
    name: "Peterpan",
    dateOfBirth: new Date("1980-04-05"),
    genres: ["Pop"]
  },
  {
    name: "Acha Septriasa",
    dateOfBirth: new Date("1985-02-18"),
    genres: ["Pop"]
  },
  {
    name: "Andmesh Kamaleng",
    dateOfBirth: new Date("1982-07-19"),
    genres: ["Pop"]
  },
  {
    name: "Nano",
    dateOfBirth: new Date("1982-01-20"),
    genres: ["Pop"]
  },
  {
    name: "Dewa 19",
    dateOfBirth: new Date("1966-11-19"),
    genres: ["Pop"]
  },
  {
    name: "The Virgin",
    dateOfBirth: new Date("1990-01-12"),
    genres: ["Pop"]
  },
  {
    name: "Ari Lasso",
    dateOfBirth: new Date("1989-05-14"),
    genres: ["Pop"]
  },
  {
    name: "Virzha",
    dateOfBirth: new Date("1982-06-23"),
    genres: ["Pop"]
  },
  {
    name: "Armada",
    dateOfBirth: new Date("1980-12-12"),
    genres: ["Pop"]
  },
])

db.popular_songs.insertMany([

    {
    title:"Mungkin Nanti",
    playCount: 2300,
    period: "Juli 2023"
    },
    
    {
    title:"Mungkin",
    playCount: 1200,
    period: "Juli 2023"
    },
    
    {
    title:"Kangen",
    playCount: 10000,
    period: "Juli 2023"
    },
    
    {
    title:"Cinta Terlarang",
    playCount: 2400,
    period: "Juni 2023"
    },
    
    {
    title:"Tentang Rindu",
    playCount: 2042,
    period: "April 2023"
    },
    
    {
    title:"Pergi Pagi Pulang Pagi",
    playCount: 1100,
    period: "Mei 2023"
    },
    {
    title:"Hampa",
    playCount: 5000,
    period: "Desember 2022"
    },
    {
    title:"Separuhku",
    playCount: 3213,
    period: "Februari 2023"
    },
    {
    title:"Cintailah Cinta",
    playCount: 1921,
    period: "Januari 2023"
    },
    {
    title:"Sampai Menutup Mata",
    playCount: 921,
    period: "September 2022"
    },
    {
    title:"Cinta Luarbiasa",
    playCount: 1230,
    period: "Juni 2022"
    },
    
    ])