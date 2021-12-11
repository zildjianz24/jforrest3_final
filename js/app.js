var teamName = prompt("What is your favorite NFL team? (Do Not Include City.)");

//team names and image locations for logos
var teamsArray = [
  {"Name":"49ers", 
   "Image": "resources/49ers.svg"},

  {"Name": "Bears",
   "Image": "resources/bears.png"},

  {"Name": "Bengals",
   "Image": "resources/bengals.png"},

  {"Name": "Bills",
   "Image": "resources/bills.png"},

  {"Name": "Broncos",
   "Image" : "resources/broncos.png"},

  {"Name": "Browns",
   "Image" : "resources/browns.svg"},

  {"Name": "Buccaneers",
   "Image": "resources/buccaneers.png"},

  {"Name": "Cardinals",
   "Image" : "resources/cardinals.png"}, 

  {"Name": "Chargers",
   "Image": "resources/chargers.png"},

  {"Name": "Chiefs",
   "Image": "resources/chiefs.svg"},

  {"Name": "Colts",
   "Image": "resources/colts.png"},

  {"Name": "Cowboys",
   "Image": "resources/cowboys.png"},

  {"Name": "Dolphins",
   "Image" : "resources/dolphins.png"},

  {"Name": "Eagles",
   "Image" : "resources/eagles.png" },

  {"Name": "Falcons",
   "Image" : "resources/falcons.png" },

  {"Name": "Giants",
   "Image" : "resources/giants.png" },

  {"Name": "Jaguars",
   "Image" : "resources/jaguars.png"},

  {"Name": "Jets",
   "Image": "resources/jets.png"},

  {"Name": "Lions",
   "Image" : "resources/lions.png"}, 

  {"Name": "Packers",
   "Image": "resources/packers.png"}, 

  {"Name": "Panthers",
   "Image": "resources/panthers.png"},

  {"Name": "Patriots",
   "Image": "resources/patriots.png"}, 

  {"Name": "Raiders",
   "Image": "resources/raiders.png" },

  {"Name": "Rams",
   "Image": "resources/rams.png"},

  {"Name": "Ravens",
   "Image": "resources/ravens.png"},

  {"Name": "Football Team",
   "Image": "resources/footballteam.png"},

  {"Name": "Saints",
   "Image": "resources/saints.png"},

  {"Name": "Seahawks",
   "Image": "resources/seahawks.png"},

  {"Name": "Steelers",
   "Image": "resources/steelers.png"},

  {"Name": "Texans",
  "Image": "resources/texans.png"},

  {"Name": "Titans",
   "Image": "resources/titans.png"},
   
  {"Name": "Vikings",
   "Image": "resources/vikings.png"}
];

// Inserts image onto the screen based off of users input
function insertImage() {
  var img = document.createElement('IMG');
  img.setAttribute('src', image);
  img.setAttribute('class', 'images');
  document.getElementById("image").appendChild(img);
 };

// Loops through team names and matches user input, also calls function to insert image
for (var i = 0; i < teamsArray.length ; i++) {
  if(teamsArray[i].Name.toUpperCase() === teamName.toUpperCase()) {
    image = teamsArray[i].Image
    teamName = teamsArray[i].Name
    insertImage();
  } 
};














