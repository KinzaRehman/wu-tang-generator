/* 
this is what google said when reseraching how the algorithm was built 
The consistency of the original Wu-Tang Clan Name Generator comes from a deterministic string-hashing algorithm. Rather than picking names at random using standard pseudo-random number generators, the script converts your inputted name into a permanent mathematical value that maps to a specific word list. 
This ensures that typing "Donald Glover" will always yield "Childish Gambino" every single time, no matter when or where you test it. 
How the Algorithm Works Behind the Scenes
The original 2002 generator (created by Pieter Dom on the site mess.be) relies on a few straightforward steps: 
The Pre-Built Databases: The backend contains two separate arrays of words modeled after Wu-Tang culture (incorporating martial arts imagery, Five-Percent Nation terminology, and street-style adjectives/nouns).
List A (First Names / Modifiers): e.g., Childish, Violent, Shriekin', Phantom.
List B (Last Names / Titles): e.g., Gambino, Prophet, Overlord, Wizard. 
String Character Hashing: When you input your real name, the script calculates a unique numeric value based on the name's character pattern (such as adding up the ASCII values of all the letters or checking character placements). 
The Modulo Operator (%): To turn that massive character-sum into an index that fits the size of the database, the algorithm uses a modulo calculation.
For example, if List A has 50 words, it takes (Your Name's Numeric Value) % 50. The remainder gives a specific index between 0 and 49.
The Final Output: The script pulls the word matching that calculated index from List A, repeats a similar mathematical conversion to pick an index from List B, and joins them together. 

YouTube
·Prof. John Gallaugher
Because math doesn't change, your name serves as a permanent key to a specific combination. However, the slightest variation—like typing "Tim" instead of "Timothy"—will produce a completely different numeric total and a brand-new alias. 
If you want to look at alternative variations, some modern tools use different stylistic databases. Would you like to see how a basic hash script looks in code, or are you looking for the exact location to generate your own Wu name?
// Import the built-in HTTP module
const http = require('http');

// Define the server logic
const server = http.createServer((req, res) => {
    // Set the response status and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send the response text
    res.end('Hello, World!\n');
});

// Specify the port to listen on
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});


spli based on A B C, and listen for the choices, then output an array item based on those choices

*/ 
const array1FirstName = ["Agile", "Accelerated", "Active", "Aggressive", "Animated", 
    "Blazing", "Bounding", "Brisk", "Charging", "Darting", 
    "Driven", "Dynamic", "Energetic", "Feisty", "Fierce", 
    "Fleet", "Flying", "Galloping", "Hyper", "Impulsive", 
    "Intense", "Kinetic", "Lively", "Mercurial", "Nimble", 
    "Perky", "Peppy", "Quick", "Rapid", "Restless", 
    "Rushing", "Snappy", "Speedy", "Spirited", "Sprightly", 
    "Spry", "Swift", "Turbulent", "Urgent", "Vibrant", 
    "Vigor", "Zesty", "Zippy","afraid", "alive", "angry", 
    "annoyed", "bad", "beautiful", "big", "bitter", "black", "blue",
    "bored", "brave", "bright", "broken", "busy", "calm", "clean", 
    "clever", "cold", "cool","crazy", "cute", "dark", "dead", 
    "deep", "dirty", "dry", "dull", "early", "easy",
    "empty", "fair", "fake", "fast", "fat", "fine", "firm", "flat", "free", "fresh",
    "full", "funny", "gentle", "giant", "good", "great", "green", "gray", "happy", "hard",
    "heavy", "high", "hot", "huge", "hungry", "icy", "kind", "large", "late", "lazy",
    "light", "little", "long", "loud", "low", "lucky", "mean", "messy", "modern", "muddy",
    "narrow", "neat", "new", "nice", "noisy", "odd", "old", "open", "orange", "other",
    "pale", "plain", "poor", "pretty", "proud", "quiet", "rare", "raw", "red",
    "rich", "rude", "round", "sad", "safe", "short", "sharp", "shy", "sick", "slow"
  ];

  console.log(array1FirstName.length)


const array2LastName = [
    "crusher", "wrecker", "shredder", "demolisher", "blaster",
    "chaser", "runner", "catcher", "stalker", "drifter",
    "fighter", "striker", "brawler", "slayer", "attacker",
    "dasher", "leaper", "bounder", "charger",
    "diver", "slasher", "survivor", "striver", "thrasher","Bold", 
    "Boisterous", "Breakneck", "Bustling", "Catapulting", 
    "Clashing", "Crashing", "Decisive", "Diving", "Drastic", 
    "Exploding", "Explosive", "Flashing", "Forceful", 
    "Hurling", "Impactful", "Jolt", "Jabbing", "Launching", 
    "Leaping", "Lunging", "Pounding", "Plunging", "Propelling", 
    "Pushing", "Raging", "Rallied", "Relentless", "Rolling", 
    "Running", "Shaking", "Shocking", "Slashing", "Smashing", 
    "Springing", "Sprinting", "Stomping", "Stormy", "Striking", 
    "Surging", "Sweeping", "Thrusting", "Thumping", "Unstoppable", 
    "Vehement", "Vigorous", "Violent", "Whirling", "Wild"
  ];
  console.log(array2LastName.length)

  


const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
//line 10 is not my code i was getting a outdated error and i googled and they reocmmended this
  const myURL = new URL(req.url, `http://${req.headers.host}`)

  const page = myURL.pathname
  const params = Object.fromEntries(myURL.searchParams)

  console.log(page)

  if (page == '/') {

    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      res.end()
    })

  } else if (page == '/js/main.js') {

    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'})
      res.write(data)
      res.end()
    })
  
   } else if (page == '/css/style.css') {

     fs.readFile('css/style.css', function(err, data) {
       res.writeHead(200, {'Content-Type': 'text/css'})
       res.write(data)
       res.end()
   })

  } else if (page == '/api') {

  if ('wutang' in params) {

    const userInput = params['wutang']

    //make the persons binary into a number using parseInt method, 
    //logic, takes the whole binary, with base 2 to return a number, 
    //then th
    const inputNumber = parseInt(userInput, 2)
    console.log(`the binary after returning the bindry into base 2:  ${inputNumber} `)

    // FIrst name math 11 %142
    const firstName = inputNumber % array1FirstName.length
    const userFirstName = array1FirstName[firstName]

    //lastname math
   const lastName = Math.floor(inputNumber / array1FirstName.length) % array2LastName.length
   const userLastName = array2LastName[lastName]

    const wutangName = `Wu ${userFirstName} ${userLastName}`
            
            
      console.log(wutangName)


      /* const response = {
        answer: userInput 

      } */

      const response = { answer: wutangName}
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(response))
    }
  }
})

server.listen(8000)


//http://localhost:8000/

