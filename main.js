// Project: Magical Astral Spell generator.
console.log("Welcome to the Astral Tome!");
// git push origin master => Command to push commits to the remote repo. Reminder: init with a proper name next time.
const spellPrefix = ['Astral', 'Void', 'Stellar', 'Prism', 'Cosmic', 'Ether', 'Nebula', 'Stary'];
const spellSuffix = ['Echo', 'Pulse', 'Shackle', 'of Doom', 'Bind', 'Blast'];
// Create function to join spellnames and display message.
const spellJoin = (prefix, suffix) => {return console.log(`You chant out one of the many magical tome's entries: ${prefix} ${suffix}!`);}
// Create variables for random indexes.
let randSpellPrefix = spellPrefix[Math.floor(Math.random() * spellPrefix.length)]