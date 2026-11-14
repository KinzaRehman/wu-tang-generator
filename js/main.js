// Wu-Tang name logic, moved client-side from server.js so the app
// works as a static site on GitHub Pages with no server.
// Same arrays and same math as the old /api route.
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

document.querySelector("#submit").addEventListener('click', function () {
    const name = document.getElementById("name").value;
    const color = document.getElementById("color").value
    const date = document.getElementById("date").value
    const number = document.getElementById("number").value;
    const character = document.getElementById("character").value;
    const combineInput = ` ${name}  ${color}  ${date}  ${number} ${character}`
    const binary = combineInput.split("").map(character =>
        character.charCodeAt(0).toString(2)).join("");
    const inputNumber = parseInt(binary, 2)
    const firstName = inputNumber % array1FirstName.length
    const userFirstName = array1FirstName[firstName]
    const lastName = Math.floor(inputNumber / array1FirstName.length) % array2LastName.length
    const userLastName = array2LastName[lastName]
    const wutangName = `Wu ${userFirstName} ${userLastName}`
    const result = document.createElement("h2")
    result.textContent = `Hey, ${name}, from this day forward you'll be known as ${wutangName}`
    document.body.appendChild(result)
})
